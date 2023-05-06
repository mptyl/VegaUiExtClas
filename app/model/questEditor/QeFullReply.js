Ext.define('VegaUi.model.questEditor.QeFullReply', {
  extend: 'VegaUi.model.questEditor.QuestEditorNode',

  fields: [
    {name: 'replyType', type: 'string'},
    // Da QeGenericReply
    {name: 'label', type: 'string'},
    {name: 'replyRequired', type: 'boolean', defaultValue: false},
    {name: 'withComment', type: 'boolean', defaultValue: false},
    // Da CheckGroup e RadioGroup
    {name: 'boxGroupName', type: 'string'},
    {name: 'orientation', type: 'string'},
    // Da CheckBox e RadioBox
    {name: 'boxValue', type: 'string'},
    {name: 'checked', type: 'boolean', defaultValue: false},
    // Da Date
    {name: 'minDate', type: 'date'},
    {name: 'maxDate', type: 'date'},
    // Da TextualReply
    {name: 'minLength', type: 'integer'},
    {name: 'maxLength', type: 'integer'},
    {name: 'placeHolder', type: 'string'},
    {name: 'multiple', type: 'boolean'},
    {name: 'pattern', type: 'string'},
    // Da File
    {name: 'accept', type: 'string'},
    {name: 'multipleFiles', type: 'boolean'},
    // Da Integer
    {name: 'minValue', type: 'integer'},
    {name: 'maxValue', type: 'integer'},
    // Da Numeric
    {name: 'minNumValue', type: 'number'},
    {name: 'maxNumValue', type: 'number'},
    // Da Select
    {name: 'optionList', type: 'string'},
    {name: 'selected', type: 'string'},
    {name: 'size', type: 'integer'},
    {name: 'multipleSelection', type: 'boolean'},
    // Da TextArea
    {name: 'rows', type: 'integer'},
    {name: 'cols', type: 'integer'}
  ],
  proxy: {
    type: 'ajax',
    url: 'http://localhost:8083/qereply/load'
  }
});
