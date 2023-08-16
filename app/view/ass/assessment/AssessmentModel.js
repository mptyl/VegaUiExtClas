Ext.define('VegaUi.view.ass.assessment.AssessmentModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-assessment-assessment',
  data: {
    name: 'VegaUi - Assessments',
    formHidden: true,
    gridHidden: false,
    hiddenid:false,
    disabledGridButtons:false,
  },
  stores: {
    assessmentstore: {
      type: 'assessments'
    }
  }

});
