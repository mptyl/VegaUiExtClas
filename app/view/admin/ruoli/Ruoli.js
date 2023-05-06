
Ext.define('VegaUi.view.admin.ruoli.Ruoli',{
    extend: 'Ext.panel.Panel',
  xtype:'adm-ruoli-panel',

    requires: [
        'VegaUi.view.admin.ruoli.RuoliController',
        'VegaUi.view.admin.ruoli.RuoliModel'
    ],

    controller: 'admin-ruoli-ruoli',
    viewModel: {
        type: 'admin-ruoli-ruoli'
    },

    html: 'Ruoli'
});
