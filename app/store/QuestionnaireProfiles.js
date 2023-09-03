Ext.define('VegaUi.store.QuestionnaireProfiles', {
  extend: 'Ext.data.Store',
  alias:'store.questionnaireprofiles',

  requires: [
    'VegaUi.model.QuestionnaireProfile',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'QuestionnaireProfiles',
      autoLoad: true,
      model: 'VegaUi.model.QuestionnaireProfile',
      sorters: [{
        property: 'id',
        direction: 'DESC' // or 'DESC' for descending
      }],
      sortOnLoad: true,
      proxy: {
        type: 'direct',
        api: {
          read: questionnaireProfileDirectController.read,
          create: questionnaireProfileDirectController.create,
          update: questionnaireProfileDirectController.update,
          destroy: questionnaireProfileDirectController.destroy
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file profilo questionari',
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
    const me = this;
    Ext.Msg.alert('Errore nell\'accesso alla tabella Profilo Questionari', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    const me = this;
    console.log(operation);
    Ext.Msg.alert('Errore nell\'accesso alla tabella Profilo Questionari', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
