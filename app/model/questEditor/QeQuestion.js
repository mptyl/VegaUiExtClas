Ext.define('VegaUi.model.questEditor.QeQuestion', {
  extend: 'VegaUi.model.questEditor.QuestEditorNode',

  fields: [
    {name: 'title', type: 'string'},
    {name: 'questionText', type: 'string'},
    {name: 'note', type: 'string'},
    {name: 'minReplyNumber', type: 'integer', defaultValue: 0},
    {name: 'maxReplyNumber', type: 'integer', defaultValue: 0},
    {name: 'randomRepliesOrder', type: 'boolean', defaultValue: false},
    {name: 'valueOfAnswersSum', type: 'integer', defaultValue: 0},
    {name: 'attachmentsRequired', type: 'integer', defaultValue: 0},

    {name: 'image64', type: 'string'},
    {name: 'imageAlt', type: 'string'},

  ],
  hasMany: {
    model: 'QeFullReply',
    name: 'qeReplies'
  },
  hasMany: {
    model: 'QeJumpExpression',
    name: 'qeJumpExpressions'
  },
  proxy: {
    type: 'ajax',
    url: 'http://localhost:8083/qequestion/load'
  }
});
