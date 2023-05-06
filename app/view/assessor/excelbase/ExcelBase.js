Ext.define('VegaUi.view.assessor.excelbase.ExcelBase', {
  extend: 'Ext.panel.Panel',
  xtype: 'asr-excelbase-panel',

  requires: [
    'VegaUi.view.assessor.excelbase.ExcelBaseController',
    'VegaUi.view.assessor.excelbase.ExcelBaseModel'
  ],

  controller: 'assessor-excelbase-excelbase',
  viewModel: {
    type: 'assessor-excelbase-excelbase'
  },

  html: 'Excel Base'
});
