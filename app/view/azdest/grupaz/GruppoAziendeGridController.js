Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-grupaz-gruppoaziendegrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAddClick() {
    let record=Ext.create('VegaUi.model.CompanyGroup');
    const entityPanel=this.getView().up();
    const form=entityPanel.down('azd-gruppoaziende-form')
    this._loadFormWithNewRecord(form,record);
    this.__setModelForAdd(entityPanel);
  },

  onSelectionChange() {
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  onRowDblClick: function (tableview, record, element, rowIndex, e, eOpts){
    this._onRowDblClick(tableview, record, element, rowIndex, e, eOpts)
    this.__setModelForModify();
  },

  onRemoveClick() {
    this._removeSelection('Gruppo Questionari');
  },

  __setModelForAdd(entityPanel){
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenid',true)
  },


  __setModelForModify(){
    const entityPanel=this.getView().up();
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenid',false)
  }


});
