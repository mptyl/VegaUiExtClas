Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.IntegerFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-integerfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  title: 'Intero',
  items: [
    {
      xtype: 'fieldcontainer',
      layout: 'hbox',
      items: [
        {
          xtype: 'numberfield',
          name: 'minValue',
          fieldLabel: 'Minimo:',
          bind: '{replyRecord.minValue}',
          anchor:'100%',
          flex:1
        },
        {
          xtype: 'numberfield',
          name: 'maxValue',
          fieldLabel: 'Massimo:',
          bind: '{replyRecord.maxValue}',
          anchor:'100%',
          flex:1
        },
      ]
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Placeholder:',
      name: 'placeHolder',
      bind: '{replyRecord.placeHolder}',
      anchor:'100%'
    },
  ]
})
