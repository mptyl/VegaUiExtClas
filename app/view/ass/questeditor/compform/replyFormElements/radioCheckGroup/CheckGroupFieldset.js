Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.CheckGroupFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-checkgroupfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  items: [
    {
      xtype:'fieldcontainer',
      layout:'hbox',
      items:[
        {
          xtype: 'textfield',
          fieldLabel: 'Valore  della risposta:',
          anchor:'100%',
          name: 'boxGroupName',
          bind: '{replyRecord.boxGroupName}',
          flex:3
        },
        {
          xtype: 'combobox',
          fieldLabel: 'Orientamento',
          anchor:'100%',
          name: 'orientation',
          queryMode: 'local',
          displayField: 'name',
          valueField: 'abbr',
          forceSelection: true,
          allowBlank: false,
          bind: '{replyRecord.orientation}',
          store: [
            {abbr: 'ORIZZONTALE', name: 'ORIZZONTALE'},
            {abbr: 'VERTICALE', name: 'VERTICALE'},
          ],
          flex:2
        }
      ]
    },
  ]

})
