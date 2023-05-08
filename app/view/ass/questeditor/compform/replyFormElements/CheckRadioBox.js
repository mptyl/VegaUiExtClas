Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.CheckRadioBox', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-checkradiobox',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  items: [
    {
      xtype:'fieldcontainer',
      layout:'hbox',
      items:[
        {
          xtype: 'textfield',
          fieldLabel: 'Valore  della risposta:',
          name: 'boxValue',
          bind: '{replyRecord.boxValue}',
          anchor:'100%',
          flex:5
        },
        {
          xtype: 'checkboxfield',
          name: 'checked',
          fieldLabel: 'Checked:',
          defaultValue: false,
          bind: '{replyRecord.checked}',
          anchor:'100%',
          width:'250'
        },
      ]
    },
  ]
})
