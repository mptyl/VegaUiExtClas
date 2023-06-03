Ext.define('VegaUi.view.ass.questeditor.compform.GroupForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-group-form',

  requires: [
    'VegaUi.view.ass.questeditor.compform.GroupFormController',
  ],

  controller: 'groupform-controller',
  scrollable: 'both',
  border: true,
  bodyPadding: 10,

  items: [
    {
      xtype: 'form',
      jsonSubmit: true,
      fieldDefaults: {
        labelTextAlign: 'right',
        labelMinWidth: 250,
      },
      defaultButton: 'saveButton',
      items: [
        {
          xtype: 'fieldset',
          title: 'Gruppo Questionari',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Id',
              name: 'id',
              bind: '{groupRecord.id}',
              hidden: true
            },
            {
              xtype: 'fieldcontainer',
              layout: 'hbox',
              padding: '10 0 10 0',
              items: [
                {
                  xtype: 'textfield',
                  anchor: '100%',
                  itemId:'treeLabel',
                  fieldLabel: 'Etichetta',
                  name: 'text',
                  bind: '{groupRecord.text}',
                  allowBlank: false,
                  flex: 20
                },

                {
                  xtype: 'textfield',
                  name: 'nodeCode',
                  bind: '{groupRecord.nodeCode}',
                  disabled: true,
                  margin: '0 0 0 5',
                  flex: 2
                },
              ]
            },
            {
              xtype: 'checkboxfield',
              anchor: '100%',
              fieldLabel: 'Con risposte random',
              name: 'random',
              bind: '{groupRecord.random}',
              defaultValue: false
            },

            // Fields standard
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'elementPrefix',
              name: 'elementPrefix',
              bind: '{groupRecord.elementPrefix}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'fatherNodeId',
              name: 'fatherNodeId',
              bind: '{groupRecord.fatherNodeId}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'siblingPosition',
              name: 'siblingPosition',
              bind: '{groupRecord.siblingPosition}',
              hidden: true
            },
            {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'questId',
              name: 'questId',
              bind: '{groupRecord.questId}',
              hidden: true
            }
          ]
        },
      ],
      dockedItems: [
        {
          xtype: 'toolbar',
          ui:'footer',
          docked: 'top',
          items: [
            {
              reference: 'cancelWithoutSaving',
              iconCls: 'x-fa fa-undo',
              text: 'Esci senza salvare',
              handler: 'onCancelWithoutSaving',
            },
            '->',
            {
              reference: 'saveButton',
              iconCls: 'x-fa fa-inbox',
              text: 'Salva Gruppo',
              handler: 'onSaveGroup',
            }
          ]
        }
      ]
    }
  ]
})
