Ext.define('VegaUi.view.azdest.updest.UploadDestinatari', {
  extend: 'Ext.panel.Panel',
  xtype: 'azd-uploaddestinatari-panel',

  requires: [
    'VegaUi.view.azdest.updest.UploadDestinatariController',
    'VegaUi.view.azdest.updest.UploadDestinatariModel'
  ],

  controller: 'azdest-updest-uploaddestinatari',
  viewModel: {
    type: 'azdest-updest-uploaddestinatari'
  },

  html: 'Upload Destinatari'
});
