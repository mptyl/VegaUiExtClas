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
          format: 'd/m/Y',
          bind:{
            value:'{replyRecord.minDate}'
          },
          flex:1,
          timezoneOffset: 120,
        },
        {
          xtype: 'datefield',
          name: 'maxDate',
          fieldLabel: 'Data massima ammessa:',
          format: 'd/m/Y',
          bind:{
            value:'{replyRecord.maxDate}'
          },
          flex:1
        }
      ]
    },
  ]
})
