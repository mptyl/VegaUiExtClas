Ext.define('VegaUi.store.QeReplies', {
  extend: 'Ext.data.Store',
  alias:'store.qereplies',

  requires: [
    'VegaUi.model.questEditor.QeFullReply',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'QeReplies',
      autoLoad: false,
      model: 'VegaUi.model.questEditor.QeFullReply',
      proxy: {
        type: 'direct',
        api: {
          read: replyController.read,
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura dele Repies',
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
          writeAllFields: true
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
