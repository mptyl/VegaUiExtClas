Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.DateFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-datefieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'Data',
  items: [
    {
      xtype: 'datefield',
      name: 'minDate',
      fieldLabel: 'Data minima ammessa:',
      dateFormat: 'Y-m-d',
      bind:{
        value:'{replyRecord.minDate}'
      },
    },
    {
      xtype: 'datefield',
      name: 'maxDate',
      fieldLabel: 'Data massima ammessa:',
      dateFormat: 'Y-m-d',
      bind:{
        value:'{replyRecord.maxDate}'
      },
    }
  ]
})
