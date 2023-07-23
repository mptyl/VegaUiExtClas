Ext.define('VegaUi.view.ass.groupquest.GridGruppoQuestionariController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-groupquest-gridgruppoquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],


  onAdd(){
    let record=Ext.create('VegaUi.model.QuestionnaireGroup');
    const entityPanel=this.getView().up();
    const form=entityPanel.down('questgroup-form')
    this._loadFormWithNewRecord(form,record);
    this.__setModelForAdd(entityPanel);
  },

  onReload(){
    this._reloadGrid();
  },

  onRemove() {
    this._removeSelection('Gruppo Questionari');
  },

  onRowDblClick: function (tableview, record, element, rowIndex, e, eOpts){
      this._onRowDblClick(tableview, record, element, rowIndex, e, eOpts)
      this.__setModelForModify();
  },

  onSelectionChange() {
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
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
