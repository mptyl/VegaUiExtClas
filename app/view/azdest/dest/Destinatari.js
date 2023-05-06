
Ext.define('VegaUi.view.azdest.dest.Destinatari',{
    extend: 'Ext.panel.Panel',
  xtype:'azd-destinatari-panel',

    requires: [
        'VegaUi.view.azdest.dest.DestinatariController',
        'VegaUi.view.azdest.dest.DestinatariModel'
    ],

    controller: 'azdest-dest-destinatari',
    viewModel: {
        type: 'azdest-dest-destinatari'
    },

    html: 'Destinatari'
});
