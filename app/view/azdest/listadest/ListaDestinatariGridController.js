Ext.define('VegaUi.view.azdest.listadest.ListaDestinatariGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.azdest-listadest-listadestinatarigrid',


  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._addInGrid('VegaUi.model.RecipientList');
  },

  onSelectionChange() {
    this._selectionChange()
  },

  onReload: function () {
    this.getView().getStore().reload();
  },

  onRemoveClick() {
    this._removeSelection('Lista Destinatari');
  },

  onEdit(editor, context){
    this._editInGrid(editor, context);
  },

  onCancelEdit(rowEditing, context) {
    this._cancelEditInGrid(rowEditing, context);
  },

});
