Ext.define('VegaUi.view.azdest.ruoloaz.RuoloAziendaleGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-ruoloaz-ruoloaziendalegrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._addInGrid('VegaUi.model.CompanyRole');
  },

  onSelectionChange() {
    this._selectionChange()
  },

  onReload: function () {
    this.getView().getStore().reload();
  },

  onRemoveClick() {
    this._removeSelection('Ruolo Aziendale');
  },

  onEdit(editor, context){
    this._editInGrid(editor, context);
  },

  onCancelEdit(rowEditing, context) {
    this._cancelEditInGrid(rowEditing, context);
  },

});
