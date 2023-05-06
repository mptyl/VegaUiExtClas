Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioGroupFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-radiogroupfieldset',
  fieldDefaults: {
    labelTextAlign: 'right',
    labelMinWidth: 180,
    anchor: '100%'
  },
  layout:'vbox',
  align:'stretch',
  items: [
    {
      xtype: 'panel',
      layout: 'hbox',
      padding: '10 0 10 0',
      flex:1,
      items: [
        {
          xtype: 'textfield',
          fieldLabel: 'Valore  della risposta:',
          name: 'boxGroupName',
          bind:'{replyRecord.boxGroupName}',
          flex: 2
        },
        {
          xtype: 'comboboxfield',
          anchor: '100%',
          fieldLabel: 'Orientamento',
          name: 'orientation',
          queryMode: 'local',
          displayField: 'name',
          valueField: 'abbr',
          forceSelection:true,
          allowBlank:false,
          bind:'{replyRecord.orientation}',
          store: [
            { abbr: 'ORIZZONTALE', name: 'ORIZZONTALE' },
            { abbr: 'VERTICALE', name: 'VERTICALE' },
          ]
        },
      ],
    }
  ]

})
