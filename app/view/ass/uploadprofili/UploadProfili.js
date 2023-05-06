Ext.define('VegaUi.view.ass.uploadprofili.UploadProfili', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-uploadprofili-panel',

  requires: [
    'VegaUi.view.ass.uploadprofili.UploadProfiliController',
    'VegaUi.view.ass.uploadprofili.UploadProfiliModel'
  ],

  controller: 'ass-uploadprofili-uploadprofili',
  viewModel: {
    type: 'ass-uploadprofili-uploadprofili'
  },

  html: 'Upload Profili'
});
