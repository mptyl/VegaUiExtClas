
Ext.define('VegaUi.view.admin.mainpanel.ADMMenu',{
    extend: 'Ext.panel.Panel',
  xtype:'adm-mainpanel-menu',

    requires: [
        'VegaUi.view.admin.mainpanel.ADMMenuController',
        'VegaUi.view.admin.mainpanel.ADMMenuModel'
    ],

    controller: 'admin-mainpanel-admmenu',
    viewModel: {
        type: 'admin-mainpanel-admmenu'
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
      text: 'Utenti',
      itemId: 'admUtenti'
    },
    {
      text: 'Ruoli',
      itemId: 'admRuoli'
    },
    {
      text: 'Upload Users',
      itemId: 'admUpload'
    },
  ]
});
