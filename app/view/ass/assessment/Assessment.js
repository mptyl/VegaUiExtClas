Ext.define('VegaUi.view.ass.assessment.Assessment', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-assessment-panel',

  requires: [
    'VegaUi.view.ass.assessment.AssessmentController',
    'VegaUi.view.ass.assessment.AssessmentModel'
  ],

  controller: 'ass-assessment-assessment',
  viewModel: {
    type: 'ass-assessment-assessment'
  },

  items:[
    {
      xtype:'assessment-form',
      flex:1,
      bind:{
        hidden:'{formHidden}'
      }
    },
    {
      xtype:'assessment-grid',
      flex:1,
      bind:{
        hidden:'{gridHidden}'
      }
    }
  ]
});
