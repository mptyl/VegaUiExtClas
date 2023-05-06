Ext.define('VegaUi.view.autoval.mainpanel.AVMenu', {
  extend: 'Ext.panel.Panel',
  xtype: 'av-mainpanel-menu',

  requires: [
    'VegaUi.view.autoval.mainpanel.AVMenuController',
    'VegaUi.view.autoval.mainpanel.AVMenuModel'
  ],

  controller: 'autoval-mainpanel-avmenu',
  viewModel: {
    type: 'autoval-mainpanel-avmenu'
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
      text: 'Risorse coordinate',
      itemId: 'avRisorse'
    },
    {
      text: 'Analisi autovalutazioni',
      itemId: 'avAnalisi'
    },
  ]
});
