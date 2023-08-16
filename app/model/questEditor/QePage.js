Ext.define('VegaUi.model.questEditor.QePage', {
  extend: 'VegaUi.model.questEditor.QuestEditorNode',

  requires: [ 'Ext.data.identifier.Uuid',
    'VegaUi.model.questEditor.QuestEditorNode'],
  fields: [
    { name: 'random', type: 'boolean', defaultValue: false },
    { name: 'note', type: 'string'}
  ],
  proxy: {
    type: 'ajax',
    url: 'http://localhost:8083/qepage/load'
  }
});
