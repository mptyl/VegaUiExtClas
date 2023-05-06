Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.TextualFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-textualfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'Testo',
  items: [
    {
      xtype: 'numberfield',
      name: 'minLength',
      fieldLabel: 'Lunghezza minima:',
      bind: '{replyRecord.minLength}',
      anchor: '100%',
      flex: 1
    },
    {
      xtype: 'numberfield',
      name: 'maxLength',
      fieldLabel: 'Lunghezza massima:',
      bind: '{replyRecord.maxLength}',
      anchor: '100%',
      flex: 1
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Placeholder:',
      name: 'placeHolder',
      anchor: '100%',
      bind: '{replyRecord.placeHolder}',
      flex: 3
    }
  ]
})
