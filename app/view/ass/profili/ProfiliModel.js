Ext.define('VegaUi.view.ass.profili.ProfiliModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-profili-profili',
  data: {
    name: 'VegaUi'
  },

  data: {
    name: 'VegaUi - Profilo Questionari',
    hiddenid:false,
    disabledGridButtons:false
  },
  stores: {
    quesprofiletstore: {
      type: 'questionnaireprofiles'
    }
  }
});
