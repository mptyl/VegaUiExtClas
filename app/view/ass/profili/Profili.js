Ext.define('VegaUi.view.ass.profili.Profili', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-profili-panel',

  requires: [
    'VegaUi.view.ass.profili.ProfiliController',
    'VegaUi.view.ass.profili.ProfiliModel'
  ],

  controller: 'ass-profili-profili',
  viewModel: {
    type: 'ass-profili-profili'
  },
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  items:[
    {
      xtype:'questprofile-form',
      flex:1,
      bind:{
        hidden:'{formHidden}'
      }
    },
    {
      xtype:'questprofile-grid',
      flex:1,
      bind:{
        hidden:'{gridHidden}'
      }
    }
  ]
});
