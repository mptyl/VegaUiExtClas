
Ext.define('VegaUi.view.azdest.azienda.Azienda',{
    extend: 'Ext.panel.Panel',
  xtype:'azd-azienda-panel',

    requires: [
        'VegaUi.view.azdest.azienda.AziendaController',
        'VegaUi.view.azdest.azienda.AziendaModel'
    ],

    controller: 'azdest-azienda-azienda',
    viewModel: {
        type: 'azdest-azienda-azienda'
    },

    html: 'Azienda'
});
