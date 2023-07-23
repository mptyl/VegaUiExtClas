Ext.define('VegaUi.view.ass.questionari.QuestionariModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-questionari-questionari',
  data: {
    name: 'VegaUi - Questionari',
    hiddenid: true,
    removeButtonDisabled: true,
    gridHidden:false,
    formHidden:true,
    questEditorHidden:true
  },
  stores: {
    queststore: {
      type: 'questionnaires'
    }
  }


});
