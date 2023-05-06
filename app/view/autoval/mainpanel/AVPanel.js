Ext.define('VegaUi.view.autoval.mainpanel.AVPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.av-mainpanel-panel',

  requires: [
    'VegaUi.view.autoval.mainpanel.AVPanelController',
    'VegaUi.view.autoval.mainpanel.AVPanelModel'
  ],

  controller: 'autoval-mainpanel-avpanel',
  viewModel: {
    type: 'av-mainpanel-panel'
  },

  layout: 'hbox',
  items: [
    {
      xtype: 'av-mainpanel-menu',
      width: 170

    },
    {
      xtype: 'panel',
      layout: 'card',
      itemId: 'avContentPanel',
      flex: 1,
      items: [
        {
          xtype: 'av-risorse-panel',
          itemId: 'avRisorsePanel',
        },
        {
          xtype: 'av-analisi-panel',
          itemId: 'avAnalisiPanel',
        }
      ]
    }
  ]
});
