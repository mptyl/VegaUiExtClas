Ext.define('VegaUi.view.ass.questionari.QuestionariModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-questionari-questionari',
  data: {
    name: 'VegaUi - Questionari',
    hiddenId: true,
    removeButtonDisabled: true,
    gridHidden:false,
    formHidden:true,
    questEditorHidden:true,
    saveButtonDisabled: true,
    imageLoaderHidden:true
  },
  stores: {
    queststore: {
      type: 'questionnaires'
    }
  }
});
