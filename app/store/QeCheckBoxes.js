Ext.define('VegaUi.store.QeCheckBoxes', {
  extend: 'Ext.data.Store',
  alias:'store.qecheckboxes',

  requires: [
    'VegaUi.model.questEditor.QeCheckBox',
    'Ext.data.proxy.Direct',
    'VegaUi.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'QeCheckBoxes',
      autoLoad: true,
      model: 'VegaUi.model.questEditor.QeCheckBox',
      proxy: {
        type: 'direct',
        api: {
          read: checkBoxController.read,
          create: checkBoxController.create,
          update: checkBoxController.update,
          destroy: checkBoxController.destroy
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura dei CheckBoxes',
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
    Ext.Msg.alert('Errore nell\'accesso ai CheckBexes', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    var me = this;
    Ext.Msg.alert('Errore nell\'accesso ai CheckBoxes', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
