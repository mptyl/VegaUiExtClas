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
  layout: {
    type: 'vbox',
    align: 'stretch'
  },

  items: [
    {
      xtype: 'azd-gruppoaziende-form',
    },
    {
      xtype: 'azd-gruppoaziende-grid',
    }
  ]
});
