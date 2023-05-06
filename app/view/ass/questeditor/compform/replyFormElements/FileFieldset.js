Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.FileFieldset', {
  extend: 'Ext.form.FieldSet',
  alias: 'widget.qe-filefieldset',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  title: 'File',
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Accept:',
      name: 'accept',
      bind:'{replyRecord.accept}',
      anchor:'100%'
    },
    {
      xtype: 'checkboxfield',
      name: 'multipleFiles',
      fieldLabel: 'Più files ammessi:',
      defaultValue: false,
      bind:'{replyRecord.multipleFiles}',
      anchor:'100%'
    },
  ]
})
