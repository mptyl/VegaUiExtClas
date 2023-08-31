Ext.define('VegaUi.view.ass.mail.MailGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-mail-mailgrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onRowDblClick(tableview, record, element, rowIndex, e, eOpts){
    this._onNewRowDblClick(tableview, record, element, rowIndex, e, eOpts)
    this._showForm(tableview);
  },

  onSelectionChange(){
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  onAdd(){
    const record = Ext.create('VegaUi.model.Mail')
    const entityPanel = this.getView().up();
    const form = entityPanel.down('ass-mailForm');
    this._loadFormWithNewRecord(form, record);
    this.__setModel(entityPanel);

  },

  onReload(){
    this._reloadGrid()
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
