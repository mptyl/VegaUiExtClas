Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.SelectFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-selectfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 110,
  },
  title: 'Select',
  items: [
    {
      xtype: 'fieldcontainer',
      layout:{
        type:'hbox',
        align:'stretch'
      },
      items: [
        {
          xtype:'fieldcontainer',
          layout:{
            type:'hbox',
            pack:'start',
            align:'stretch'
          },
          flex:1,
          margin:'0 10 0 0',
          items:[
            {
              xtype: 'checkboxfield',
              name: 'multipleSelection',
              fieldLabel: 'Più selezioni ammesse:',
              defaultValue: false,
              bind: '{replyRecord.multipleSelection}',
              width:150
            },
            {
              xtype: 'numberfield',
              name: 'size',
              fieldLabel: 'Dimensione della lista:',
              bind: '{replyRecord.size}',
              anchor:'100%',
              flex:1
            },
          ]
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Valore selezionato:',
          name: 'selected',
          bind: '{replyRecord.selected}',
          flex:1
        },
      ]
    },
    {
      xtype: 'textareafield',
      fieldLabel: 'Lista possibili opzioni:',
      name: 'optionList',
      bind: '{replyRecord.optionList}',
      anchor: '100%'
    },

  ]
})
