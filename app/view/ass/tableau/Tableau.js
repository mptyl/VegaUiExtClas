Ext.define('VegaUi.view.ass.tableau.Tableau', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-tableau-panel',

  requires: [
    'VegaUi.view.ass.tableau.TableauController',
    'VegaUi.view.ass.tableau.TableauModel'
  ],

  controller: 'ass-tableau-tableau',
  viewModel: {
    type: 'ass-tableau-tableau'
  },

  html: 'Tableau'
});
