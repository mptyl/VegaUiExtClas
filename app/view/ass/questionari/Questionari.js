Ext.define('VegaUi.view.ass.questionari.Questionari', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-questionari-panel',

  requires: [
    'VegaUi.view.ass.questionari.QuestionariController',
    'VegaUi.view.ass.questionari.QuestionariModel'
  ],

  controller: 'ass-questionari-questionari',
  viewModel: {
    type: 'ass-questionari-questionari'
  },
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'quest-form',
      flex: 1,
      bind:{
        hidden:'{formHidden}'
      },
    },
    {
      xtype: 'quest-grid',
      flex: 1,
      bind:{
        hidden:'{gridHidden}'
      },
    },
    {
      xtype: 'quest-editor',
      flex: 1,
      bind:{
        hidden:'{questEditorHidden}'
      },
    },
  ]
});
