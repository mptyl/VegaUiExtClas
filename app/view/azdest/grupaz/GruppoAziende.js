Ext.define('VegaUi.view.azdest.grupaz.GruppoAziende', {
  extend: 'Ext.panel.Panel',
  xtype: 'azd-gruppoaziende-panel',

  requires: [
    'VegaUi.view.azdest.grupaz.GruppoAziendeController',
    'VegaUi.view.azdest.grupaz.GruppoAziendeModel'
  ],

  controller: 'azdest-grupaz-gruppoaziende',
  viewModel: {
    type: 'azdest-grupaz-gruppoaziende'
  },

  html: 'Gruppo aziende'
});
