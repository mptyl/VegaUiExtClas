Ext.define('VegaUi.view.ass.profili.GridProfiliController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-profili-gridprofili',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._addInGrid('VegaUi.model.QuestionnaireProfile');
  },

  onSelectionChange() {
    this._selectionChange()
  },

  onReload: function () {
    this.getView().getStore().reload();
  },

  onRemove() {
    this._removeSelection('Profilo Questionario');
  },

  onEdit(editor, context){
    this._editInGrid(editor, context);
  },

  onCancelEdit(rowEditing, context) {
    this._cancelEditInGrid(rowEditing, context);
  }

  /*

  onAdd() {
    const record = Ext.create('VegaUi.model.QuestionnaireProfile')
    const entityPanel = this.getView().up();
    const form = entityPanel.down('ass-mailForm')
    this._loadFormWithNewRecord(form, record);
    this.__setModel(entityPanel);
  },

  onReload() {
    this._reloadGrid()
  },

  onRemove() {
    this._removeSelection('Profilo Questionari');
  },

  onRowDblClick: function (tableview, record, element, rowIndex, e, eOpts) {
    this._onRowDblClick(tableview, record, element, rowIndex, e, eOpts)
    this._showForm(tableview);
  },

  onSelectionChange() {
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  __setModel(entityPanel){
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenid',true)
  }


   */

});
