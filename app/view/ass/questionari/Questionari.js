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
      flex: 14,
      hidden: true
    },
    {
      xtype: 'quest-grid',
      flex: 4,
    },
    {
      xtype: 'quest-editor',
      flex: 14,
      hidden: true
    },
  ]
});
