Ext.define('VegaUi.view.azdest.destlis.DestinatarixLista', {
  extend: 'Ext.panel.Panel',
  xtype: 'azd-destinatarixlista-panel',

  requires: [
    'VegaUi.view.azdest.destlis.DestinatarixListaController',
    'VegaUi.view.azdest.destlis.DestinatarixListaModel'
  ],

  controller: 'azdest-destlis-destinatarixlista',
  viewModel: {
    type: 'azdest-destlis-destinatarixlista'
  },

  html: 'Destinatari x lista'
});
