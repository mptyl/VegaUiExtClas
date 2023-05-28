Ext.define('VegaUi.store.QeJeReplies', {
  extend: 'Ext.data.Store',
  alias:'store.qejerepliess',

  requires: [
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      fields:['replyNodeCode'],
      storeId: 'QeJeReplies',
      autoLoad: false,
      proxy: {
        type: 'direct',
        api: {
          read: jumpExpressionController.readReplies,
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura delle Replies',
          rootProperty: 'records',
          transform: {
            fn: function(data) {
              return data.records.map(function(item) {
                return {replyNodeCode: item};
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
    Ext.Msg.alert('Errore nell\'accesso alle Replies', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso alle Replies', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
