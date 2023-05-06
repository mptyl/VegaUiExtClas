Ext.define('VegaUi.store.QeRadioBoxes', {
  extend: 'Ext.data.Store',
  alias:'store.qeradioboxes',

  requires: [
    'VegaUi.model.questEditor.QeRadioBox',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'QeRadioBoxes',
      autoLoad: true,
      model: 'VegaUi.model.questEditor.QeRadioBox',
      proxy: {
        type: 'direct',
        api: {
          read: radioBoxController.read,
          create: radioBoxController.create,
          update: radioBoxController.update,
          destroy: radioBoxController.destroy
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura dei RadioBoxes',
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
    Ext.Msg.alert('Errore Json Exception nell\'accesso ai RadioBexes', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore Direct nell\'accesso ai RadioBoxes', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
