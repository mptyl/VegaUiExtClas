Ext.define('VegaUi.model.questEditor.QeCheckBox', {
  extend: 'VegaUi.model.questEditor.QuestEditorNode',

  fields: [
    {name: 'boxLabel', type: 'string'},
    {name: 'boxValue', type: 'string'},
    {name: 'boxChecked', type: 'boolean'},
    {name: 'indexInStore', type:'integer'}
  ]
});
