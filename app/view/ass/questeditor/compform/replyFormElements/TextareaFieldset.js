Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.TextAreaFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-textareafieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'TextArea',
  items: [
    {
      xtype: 'numberfield',
      name: 'rows',
      label: 'Numero di righe della textarea:',
      bind: '{replyRecord.rows}',
      anchor:'100%'
    },
    {
      xtype: 'numberfield',
      name: 'cols',
      label: 'Numero di colonne della textarea:',
      bind: '{replyRecord.cols}',
      anchor:'100%'
    },
    {
      xtype: 'textfield',
      label: 'Placeholder:',
      name: 'placeHolder',
      bind: '{replyRecord.placeHolder}',
      anchor:'100%'
    },
  ]
})
