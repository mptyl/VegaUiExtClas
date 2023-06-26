Ext.define('VegaUi.store.CompanyGroups', {
  extend: 'Ext.data.Store',
  alias:'store.companygroups',

  requires: [
    'VegaUi.model.CompanyGroup',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'CompanyGroups',
      autoLoad: false,
      model: 'VegaUi.model.CompanyGroup',
      sorters: [{
        property: 'id',
        direction: 'ASC' // or 'DESC' for descending
      }],
      proxy: {
        type: 'direct',
        api: {
          read: companyGroupDirectController.read,
          create  : companyGroupDirectController.create,
          update  : companyGroupDirectController.update,
          destroy: companyGroupDirectController.destroy
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file Company Group',
          rootProperty: 'records',
          listeners: {
            exception: {
              fn: me.onJsonException,
              scope: me
            }
          }
        },
        listeners: {
          exception: {
            fn: me.onDirectException,
            scope: me
          }
        },
        writer: {
          type: 'json',
          dateFormat: 'Y-m-d',
          writeAllFields: true,
        }
      }
    }, cfg)]);
  },

  onJsonException: function (reader, response, error, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore Json nell\'accesso alla tabella Company Group', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    const me = this;
    // TODO - Agganciare logout
    // if(response.xhr && response.xhr.status == 401){
    //   const keycloak = VegaUi.app.keycloak.logout();
    //   keycloak.logout();
    // }
    const status= response.xhr? response.xhr.status +' - ': '';
    Ext.Msg.alert('Errore Direct nell\'accesso alla tabella  Company Group', status+operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
