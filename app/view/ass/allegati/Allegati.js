
Ext.define('VegaUi.view.ass.allegati.Allegati',{
    extend: 'Ext.panel.Panel',
    xtype:'ass-allegati-panel',

    requires: [
        'VegaUi.view.ass.allegati.AllegatiController',
        'VegaUi.view.ass.allegati.AllegatiModel'
    ],

    controller: 'ass-allegati-allegati',
    viewModel: {
        type: 'ass-allegati-allegati'
    },

    html: 'Allegati'
});
