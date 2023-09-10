Ext.define('VegaUi.view.ass.questionari.GridQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-gridquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._add('VegaUi.model.Questionnaire')
  },

  onDuplicate() {
    this._duplicateSelection();
  },

  onReload() {
    this.getView().getStore().reload();
  },

  onRemove() {
    this._removeSelection();
  },

  onRowDblClick: function (tableview, record,element, rowIndex, e, eOpts) {
    this._rowDblClick(tableview,record,element, rowIndex, e, eOpts)
  },

  onSelectionChange() {
    this._selectionChange()
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////      QuestEditor         /////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  __showTree(questModel) {
    questModel.set('formHidden',true);
    questModel.set('questEditorHidden',false);
    questModel.set('gridHidden',true);
  }
  //endregion
});
