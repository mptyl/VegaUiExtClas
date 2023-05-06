Ext.define('VegaUi.view.azdest.assresp.AssegnaResponsabile', {
  extend: 'Ext.panel.Panel',
  xtype: 'azd-riassegnaresponsabile-panel',

  requires: [
    'VegaUi.view.azdest.assresp.AssegnaResponsabileController',
    'VegaUi.view.azdest.assresp.AssegnaResponsabileModel'
  ],

  controller: 'azdest-assresp-assegnaresponsabile',
  viewModel: {
    type: 'azdest-assresp-assegnaresponsabile'
  },

  html: 'Assegna responsabile'
});
