Ext.define('VegaUi.model.questEditor.QeJumpExpression', {
  extend: 'VegaUi.model.questEditor.QuestEditorNode',

  fields: [
    {name: 'expression', type: 'string'},
    {name: 'jumpTo', type: 'string'},
  ],
  proxy: {
    type: 'ajax',
    url: 'http://localhost:8083/qejumpexpression/load'
  }
})
