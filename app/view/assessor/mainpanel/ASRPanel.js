Ext.define('VegaUi.view.assessor.mainpanel.ASRPanel', {
  extend: 'Ext.panel.Panel',
  xtype:'asr-mainpanel-panel',

  requires: [
    'VegaUi.view.assessor.mainpanel.ASRPanelController',
    'VegaUi.view.assessor.mainpanel.ASRPanelModel'
  ],

  controller: 'assessor-mainpanel-asrpanel',
  viewModel: {
    type: 'assessor-mainpanel-asrpanel'
  },
  layout: 'hbox',
  items: [
    {
      xtype: 'asr-mainpanel-menu',
      width: '170px'
    },
    {
      xtype: 'panel',
      layout: 'card',
      itemId: 'asrContentPanel',
      activeItem: 0,
      flex: 1,
      items: [
        {
          xtype: 'asr-excelbase-panel',
          itemId: 'asrExcelPanel',
        },
        {
          xtype: 'asr-propriaval-panel',
          itemId: 'asrPropriavalPanel',
        }
      ]
    }
  ]
});
