Ext.define('VegaUi.mixin.TylCrudMixin', {
  extend: 'Ext.Mixin',

  mixinId: 'tylCrudMixinId',

  mixinConfig: {
    after: {
      destroy: 'afterDestroy'
    }
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                               Gestione Grid
  /////////////////////////////////////////////////////////////////////////////////////////////////


  /**
   * Caricamento di un record selezionato (tramite double tap) dalla grid e apertura della form
   * @param grid
   */
  _onRowDblClick: function (tableview, record, element, rowIndex, e, eOpts) {
    const entityPanel = tableview.up().up(); //tableview->gridPanel->entityPanel
    const formPanel = entityPanel.down('panel');
    const form = formPanel.down('form');
    const viewModel = entityPanel.getViewModel();
    if (record) {
      if (form != undefined && form != null && form.reference.endsWith('EntityForm')) {
        form.reset();
        form.loadRecord(record);
        form.query('field:first')[0].focus();
      }
    }
  },

  _showForm(tableview) {
    const entityPanel = tableview.up().up(); //tableview->grid->gridPanel->entityPanel
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
  },


  /**
   * Reload della grid
   */
  _reloadGrid() {
    this.getView().getStore().load();
  }
  ,

  /**
   * Esegue la duplicazione dei record selezionati eseguendo, per ciascuno di essi, il metodo duplicateRecord
   * @param entity
   */
  duplicateRecordTyl(entity) {
    const me = this;
    const grid = me.getViewModel().get('grid');
    const selectedRows = grid.getSelectionModel().getSelection();
    if (selectedRows.length) {
      me.duplicateRecords(entity, grid, selectedRows);
    }
  }
  ,

  /**
   * Cancellazione record selezionati
   * @param entityName
   */
  _removeSelection(entityName) {
    const me = this;
    //const grid = me.getView().down('grid')
    const grid = me.getView();
    const store = grid.getStore();
    const selectedRow = grid.getSelectionModel().getSelection();
    if (selectedRow) {
      Ext.Msg.confirm(
        'Conferma cancellazione',
        'Confermi la cancellazione degli elementi selezionati?',
        function (btn) {
          if (btn === 'yes') {
            store.remove(selectedRow)
            store.sync({
              success: function (localForm, action) {
                store.reload()
              },
              failure: function () {
                Ext.Msg.alert('Risultato', 'Gli elementi selezionati non sono stati cancellati');
              },
              callback: function () {
                grid.getSelectionModel().deselectAll()
              }
            });
          }
        }
      );
    } else
      Ext.Msg.alert(
        'Nessuna selezione',
        'Selezionare prima gli elementi da cancellare')
  },

///////////////////////////////////////////////////////////////////////////////////////////////
//                        Gestione Form
///////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Caricamento del nuovo record sulla form e apertura della form stessa.
   * @param record
   */
  _loadFormWithNewRecord(form,record) {
    record.set('id', null);
    form.down('form').getForm().loadRecord(record);
  },

  /**
   * Salva il contenuto della form.
   * Se salvataggio andato a buon fine, reload dello store e hide della form
   * @param entityName
   */
  _submitForm: function (entityName,externalHideForm) {
    const me = this;
    const formContainer = me.getView();
    const form = formContainer.down('form');
    const entityPanel = formContainer.up();
    const grid = entityPanel.down('grid');
    const store = grid.getStore();
    const viewModel = entityPanel.getViewModel();
    if (!form.isValid()) {
      Ext.Msg.alert('Errore nella validazione del form', 'Form invalido o incompleto. \nVerificare che tutti i campi obbligatori siano stati compilati')
    } else {
      form.submit({
        url: Ext.manifest.server + entityName + '/submit',
        method: 'POST',
        success: function (form, result, data) {
          Ext.suspendLayouts();
          store.load({
            callback: function () {
              viewModel.set('disabledGridButtons', false);
              if(!externalHideForm) {
                formContainer.hide();
              }
              Ext.resumeLayouts(true);
            }
          });
        },
        failure: function (form, action) {
          switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
              Ext.Msg.alert(
                'Failure',
                'Form fields may not be submitted with invalid values'
              );
              break;
            case Ext.form.action.Action.CONNECT_FAILURE:
              const rt = JSON.parse(action.response.responseText);
              const ae = rt.apierror;
              const message = 'Status: <b>' + ae['status'] + '</b><br/>Message: <b>' + ae['message'] + '</b><br/>Debug: <b>' + ae['debugMessage'] + '</b';
              Ext.Msg.alert('Failure', 'Ajax communication failed:<br/> ' + message);
              break;
            case Ext.form.action.Action.SERVER_INVALID:
              Ext.Msg.alert('Failure', action.result.msg);
          }
          Ext.suspendLayouts();
          store.load({
            callback: function () {
              viewModel.set('disabledGridButtons', false);
              if(!externalHideForm) {
                formContainer.hide();
              }
              Ext.resumeLayouts(true);
            }
          });
        }
      });
    }
  }
  ,

  /**
   * Uscita senza salvare dalla form e suo hide
   */
  _cancelForm(store) {
    const me = this;
    this.getView().up().getViewModel().set('disabledGridButtons', false)
    me.getView().up().down('grid').getStore().load()
  },

  _showGrid(){
    const me = this;
    const viewModel= me.getView().up().getViewModel();
    viewModel.set('disabledGridButtons', false);
    viewModel.set('formHidden', true);
    viewModel.set('gridHidden', false);
  },


////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Private Mehods
////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Raccoglie in un array tutti gli id dei record da duplicare e li invia al server per la dublicazione.
   * Manda un messaggio di successo o insuccesso mostrando il numero di record coinvolti
   * Al termine fa la reload dello store e
   */
  duplicateRecords(entity, grid, selectedRows) {
    const ids = [];
    for (let record of selectedRows) {
      const id = {"id": record.data.id};
      ids.push(id);
    }
    Ext.Ajax.request({
      url: Ext.manifest.server + entity + '/replicate',
      method: 'POST',
      jsonData: ids,
      success: function (response, opts) {
        Ext.Msg.alert('Replicate ' + entity, Ext.decode(response.responseText).msg);
      },
      failure: function (response, opts) {
        Ext.Msg.alert('Replicate ' + entity, Ext.decode(response.responseText).msg);
      },
      callback: function () {
        grid.getStore().reload();
        grid.getSelectionModel().deselectAll();
      }
    })
  }
  ,


// monitoraggio destroy
  afterDestroy() {
    console.log('destroy')
  },

})
