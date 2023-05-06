Ext.define('VegaUi.view.ass.questeditor.FormQuestEditor', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.form-quest-editor',

  requires: [
    'VegaUi.view.ass.questeditor.FormQuestEditorController',
  ],

  controller: 'ass-questionari-formquesteditor',

  layout: 'card',
  items: [
    {
      xtype: 'qe-group-form'
    },
    {
      xtype: 'qe-question-form'
    },
    {
      xtype: 'qe-jumpexpression-form'
    },
    {
      xtype:'qe-fullreply-form'
    }
  ]
});
