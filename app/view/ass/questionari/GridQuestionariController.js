Ext.define('VegaUi.view.ass.questionari.GridQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-gridquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    const record = Ext.create('VegaUi.model.Questionnaire');
    const entityPanel=this.getView().up();
    const form=entityPanel.down('quest-form')
    this._loadFormWithNewRecord(form,record);
    this.__setModelForAdd(entityPanel);
  },

  onReload() {
    this._reloadGrid()
  },

  onRemove() {
    this._removeSelection('Questionari');
  },

  onRowDblClick: function (tableview, record) {
    this._onRowDblClick(tableview, record)
    this.__setModelForModify();
  },

  onSelectionChange() {
    if (this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  },

  //TODO - implementare Duplicate
  onDuplicate() {
  },

  onOpenQuestEditor() {
    const me = this;
    const record = me.getView().getSelectionModel().getSelection()[0];
    const recordSelected = me.__verifyIfRecordSelected(record);
    if (recordSelected) {
      me.__loadTree(record);
      me.__showQuestEditor(record);
    }
  },

  //region Private Methods
  __verifyIfRecordSelected(record) {
    if (record == null) {
      Ext.Msg.alert(
        'Nessuna selezione',
        'Selezionare prima il questionario per cui definire il QuestEditor')
      return false;
    } else return true;
  },

  __loadTree(record) {
    const questId = record.get('id');
    const view = this.getView();
    const upview= view.up();
    const treeGrid = this.getView().up().down('treepanel')
    const treeStore = treeGrid.getStore();
    treeStore.getProxy().setExtraParams({questId: questId});
    treeStore.load({
      scope: this,
      callback: function (records, operation, success) {
        treeGrid.expandNode(operation.node);
      }
    });
  },

  __showQuestEditor(record){
    const me=this

    const questContainer= me.getView().up();

    // Set questId e questionnaireTitle in mainview
    const mainView=this.getView().up('mainview')
    const mainViewModel=mainView.getViewModel();
    mainViewModel.set('questId',record.get('id'));
    mainViewModel.set('questionnaireTitle',record.get('title'));

    // Set questId in tree
    const treeContainer = questContainer.down('quest-editor');
    const treeModel= treeContainer.getViewModel();
    treeModel.set('questId', record.get('id'));

    // Show tree
    const questModel=questContainer.getViewModel();
    me.__showTree(questModel);
  },

  __setModelForModify(){
    const entityPanel=this.getView().up();
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('formHidden', false);
    viewModel.set('questEditorHidden',true)
  },

  __showTree(questModel) {
    questModel.set('formHidden',true);
    questModel.set('questEditorHidden',false);
    questModel.set('gridHidden',true);
  },

  __setModelForAdd(entityPanel){
    const viewModel = entityPanel.getViewModel();
    viewModel.set('gridHidden', true);
    viewModel.set('formHidden', false);
    viewModel.set('hiddenid',true)
  },

  //endregion
});
