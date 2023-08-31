Ext.define('VegaUi.store.AssessmentCombo', {
  extend: 'Ext.data.Store',
  alias:'store.assessmentCombo',

  requires: [
    'VegaUi.model.Assessment',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'AssessmentCombo',
      autoLoad: true,
      model: 'VegaUi.model.Assessment',
      sorters: [{
        property: 'id',
        direction: 'DESC' // or 'DESC' for descending
      }],
      sortOnLoad: true,
      proxy: {
        type: 'direct',
        api: {
          read: assessmentDirectController.read
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file Assessment',
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
    Ext.Msg.alert('Errore Json nell\'accesso alla tabella Assessment', JSON.parse(response.responseText).message,
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
    Ext.Msg.alert('Errore Direct nell\'accesso alla tabella  Assessment', status+operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
