Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionariModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-groupquest-gruppoquestionari',
  data: {
    name: 'VegaUi'
  },
  data: {
    name: 'VegaUi - Gruppo Questionari',
    hiddenid:false,
    removeButtonDisabled: true,
    gridHidden:false,
    formHidden:true,
  },
  stores: {
    quesgrouptstore: {
      type: 'questionnairegroups'
    }
  }

});
