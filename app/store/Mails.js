Ext.define('VegaUi.store.Mails', {
  extend: 'Ext.data.Store',
  alias:'store.mails',

  requires: [
    'VegaUi.model.Mail',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'Mails',
      autoLoad: false,
      model: 'VegaUi.model.Mail',
      sorters: [{
        property: 'id',
        direction: 'DESC' // or 'DESC' for descending
      }],
      sortOnLoad: true,
      proxy: {
        type: 'direct',
        api: {
          read: mailDirectController.read,
          destroy: mailDirectController.destroy
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file Mail',
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
    Ext.Msg.alert('Errore Json nell\'accesso alla tabella Mail', JSON.parse(response.responseText).message,
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
    Ext.Msg.alert('Errore Direct nell\'accesso alla tabella  Mail', status+operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
