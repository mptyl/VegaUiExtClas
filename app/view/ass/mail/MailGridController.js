Ext.define('VegaUi.view.ass.mail.MailGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-mail-mailgrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd(){
    this._add('VegaUi.model.Mail');
  },

  onReload() {
    this.getView().getStore().reload();
  },

  onRemove(){
    this._removeSelection();
  },

  onRowDblClick(tableview, record, element, rowIndex, e, eOpts){
    this._rowDblClick(tableview, record, element, rowIndex, e, eOpts)
  },

  onSelectionChange(){
    this._selectionChange()
  },

});
