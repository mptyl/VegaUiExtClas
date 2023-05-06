Ext.define('VegaUi.store.QuestionnaireTypes', {
  extend: 'Ext.data.Store',

  requires: [
    'VegaUi.model.QuestionnaireType',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'QuestionnaireTypes',
      autoLoad: true,
      model: 'VegaUi.model.QuestionnaireType',
      proxy: {
        type: 'direct',
        api: {
          read: questionnaireTypeDirectController.read,
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file tipo questionari',
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
    Ext.Msg.alert('Errore nell\'accesso all\'enum Tipo Questionari', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso all\'enum Tipo Questionari', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
