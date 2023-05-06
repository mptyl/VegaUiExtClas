
Ext.define('VegaUi.view.ass.interviste.Interviste',{
    extend: 'Ext.panel.Panel',
    xtype:'ass-interviste-panel',

    requires: [
        'VegaUi.view.ass.interviste.IntervisteController',
        'VegaUi.view.ass.interviste.IntervisteModel'
    ],

    controller: 'ass-interviste-interviste',
    viewModel: {
        type: 'ass-interviste-interviste'
    },

    html: 'Interviste'
});
