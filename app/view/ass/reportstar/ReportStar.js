Ext.define('VegaUi.view.ass.reportstar.ReportStar', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-reportstar-panel',

  requires: [
    'VegaUi.view.ass.reportstar.ReportStarController',
    'VegaUi.view.ass.reportstar.ReportStarModel'
  ],

  controller: 'ass-reportstar-reportstar',
  viewModel: {
    type: 'ass-reportstar-reportstar'
  },

  html: 'Report Star'
});
