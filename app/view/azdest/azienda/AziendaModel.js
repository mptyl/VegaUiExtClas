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
    },
  }

  //   formulas:{
  //     currentAzienda:{
  //       // we need to bind deep to be notified on each model change
  //       bind:{
  //         bindTo:'{aziendaGrid.selection}',
  //         deep:true
  //       },
  //
  //       get:function(azienda) {
  //         return azienda;
  //       }, // eo function get
  //
  //       // set is needed for two-way-binding
  //       set:function(azienda) {
  //         if(!azienda.isModel) {
  //           azienda = this.get('aziende').getById(azienda);
  //         }
  //         this.set('currentAzienda', azienda);
  //       } // eo function set
  //     }, // eo currentCustomer
  //
  //     status:{
  //       // we need to bind deep to be notified on each model change
  //       bind:{
  //         bindTo:'{currentAzienda}',
  //         deep:true
  //       },
  //
  //       get:function(azienda) {
  //         var ret = {
  //           dirty:azienda ? azienda.dirty : false,
  //           valid:azienda && azienda.isModel ? azienda.isValid() : false
  //         };
  //         ret.dirtyAndValid = ret.dirty && ret.valid;
  //         return ret;
  //       } // eo function get
  //     } // eo status
  // } // eo formulas


});
