Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.SelectFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-selectfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'Select',
  items: [
    {
      xtype: 'checkboxfield',
      name: 'multipleSelection',
      label: 'Più selezioni ammesse:',
      defaultValue: false,
      bind: '{replyRecord.multipleSelection}',
      anchor:'100%'
    },
    {
      xtype: 'numberfield',
      name: 'size',
      label: 'Dimensione della lista:',
      bind: '{replyRecord.size}',
      anchor:'100%'
    },
    {
      xtype: 'textareafield',
      label: 'Lista possibili opzioni:',
      name: 'optionList',
      bind: '{replyRecord.optionList}',
      anchor:'100%'
    },
    {
      xtype: 'textfield',
      label: 'Valore selezionato:',
      name: 'selected',
      bind: '{replyRecord.selected}',
      anchor:'100%'
    },
  ]
})
