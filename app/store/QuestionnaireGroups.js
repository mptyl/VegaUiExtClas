Ext.define('VegaUi.store.QuestionnaireGroups', {
  extend: 'Ext.data.Store',
  alias:'store.questionnairegroups',

  requires: [
    'VegaUi.model.QuestionnaireGroup',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'QuestionnaireGroups',
      autoLoad: true,
      model: 'VegaUi.model.QuestionnaireGroup',
      sorters: [{
        property: 'id',
        direction: 'DESC' // or 'DESC' for descending
      }],
      sortOnLoad: true,
      proxy: {
        type: 'direct',
        api: {
          read: questionnaireGroupDirectController.read,
          create: questionnaireGroupDirectController.create,
          update: questionnaireGroupDirectController.update,
          destroy: questionnaireGroupDirectController.destroy
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file gruppo questionari',
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
    Ext.Msg.alert('Errore nell\'accesso alla tabella Gruppo Questionari', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso alla tabella Gruppo Questionari', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
