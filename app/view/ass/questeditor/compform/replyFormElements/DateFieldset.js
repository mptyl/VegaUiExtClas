Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.DateFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-datefieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  title: 'Data',
  items: [
    {
      xtype:'fieldcontainer',
      layout:'hbox',
      items:[
        {
          xtype: 'datefield',
          name: 'minDate',
          fieldLabel: 'Data minima ammessa:',
          dateFormat: 'Y-m-d',
          bind:{
            value:'{replyRecord.minDate}'
          },
          flex:1
        },
        {
          xtype: 'datefield',
          name: 'maxDate',
          fieldLabel: 'Data massima ammessa:',
          dateFormat: 'Y-m-d',
          bind:{
            value:'{replyRecord.maxDate}'
          },
          flex:1
        }
      ]
    },
  ]
})
