
Ext.define('VegaUi.view.azdest.ruoloxaz.RuoloxAzienda',{
    extend: 'Ext.panel.Panel',
  xtype:'azd-ruoloxazienda-panel',

    requires: [
        'VegaUi.view.azdest.ruoloxaz.RuoloxAziendaController',
        'VegaUi.view.azdest.ruoloxaz.RuoloxAziendaModel'
    ],

    controller: 'azdest-ruoloxaz-ruoloxazienda',
    viewModel: {
        type: 'azdest-ruoloxaz-ruoloxazienda'
    },

    html: 'Ruolo x azienda'
});
