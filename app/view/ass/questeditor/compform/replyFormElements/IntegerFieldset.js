Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.IntegerFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-integerfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'Intero',
  items: [
    {
      xtype: 'numberfield',
      name: 'minValue',
      fieldLabel: 'Valore intero minimo ammesso:',
      bind: '{replyRecord.minValue}',
      anchor:'100%'
    },
    {
      xtype: 'numberfield',
      name: 'maxValue',
      fieldLabel: 'Valore intero massimo ammesso:',
      bind: '{replyRecord.maxValue}',
      anchor:'100%'
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
