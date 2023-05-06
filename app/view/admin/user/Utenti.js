
Ext.define('VegaUi.view.admin.user.Utenti',{
    extend: 'Ext.panel.Panel',
  xtype:'adm-utenti-panel',

    requires: [
        'VegaUi.view.admin.user.UtentiController',
        'VegaUi.view.admin.user.UtentiModel'
    ],

    controller: 'admin-user-utenti',
    viewModel: {
        type: 'admin-user-utenti'
    },

    html: 'Utenti'
});
