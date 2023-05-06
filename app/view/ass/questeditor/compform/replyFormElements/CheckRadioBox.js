Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.CheckRadioBox', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-checkradiobox',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Valore  della risposta:',
      name: 'boxValue',
      bind: '{replyRecord.boxValue}',
      anchor:'100%'
    },
    {
      xtype: 'checkboxfield',
      name: 'checked',
      fieldLabel: 'Checked:',
      defaultValue: false,
      bind: '{replyRecord.checked}',
      anchor:'100%'
    },
  ]
})
