
Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionari',{
    extend: 'Ext.panel.Panel',
    xtype:'ass-groupquest-panel',

    requires: [
        'VegaUi.view.ass.groupquest.GruppoQuestionariController',
        'VegaUi.view.ass.groupquest.GruppoQuestionariModel'
    ],

    controller: 'ass-groupquest-gruppoquestionari',
    viewModel: {
        type: 'ass-groupquest-gruppoquestionari'
    },
    itemId:"entityPanel",
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
    items:[

      {
        xtype:'questgroup-form',
        flex:14,
        hidden:true
      },
      {
        xtype:'questgroup-grid',
        flex:4
      },
    ]
});
