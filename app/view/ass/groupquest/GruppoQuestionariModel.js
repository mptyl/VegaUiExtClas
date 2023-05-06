Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionariModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-groupquest-gruppoquestionari',
  data: {
    name: 'VegaUi'
  },
  data: {
    name: 'VegaUi - Gruppo Questionari',
    hiddenid:false,
    disabledGridButtons:false
  },
  stores: {
    quesgrouptstore: {
      type: 'questionnairegroups'
    }
  }

});
