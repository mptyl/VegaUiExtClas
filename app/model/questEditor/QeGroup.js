Ext.define('VegaUi.model.questEditor.QeGroup', {
    extend: 'VegaUi.model.questEditor.QuestEditorNode',

    requires: [ 'Ext.data.identifier.Uuid',
                'VegaUi.model.questEditor.QuestEditorNode'],
    fields: [
        { name: 'random', type: 'boolean', defaultValue: false },
    ],
  proxy: {
    type: 'ajax',
    url: 'http://localhost:8083/qegroup/load'
  }
});
