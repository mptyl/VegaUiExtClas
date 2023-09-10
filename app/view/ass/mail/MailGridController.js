Ext.define('VegaUi.view.ass.mail.MailGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-mail-mailgrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onRowDblClick(tableview, record, element, rowIndex, e, eOpts){
    this._rowDblClick(tableview, record, element, rowIndex, e, eOpts)
  },

  onSelectionChange(){
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  onAdd(){
      this.add('VegaUi.model.Mail');

  },

  onReload(){
    this.getView().getStore().reload();
  },

  onRemove(){
    this._removeSelection('Mail');
  },

  __setModel(entityPanel){
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenId',true)
  }

});
