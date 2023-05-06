Ext.define('VegaUi.model.questEditor.QuestEditorNode', {
  extend: 'Ext.data.Model',

  requires: ['Ext.data.identifier.Uuid'],
  idProperty: 'id',
  identifier: 'uuid',

  fields: [
    {name: 'id', type: 'string'},
    {name: 'text', type: 'string'},
    {name: 'nodeCode', type: 'string'},
    {name: 'elementPrefix', type: 'string'},
    {name: 'fatherNodeId', type: 'string'},
    {name: 'siblingPosition', type: 'string'},

    {name: 'questId', type: 'integer'},
  ]
});
