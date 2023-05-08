Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.NumericFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-numericfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  title: 'Numero',
  items: [
    {
      xtype: 'fieldcontainer',
      layout: 'hbox',
      items: [
        {
          xtype: 'numberfield',
          name: 'minNumValue',
          fieldLabel: 'Minimo',
          bind: '{replyRecord.minNumValue}',
          anchor: '100%',
          flex:1
        },
        {
          xtype: 'numberfield',
          name: 'maxNumValue',
          fieldLabel: 'Massimo',
          bind: '{replyRecord.maxNumValue}',
          anchor: '100%',
          flex:1
        },
      ]
    },

    {
      xtype: 'textfield',
      fieldLabel: 'Placeholder:',
      name: 'placeHolder',
      anchor: '100%',
      bind: '{replyRecord.placeHolder}',
    },
  ]
})
