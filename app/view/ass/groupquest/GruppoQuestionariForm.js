Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionariForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.questgroup-form',

  requires: [
    'VegaUi.view.ass.groupquest.GruppoQuestionariFormController',
  ],

  controller: 'ass-groupquest-gruppoquestionariform',
  reference: 'gruppoGuestionariEntityForm',
  trackResetOnLoad: true,
  jsonSubmit: true,
  margin:'0 10',
  defaults: {
    labelAlign: 'right',
    labelWidth: 180,
  },
  items: [
    {
      xtype: 'textfield',
      margin:'10 0',
      anchor: '100%',
      fieldLabel: 'Nome Gruppo Questionari',
      name: 'name',
    },
    {
      xtype: 'textfield',
      anchor: '100%',
      fieldLabel: 'Descrizione',
      name: 'description',
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Id',
      name: 'id',
      readOnly: true,
      bind: {
        hidden: '{hiddenid}'
      }
    },
  ],
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'top',
      ui: 'footer',
      items: [
        {
          xtype: 'button',
          reference: 'add',
          iconCls: 'x-fa fa-plus',
          text: 'Torna alla lista',
          handler: 'onReset',
        },
        '->',
        {
          xtype: 'tbtext',
          text: 'Gruppo Questionari',
          style: {
            fontWeight: 'bold'
          }
        },
        '->',
        {
          xtype: 'button',
          reference: 'save',
          iconCls: 'x-fa fa-copy',
          text: 'Salva il Gruppo Questionario',
          handler: 'onSave',
          align: 'right',
        },
      ]
    }
  ]
});
