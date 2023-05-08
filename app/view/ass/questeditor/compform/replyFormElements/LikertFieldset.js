Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.LikertFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-likertfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  title: 'Numero',
  items: [
    {
      xtype: 'numberfield',
      name: 'size',
      fieldLabel: 'Numero risposte ammesse:',
      bind: '{replyRecord.size}',
      anchor: '100%',
    },
  ]
})
