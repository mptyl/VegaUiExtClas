Ext.define('VegaUi.view.ass.assquedest.AssQueDest', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-assquedest-panel',

  requires: [
    'VegaUi.view.ass.assquedest.AssQueDestController',
    'VegaUi.view.ass.assquedest.AssQueDestModel'
  ],

  controller: 'ass-assquedest-assquedest',
  viewModel: {
    type: 'ass-assquedest-assquedest'
  },

  html: 'AssQueDest'
});
