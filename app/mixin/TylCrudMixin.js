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

  _selectionChange() {
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  _addWithLogo(model) {
    let record = Ext.create(model);
    const entityPanel = this.getView().up();
    const logoForm = entityPanel.down('#logoForm');
    logoForm.getForm().setValues({'logoFile': null})
    const vm = entityPanel.getViewModel();
    vm.set('record', record);
    this._setModelForAdd(entityPanel);
  },

  _addInGrid(model) {
    const store = this.getView().getStore();
    const rec = Ext.create(model);
    rec.set('id', null);
    rec.set('version', null);
    const rowEditing = this.getView().findPlugin('rowediting');
    store.insert(0, rec);
    rowEditing.startEdit(rec, 0);
  },

  _setModelForAdd(entityPanel) {
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenId', true)
  },

  _setModelForModify() {
    const entityPanel = this.getView().up();
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenId', false)
  },

  _resetFormToNotDirty(record, entityForm) {
    const entityPanel = this.getView().up();
    const form = entityPanel.down(entityForm);
    form.getForm().setValues(record.data)
    form.reset();
  },

  _rowDblClick: function (tableview, record, element, rowIndex, e, eOpts) {
    const entityPanel = tableview.up().up(); //tableview->gridPanel->entityPanel
    const vm = entityPanel.getViewModel();
    vm.set('record', record);
  },

  _editInGrid(editor, context){
    const store= this.getView().getStore();
    store.sync();
    store.reload();
    this.getView().getSelectionModel().deselectAll();
  },

  _cancelEditInGrid(rowEditing, context) {
    if (context.record.phantom) {
      this.getView().store.remove(context.record);
      this.getView().getSelectionModel().deselectAll();
    }
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                               Gestione Form
  /////////////////////////////////////////////////////////////////////////////////////////////////
  _showGrid() {
    const me = this;
    const viewModel = me.getView().up().getViewModel();
    viewModel.set('formHidden', true);
    viewModel.set('gridHidden', false);
  },

  _saveWithLogo(mainFormId, endpoint) {
    const me = this;
    //const form = this.getView().down('#mainForm').getForm();
    const form = this.getView().down(mainFormId).getForm();
    form.submit({
      success: function (form, action) {
        const file = me._getFile();  // Get the file from the form
        if (file) { // If the file is present, save it
          me._saveLogo(endpoint,action.result.id, file)
        } else { // Otherwise just reload the grid
          me._reloadStore()
          me._showGrid();
        }
      },
      failure: function (form, action) {
        Ext.Msg.alert('Errore nell\'aggiornamento dell\'entità', action.result.msg);
      }
    });
  },

  _saveLogo(endpoint,id,file) {
    const me = this;
    //var url = Ext.manifest.server + 'company/uploadLogo?' + new URLSearchParams({
    const url = Ext.manifest.server + endpoint + new URLSearchParams({
      id: id
    });
    const gridToRefresh = me.getView().up().down('grid');
    me._saveFile(url, file, gridToRefresh);
  },

  _saveFile(url, file, gridToRefresh) {
    const me = this;

    if (file) {
      var formData = new FormData();
      formData.append('file', file);
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

  _reloadStore() {
    const me = this;
    const gridToRefresh = me.getView().up().down('grid');
    gridToRefresh.getStore().reload();
    gridToRefresh.getSelectionModel().deselectAll();
  },

  _removeLogo(controller) {
    const me = this;
    const entityPanel = me.getView().up();
    const vm = entityPanel.getViewModel();
    const id = vm.get('record.id');
    controller.removeLogo(id);
    me._reloadStore()
    me._showGrid();
    console.log('Logo removed');
  },

  _formDirtyChange(basic, dirty) {
    if (dirty)
      this._enableSaveButton();
    else
      this._disableSaveButton();
  },
  _enableSaveButton() {
    this.getView().up().getViewModel().set('saveButtonDisabled', false);
  },
  _disableSaveButton() {
    this.getView().up().getViewModel().set('saveButtonDisabled', true);
  },

  _getFile() {
    const formPanel = this.getView().down('#logoForm');
    const fileField = formPanel.down('filefield');
    return fileField.fileInputEl.dom.files[0];
  },

  ////////////////////////////// OLD //////////////////////////////////////// /////////////
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
  _removeSelection() {
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
