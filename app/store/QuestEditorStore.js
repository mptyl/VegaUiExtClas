Ext.define('VegaUi.store.QuestEditorStore', {
  extend: 'Ext.data.TreeStore',
  alias:'store.questeditorstore',

  requires: [
    'VegaUi.model.questEditor.QuestEditorTreeModel',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],
  storeId: 'QuestEditorStore',
  model: 'VegaUi.model.questEditor.QuestEditorTreeModel',
  nodeParam: 'id',
  proxy: {
    type: 'direct',
    directFn: questEditorTreeController.getTree,
    extraParams: {
      questId: 0,
      id:'root'
    }
  }
});
