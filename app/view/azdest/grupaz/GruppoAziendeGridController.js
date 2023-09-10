Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-grupaz-gruppoaziendegrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._addWithAttachment('VegaUi.model.CompanyGroup');
  },

  onSelectionChange() {
    this._selectionChange()
  },

  onRowDblClick: function (tableview, record, element, rowIndex, e, eOpts){
    this._rowDblClick(tableview, record, element, rowIndex, e, eOpts)
  },

  onRemoveClick() {
    this._removeSelection('Gruppo Aziende');
  },

  onReload() {
    this.getView().getStore().reload();
  },

});
