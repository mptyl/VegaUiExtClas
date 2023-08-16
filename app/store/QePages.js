Ext.define('VegaUi.store.QeQuestions', {
  extend: 'Ext.data.Store',
  alias:'store.qequestions',

  requires: [
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      fields:['nodeCode'],
      storeId: 'QeQuestions',
      autoLoad: false,
      proxy: {
        type: 'direct',
        api: {
          read: jumpExpressionController.readQuestions,
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura delle Question',
          rootProperty: 'records',
          transform: {
            fn: function(data) {
              return data.records.map(function(item) {
                return {nodeCode: item};
              });
            },
            scope: this
          },
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
        }
      }
    }, cfg)]);
  },

  onJsonException: function (reader, response, error, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso alle Question', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso alle Question', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
