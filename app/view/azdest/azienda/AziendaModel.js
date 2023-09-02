Ext.define('VegaUi.view.azdest.azienda.AziendaModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.azdest-azienda-azienda',
  data: {
    name: 'VegaUi - Aziende',
    record: null,

    saveButtonDisabled: true,
    removeButtonDisabled: true,
    formHidden: true,
    gridHidden: false,
    hiddenId: true
  },
  stores: {
    aziende: {
      type: 'companies'
    }
  }

});
