Ext.define('VegaUi.view.ass.questionari.GridQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-gridquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    const record = Ext.create('VegaUi.model.Questionnaire');
    this.loadFormWithNewRecordTyl(record)
  },

  onReload() {
    this.reloadGridTyl()
  },

  onRemove() {
    this.removeTyl();
  },

  onModify(grid) {
    const record = grid.getSelectable().getSelectedRecords()[0];
    const formContainer = this.getView().up().down();
    const form = formContainer.down('form');
    form.setValues(record.data);
    formContainer.getViewModel().set('image', record.get('image'))
    formContainer.show();
  },

  onDuplicate() {
  },

  onOpenQuestEditor() {
    const me = this;
    const grid = me.getGrid();
    const record = grid.getSelectionModel().getSelection()[0];
    const recordSelected = me.verifyIfRecordSelected(record);
    if (recordSelected) {
      me.loadTree(record);
      me.showQuestEditor(record.get('id'));
    }
  },

  //region Private Methods
  getGrid() {
    return this.getView().down('grid')
  },

  getSelectableRecord(grid) {
    return grid.getSelectionModel().getSelected();
  },

  verifyIfRecordSelected(record) {
    if (record == null) {
      Ext.Msg.alert(
        'Nessuna selezione',
        'Selezionare prima il questionario per cui definire il QuestEditor')
      return false;
    } else return true;
  },

  loadTree(record) {
    const questId = record.get('id');
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

  showQuestEditor(questId) {
    const gridContainer = this.getView();
    const treeContainer = this.getView().up().down('quest-editor');
    treeContainer.getViewModel().set('questId', questId);
    const mainView=this.getView().up('mainview')
    const mainViewModel=mainView.getViewModel();
    mainViewModel.set('questId',questId);
    gridContainer.hide();
    treeContainer.show();
  }
  //endregion
});
