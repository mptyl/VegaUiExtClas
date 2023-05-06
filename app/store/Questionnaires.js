Ext.define('VegaUi.store.Questionnaires', {
  extend: 'Ext.data.Store',
  alias:'store.questionnaires',

  requires: [
    'VegaUi.model.Questionnaire',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'Questionnaires',
      autoLoad: false,
      model: 'VegaUi.model.Questionnaire',
      proxy: {
        type: 'direct',
        api: {
          read: 'questionnaireDirectController.read',
          destroy: 'questionnaireDirectController.destroy'
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file questionari',
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
    Ext.Msg.alert('Errore nell\'accesso alla tabella Questionari', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso alla tabella Questionari', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
