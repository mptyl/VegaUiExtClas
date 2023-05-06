Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.CheckGroupFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-checkgroupfieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Valore  della risposta:',
      name: 'boxGroupName',
      bind: '{replyRecord.boxGroupName}',
      anchor:'100%'
    },
    {
      xtype: 'comboboxfield',
      anchor: '100%',
      fieldLabel: 'Orientamento',
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
      ]
    }
  ]

})
