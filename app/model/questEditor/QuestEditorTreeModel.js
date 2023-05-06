Ext.define('VegaUi.model.questEditor.QuestEditorTreeModel', {
  extend: 'Ext.data.TreeModel',

  requires: [
    'Ext.data.field.String',
  ],

  idProperty: 'id',

  fields: [
    {
      type:'string',
      name:'id'
    },
    {
      type:'string',
      name:'nodeId'
    }
  ]
})
