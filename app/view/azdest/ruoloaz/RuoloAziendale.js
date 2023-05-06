
Ext.define('VegaUi.view.azdest.ruoloaz.RuoloAziendale',{
    extend: 'Ext.panel.Panel',
  xtype:'azd-ruoloaziendale-panel',

    requires: [
        'VegaUi.view.azdest.ruoloaz.RuoloAziendaleController',
        'VegaUi.view.azdest.ruoloaz.RuoloAziendaleModel'
    ],

    controller: 'azdest-ruoloaz-ruoloaziendale',
    viewModel: {
        type: 'azdest-ruoloaz-ruoloaziendale'
    },

    html: 'Ruolo aziendale'
});
