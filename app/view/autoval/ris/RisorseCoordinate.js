
Ext.define('VegaUi.view.autoval.ris.RisorseCoordinate',{
    extend: 'Ext.panel.Panel',
  xtype:'av-risorse-panel',

    requires: [
        'VegaUi.view.autoval.ris.RisorseCoordinateController',
        'VegaUi.view.autoval.ris.RisorseCoordinateModel'
    ],

    controller: 'autoval-ris-risorsecoordinate',
    viewModel: {
        type: 'autoval-ris-risorsecoordinate'
    },

    html: 'Risorse coordinate'
});
