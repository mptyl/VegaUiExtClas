Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.azdest-grupaz-gruppoaziende',
  data: {
    name: 'VegaUi - Gruppo Aziende',
    removeButtonDisabled: true,
    record:null,
    formHidden:true,
    gridHidden:false
  },
  stores: {
    gruppoAziende: {
      type: 'companygroups'
    }
  }

});
