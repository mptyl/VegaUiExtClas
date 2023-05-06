Ext.define('VegaUi.view.ass.reportindividuale.ReportIndividuale', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-reportindividuale-panel',

  requires: [
    'VegaUi.view.ass.reportindividuale.ReportIndividualeController',
    'VegaUi.view.ass.reportindividuale.ReportIndividualeModel'
  ],

  controller: 'ass-reportindividuale-reportindividuale',
  viewModel: {
    type: 'ass-reportindividuale-reportindividuale'
  },

  html: 'Report Individuale'
});
