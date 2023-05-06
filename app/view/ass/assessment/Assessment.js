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

  html: 'Assessment'
});
