Ext.define('VegaUi.view.ass.profili.FormProfili', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.questprofile-form',

  requires: [
    'VegaUi.view.ass.profili.FormProfiliController',
  ],

  controller: 'ass-profili-formprofili',

  items: [
    {
      xtype: 'form',
      reference: 'profiliEntityForm',
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
          title: 'Profilo Questionari',
          items: [

            {
              xtype: 'textfield',
              label: 'Descrizione',
              anchor: '100%',
              name: 'description',
            },
            {
              xtype: 'numberfield',
              label: 'Id',
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
