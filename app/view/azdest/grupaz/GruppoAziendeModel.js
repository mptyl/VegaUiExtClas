Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.azdest-grupaz-gruppoaziende',
  data: {
    name: 'VegaUi',
    removeGroupDisabled: true,
    formHidden: true,
    record:null
  },
  stores: {
    gruppoAziende: {
      type: 'companygroups'
    }
  }

});
