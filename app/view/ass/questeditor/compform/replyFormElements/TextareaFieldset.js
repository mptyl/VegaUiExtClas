Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.TextAreaFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-textareafieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  title: 'TextArea',
  items: [
    {
      xtype: 'fieldcontainer',
      layout:{
        type:'hbox',
        align:'stretch'
      },
      items: [
        {
          xtype: 'numberfield',
          name: 'rows',
          fieldLabel: 'Righe:',
          bind: '{replyRecord.rows}',
          anchor:'100%',
          flex:1
        },
        {
          xtype: 'numberfield',
          name: 'cols',
          fieldLabel: 'Colonne:',
          bind: '{replyRecord.cols}',
          anchor:'100%',
          flex:1
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Placeholder:',
          name: 'placeHolder',
          bind: '{replyRecord.placeHolder}',
          anchor:'100%',
          flex:3
        },
      ]
    },

  ]
})
