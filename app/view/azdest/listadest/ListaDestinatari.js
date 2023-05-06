
Ext.define('VegaUi.view.azdest.listadest.ListaDestinatari',{
    extend: 'Ext.panel.Panel',
  xtype:'azd-listadestinatari-panel',

    requires: [
        'VegaUi.view.azdest.listadest.ListaDestinatariController',
        'VegaUi.view.azdest.listadest.ListaDestinatariModel'
    ],

    controller: 'azdest-listadest-listadestinatari',
    viewModel: {
        type: 'azdest-listadest-listadestinatari'
    },

    html: 'Lista destinatari'
});
