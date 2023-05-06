Ext.define('VegaUi.view.ass.questeditor.QuestEditorModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-questionari-questeditor',
  data: {
    name: 'VegaUi ass-questionari-questeditor',
    fatherNodeId:null,
    selectedNodeId:null,
    questId:0,
    groupId:'',
    questionId:'',
    replyRecord:null,
    questionRecord:null,
    jeRecord:null,
    groupRecord:null,
    parentNode:null,
    nodeToExpand:null
  },
  stores: {
    treePanelStore: {
      type: 'questeditorstore'
    }
  }

});
