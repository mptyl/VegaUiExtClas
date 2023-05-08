Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.CheckBoxForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.checkboxform',

  requires: [
    'VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.CheckBoxFormController',
  ],

  controller: 'ass-questeditor-compform-checkboxform',
  bind: {
    hidden: '{checkBoxFormHidden}'
  },
  title: 'Checkbox',
  reference: 'checkBoxForm',
  itemId: 'checkBoxForm',
  fieldDefaults: {
    labelAlign: 'right',
    labelWidth: 60
  },
  bodyPadding:5,
  items: [
    {
      xtype: 'fieldcontainer',
      layout: 'hbox',
      items: [
        {
          xtype: 'textfield',
          name: 'boxLabel',
          fieldLabel: 'Label',
          bind: '{checkBoxModel.boxLabel}',
          anchor: '100%',
          flex: 10
        },
        {
          xtype: 'textfield',
          name: 'boxValue',
          fieldLabel: 'Valore',
          anchor: '100%',
          bind: '{checkBoxModel.boxValue}',
          flex: 10
        },
        {
          xtype: 'checkboxfield',
          name: 'boxChecked',
          anchor: '100%',
          fieldLabel: 'Checked',
          bind: '{checkBoxModel.boxChecked}',
          flex: 3
        },
      ]
    },
    {
      xtype: 'textfield',
      name: 'id',
      bind: '{checkBoxModel.id}',
      hidden: true,
      flex: 1
    },
    {
      xtype: 'textfield',
      anchor: '100%',
      label: 'elementPrefix',
      name: 'elementPrefix',
      bind: '{checkBoxModel.elementPrefix}',
      hidden: true
    },
    {
      xtype: 'textfield',
      anchor: '100%',
      label: 'fatherNodeId',
      name: 'fatherNodeId',
      bind: '{checkBoxModel.fatherNodeId}',
      hidden: true
    },
    {
      xtype: 'textfield',
      anchor: '100%',
      label: 'siblingPosition',
      name: 'siblingPosition',
      bind: '{checkBoxModel.siblingPosition}',
      hidden: true
    },
    {
      xtype: 'numberfield',
      anchor: '100%',
      label: 'questId',
      name: 'questId',
      hidden: true
    }
  ],
  dockedItems: [
    {
      xtype: 'toolbar',
      docked: 'top',
      ui: 'footer',
      items: [
        {
          iconCls: 'x-fa fa-undo',
          text: 'Esci senza salvare',
          handler: 'onCancelWithoutSaving',
        },
        '->',
        {
          iconCls: 'x-fa fa-inbox',
          text: 'Salva ed esci',
          handler: 'onSaveBox',
        },
        {
          iconCls: 'x-fa fa-inbox',
          text: 'Salva e continua',
          handler: 'onSaveAndContinue',
        }
      ]
    },
  ]
});
