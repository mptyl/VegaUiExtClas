Ext.define('VegaUi.mixin.TylCrudMixin', {
  extend: 'Ext.Mixin',

  mixinId: 'tylCrudMixinId',

  mixinConfig: {
    after: {
      destroy: 'afterDestroy'
    }
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //                               New - Gestione Grid
  /////////////////////////////////////////////////////////////////////////////////////////////////

  _selectionChange() {
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  _add(model) {
    const record = Ext.create(model);
    const entityPanel = this.getView().up();
    const form = entityPanel.down('form')
    record.set('id', null);
    form.getForm().loadRecord(record);
    this.__setModelForAdd(entityPanel);
  },

  _addWithAttachment(model) {
    let record = Ext.create(model);
    const entityPanel = this.getView().up();
    const logoForm = entityPanel.down('#logoForm');
    logoForm.getForm().setValues({'logoFile': null})
    const vm = entityPanel.getViewModel();
    vm.set('record', record);
    this.__setModelForAdd(entityPanel);
  },

  _addInGrid(model) {
    const store = this.getView().getStore();
    const rec = Ext.create(model);
    rec.set('id', null);
    // rec.set('version', null);
    const rowEditing = this.getView().findPlugin('rowediting');
    store.insert(0, rec);
    rowEditing.startEdit(rec, 0);
  },

  _rowDblClick: function (tableview, record, element, rowIndex, e, eOpts) {
    const entityPanel = tableview.up().up(); //tableview->gridPanel->entityPanel
    const vm = entityPanel.getViewModel();
    vm.set('record', record);
    this.__setModelForModify()
    this.__resetFormToNotDirty(record)
  },

  _editInGrid(editor, context) {
    const store = this.getView().getStore();
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

  _duplicateSelection() {
    const me = this;
    const grid = me.getView();
    const selectedRow = grid.getSelectionModel().getSelection();
    if (selectedRow) {
      Ext.Msg.confirm(
        'Conferma duplicazione',
        'Confermi la duplicazione degli elementi selezionati?',
        function (btn) {
          if (btn === 'yes') {
            const id = selectedRow[0].id
            questionnaireDirectController.replicate(selectedRow[0].id);
            grid.getStore().reload();
          }
        });
    } else
      Ext.Msg.alert(
        'Nessuna selezione',
        'Selezionare prima gli elementi da duplicarw')
  },

  //region Private Methods
  __setModelForModify() {
    const entityPanel = this.getView().up();
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenId', false)
  },

  __resetFormToNotDirty(record) {
    const entityPanel = this.getView().up();
    const form = entityPanel.down('form');
    form.getForm().setValues(record.data)
    form.reset();
  },

  __setModelForAdd(entityPanel) {
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenId', true)
  },
  //endregion


//////////////////////////////////////////////////////////////////////////////////////////////////
//                               New - Gestione Form
/////////////////////////////////////////////////////////////////////////////////////////////////

  _saveWithAttachment(mainFormId, endpoint) {
    const me = this;
    //const form = this.getView().down('#mainForm').getForm();
    const form = this.getView().down(mainFormId).getForm();
    form.submit({
      success: function (form, action) {
        const file = me.__getFile();  // Get the file from the form
        if (file) { // If the file is present, save it
          me.__saveAttachment(endpoint, action.result.id, file)
        } else { // Otherwise just reload the grid
          me.__reloadStore()
          me._showGrid();
        }
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
              Ext.Msg.alert('Failure', 'Ajax communication failed');
              break;
            case Ext.form.action.Action.SERVER_INVALID:
              Ext.Msg.alert('Failure', action.result.msg);
          }
        }
    });
  },

  _saveWithoutAttachment(entityName) {
    const me = this;
    const form = me.getView();
    const store = form.up().down('grid').getStore();
    if (!form.isValid()) {
      Ext.Msg.alert('Errore nella validazione del form', 'Form invalido o incompleto. \nVerificare che tutti i campi obbligatori siano stati compilati')
    } else {
      form.submit({
        url: Ext.manifest.server + entityName + '/submit',
        method: 'POST',
        success: function (form, result, data) {
          store.load({
            callback: function () {
              me._showGrid();
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
              const message = 'Status: <b>' + rt['status'] + '</b><br/>Message: <b>' + rt['message'] + '</b><br/>Debug: <b>' + rt['debugMessage'] + '</b';
              Ext.Msg.alert('Failure', 'Ajax communication failed:<br/> ' + message);
              break;
            case Ext.form.action.Action.SERVER_INVALID:
              Ext.Msg.alert('Failure', action.result.msg);
          }
        }
      });
    }
  },

  _removeAttachment(controller) {
    const me = this;
    const entityPanel = me.getView().up();
    const vm = entityPanel.getViewModel();
    const id = vm.get('record.id');
    controller.removeLogo(id);
    me.__reloadStore()
    me._showGrid();
    console.log('Logo removed');
  },

  _formDirtyChange(basic, dirty) {
    if (dirty)
      this.__enableSaveButton();
    else
      this.__disableSaveButton();
  },

  _removeImage() {
    console.log('remove image')
  },

  _showGrid() {
    const me = this;
    const viewModel = me.getView().up().getViewModel();
    viewModel.set('formHidden', true);
    viewModel.set('gridHidden', false);
  },

  //region Private Methods

  __saveAttachment(endpoint, id, file) {
    const me = this;
    const url = Ext.manifest.server + endpoint + new URLSearchParams({
      id: id
    });
    const gridToRefresh = me.getView().up().down('grid');
    me.__saveFile(url, file, gridToRefresh);
  },

  __saveFile(url, file, gridToRefresh) {
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

  __reloadStore() {
    const me = this;
    const gridToRefresh = me.getView().up().down('grid');
    gridToRefresh.getStore().reload();
    gridToRefresh.getSelectionModel().deselectAll();
  },

   __getFile() {
    const formPanel = this.getView().down('#logoForm');
    const fileField = formPanel.down('filefield');
    return fileField.fileInputEl.dom.files[0];
  },

  __enableSaveButton() {
    this.getView().up().getViewModel().set('saveButtonDisabled', false);
  },

  __disableSaveButton() {
    this.getView().up().getViewModel().set('saveButtonDisabled', true);
  },

  //endregion

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                OL Private Mehods
////////////////////////////////////////////////////////////////////////////////////////////////////

// monitoraggio destroy
  afterDestroy() {
    console.log('destroy')
  },

})
