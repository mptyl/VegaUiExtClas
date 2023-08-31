Ext.define('VegaUi.view.ass.questeditor.compform.PageForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-page-form',

  requires: [
    'VegaUi.view.ass.questeditor.compform.PageFormController',
  ],

  controller: 'ass-questeditor-compform-pageform',

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
          title: 'Pagina',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Id',
              name: 'id',
              bind: '{pageRecord.id}',
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
                  itemId: 'treeLabel',
                  fieldLabel: 'Etichetta',
                  name: 'text',
                  bind: '{pageRecord.text}',
                  allowBlank: false,
                  flex: 20
                },

                {
                  xtype: 'textfield',
                  name: 'nodeCode',
                  bind: '{pageRecord.nodeCode}',
                  disabled: true,
                  margin: '0 0 0 5',
                  flex: 2
                },
              ]
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Note',
              name: 'note',
              bind: '{pageRecord.note}'
            },
            {
              xtype: 'checkboxfield',
              anchor: '100%',
              fieldLabel: 'Con risposte random',
              name: 'random',
              bind: '{pageRecord.random}',
              defaultValue: false
            },

            // Fields standard
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'elementPrefix',
              name: 'elementPrefix',
              bind: '{pageRecord.elementPrefix}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'fatherNodeId',
              name: 'fatherNodeId',
              bind: '{pageRecord.fatherNodeId}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'siblingPosition',
              name: 'siblingPosition',
              bind: '{pageRecord.siblingPosition}',
              hidden: true
            },
            {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'questId',
              name: 'questId',
              bind: '{pageRecord.questId}',
              hidden: true
            }
          ]
        },
      ],
      dockedItems: [
        {
          xtype: 'toolbar',
          ui: 'footer',
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
              text: 'Salva Pagina',
              handler: 'onSaveGroup',
            }
          ]
        }
      ]
    }
  ]
})
