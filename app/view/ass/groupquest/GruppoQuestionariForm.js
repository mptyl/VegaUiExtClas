Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionariForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.questgroup-form',

  requires: [
    'VegaUi.view.ass.groupquest.GruppoQuestionariFormController',
  ],

  controller: 'ass-groupquest-gruppoquestionariform',
  items: [
    {
      xtype: 'form',
      reference:'gruppoGuestionariEntityForm',
      margin: '0 10',
      trackResetOnLoad: true,
      jsonSubmit: true,
      flex: 5,
      items: [
        {
          xtype: 'fieldset',
          defaults: {
            labelAlign: 'right',
            labelWidth: 120,
          },
          title: 'Gruppo Questionari',
          items: [
            {
              xtype: 'textfield',
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
        }
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
            {
              xtype: 'tbfill'
            },
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
    },
  ]
});
