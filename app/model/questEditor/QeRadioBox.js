Ext.define('VegaUi.model.questEditor.QeRadioBox', {
  extend: 'VegaUi.model.questEditor.QuestEditorNode',

  fields: [
    {name: 'boxLabel', type: 'string'},
    {name: 'boxValue', type: 'string'},
    {name: 'boxChecked', type: 'boolean'}
  ]
});
