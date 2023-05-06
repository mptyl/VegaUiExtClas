Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.NumericFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-numericfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'Numero',
  items: [
    {
      xtype: 'numberfield',
      name: 'minNumValue',
      fieldLabel: 'Valore numerico minimo ammesso:',
      bind: '{replyRecord.minNumValue}',
      anchor: '100%',
    },
    {
      xtype: 'numberfield',
      name: 'maxNumValue',
      fieldLabel: 'Valore numerico massimo ammesso:',
      bind: '{replyRecord.maxNumValue}',
      anchor: '100%',
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
