Ext.define('VegaUi.view.assessor.mainpanel.ASRMenu', {
  extend: 'Ext.panel.Panel',
  xtype: 'asr-mainpanel-menu',

  requires: [
    'VegaUi.view.assessor.mainpanel.ASRMenuController',
    'VegaUi.view.assessor.mainpanel.ASRMenuModel'
  ],

  controller: 'assessor-mainpanel-asrmenu',
  viewModel: {
    type: 'assessor-mainpanel-asrmenu'
  },
  defaults: {
    xtype: 'button',
    padding: '3 0',
    width: '100%',
    handler: 'onButtonTap'
  },
  title: 'Menu',
  items: [
    {
      text: 'Excel base',
      itemId: 'asrExcel'
    },
    {
      text: 'Propria valutazione',
      itemId: 'asrPropriaval'
    },
  ]
});
