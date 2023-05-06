Ext.define('VegaUi.view.ass.questionari.QuestionariModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-questionari-questionari',
  data: {
    name: 'VegaUi - Questionari',
    image: null,
    hiddenid: true,
    disabledGridButtons: false
  },
  stores: {
    queststore: {
      type: 'questionnaires'
    }
  }


});
