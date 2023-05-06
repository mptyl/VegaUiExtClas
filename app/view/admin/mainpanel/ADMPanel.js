Ext.define('VegaUi.view.admin.mainpanel.ADMPanel', {
  extend: 'Ext.panel.Panel',
  xtype: 'adm-mainpanel-panel',

  requires: [
    'VegaUi.view.admin.mainpanel.ADMPanelController',
    'VegaUi.view.admin.mainpanel.ADMPanelModel'
  ],

  controller: 'admin-mainpanel-admpanel',
  viewModel: {
    type: 'admin-mainpanel-admpanel'
  },

  layout: 'hbox',
  items: [
    {
      xtype: 'adm-mainpanel-menu',
      width: '170px'
    },
    {
      xtype: 'panel',
      layout: 'card',
      itemId: 'admContentPanel',
      activeItem: 0,
      flex: 1,
      items: [
        {
          xtype: 'adm-utenti-panel',
          itemId: 'admUtentiPanel',
        },
        {
          xtype: 'adm-ruoli-panel',
          itemId: 'admRuoliPanel',
        },
        {
          xtype: 'adm-upload-panel',
          itemId: 'admUploadPanel',
        }
      ]
    }
  ]
});
