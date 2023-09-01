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

  _onNewRowDblClick: function (tableview, record, element, rowIndex, e, eOpts) {
    const entityPanel = tableview.up().up(); //tableview->gridPanel->entityPanel
    const vm = entityPanel.getViewModel();
    vm.set('record', record);
    vm.set('gridHidden', true);
    vm.set('formHidden', false);
    vm.set('hiddenId', false)
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
  _loadFormWithNewRecord(form, record) {
    record.set('id', null);
    form.down('form').getForm().loadRecord(record);
  },

  /**
   * Salva il contenuto della form.
   * Se salvataggio andato a buon fine, reload dello store e hide della form
   * @param entityName
   */
  _submitForm: function (entityName) {
    const me = this;
    const form = me.getView();
    // const entityPanel = form.up();
    // const grid = entityPanel.down('grid');
    const store = form.up().down('grid').getStore();
    if (!form.isValid()) {
      Ext.Msg.alert('Errore nella validazione del form', 'Form invalido o incompleto. \nVerificare che tutti i campi obbligatori siano stati compilati')
    } else {
      form.submit({
        url: Ext.manifest.server + entityName + '/submit',
        method: 'POST',
        success: function (form, result, data) {
          store.load();
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
        }
      });
    }
  },

  _saveFile(url, file, gridToRefresh) {
    const me = this;

    if (file) {
      var formData = new FormData();
      formData.append('file', file);

      // var url = Ext.manifest.server + 'company/uploadLogo?' + new URLSearchParams({
      //   id: id
      // });

      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            if (gridToRefresh) {
              // Logo uploaded successfully
              gridToRefresh.getStore().reload();
              gridToRefresh.getSelectionModel().deselectAll();
              me._showGrid();
            }
          } else {
            // Handle error response
            debugger;
            Ext.Msg.alert('Failure', 'Status:' + response.status + ' ' + response.statusText);
          }
        })
        .catch(error => {
          // Handle fetch error
          Ext.Msg.alert('Error uploading file:', error);
        });
    } else {
      Ext.Msg.alert('Error', 'Please select a file to upload.');
    }
  },


  /**
   * Uscita senza save dalla form e suo hide
   */
  _cancelForm(store) {
    const me = this;
    me.getView().up().down('grid').getStore().load()
  },

  /**
   * Gestione dei glag per lo spegnimento della form e l'accensione della grid
   * @private
   */
  _showGrid() {
    const me = this;
    const viewModel = me.getView().up().getViewModel();
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
