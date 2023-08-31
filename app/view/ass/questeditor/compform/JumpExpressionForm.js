Ext.define('VegaUi.view.ass.questEditor.compform.JumpExpressionForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-jumpexpression-form',

  requires: [
    'VegaUi.view.ass.questEditor.compform.JumpExpressionFormController',
  ],

  controller: 'ass-questeditor-compform-jumpexpressionform',

  scrollable: 'both',
  border: true,
  bodyPadding: 10,

  listeners: {
    show: 'loadComboStore'
  },


  items: [

    {
      xtype: 'form',
      jsonSubmit: true,
      fieldDefaults: {
        labelAlign: 'right',
        labelMinWidth: 180,
      },
      defaultButton: 'saveButton',
      items: [
        {
          xtype: 'fieldset',
          title: 'Jump Expression',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Id',
              name: 'id',
              bind: '{jeRecord.id}',
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
                  allowBlank: false,
                  bind: '{jeRecord.text}',
                  flex: 20
                },
                {
                  xtype: 'textfield',
                  name: 'nodeCode',
                  bind: '{jeRecord.nodeCode}',
                  margin: '0 0 0 5',
                  disabled: true,
                  flex: 2
                },
              ]
            },
            {
              xtype: 'fieldcontainer',
              layout: {
                type: 'hbox',
                align: 'stretch'
              },
              items:[
                {
                  xtype: 'checkbox',
                  anchor: '100%',
                  fieldLabel: 'Enter Expression:',
                  name: 'enterexp',
                  bind: '{jeRecord.enterexp}',
                  width: 130
                },
                {
                  xtype: 'textfield',
                  itemId:'expressionField',
                  anchor: '100%',
                  name: 'expression',
                  bind: '{jeRecord.expression}',
                  listeners: {
                    change: 'onExpressionChange'
                  },
                  allowBlank: false,
                  flex:10
                },
                {
                  xtype: 'button',
                  text: 'Reset',
                  margin: '0 0 0 5',
                  handler: 'onResetExpression',
                  flex:2
                }
              ]
            },

            {
              xtype: 'fieldcontainer',
              layout: {
                type: 'hbox',
                align: 'stretch'
              },
              margin:'100px 0 0 0',
              items: [
                {
                  xtype: 'combobox',
                  submitValue: false,
                  itemId: 'comboReplies',
                  displayField: 'replyNodeCode',
                  valueField: 'replyNodeCode',
                  forceSelection: true,
                  queryMode: 'local',
                  store: 'QeJeReplies',
                  anchor: '100%',
                  fieldLabel: 'Se risposta:',
                  flex:2,
                  listeners: {
                    change: 'addToExpression'
                  }
                },
                {
                  xtype: 'combobox',
                  submitValue: false,
                  fieldLabel: 'Operatore:',
                  pageSize: 11,
                  listConfig: {
                    maxHeight: 400,  // Maximum height of dropdown list in pixels
                  },
                  store: ['(', ')', '<', '>', '>=', '<=', '==', '!=', '&&', '||', '!', 'TRUE', 'FALSE'],
                  queryMode: 'local',
                  flex: 1,
                  listeners: {
                    change: 'addToExpression'
                  },
                },
                {
                  xtype: 'combobox',
                  itemId: 'comboQuestions',
                  displayField: 'nodeCode',
                  valueField: 'nodeCode',
                  forceSelection: true,
                  queryMode: 'local',
                  store: 'QeJeQuestions',
                  anchor: '100%',
                  fieldLabel: 'Salta a:',
                  name: 'jumpTo',
                  bind: '{jeRecord.jumpTo}',
                  allowBlank: false,
                  flex:2
                },
              ]
            },

            // Fields standard
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'elementPrefix',
              name: 'elementPrefix',
              bind: '{jeRecord.elementPrefix}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'fatherNodeId',
              name: 'fatherNodeId',
              bind: '{jeRecord.fatherNodeId}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'siblingPosition',
              name: 'siblingPosition',
              bind: '{jeRecord.siblingPosition}',
              hidden: true
            },
            {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'questId',
              name: 'questId',
              bind: '{jeRecord.questId}',
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
              text: 'Salva Jump Expression',
              handler: 'onSaveJumpExpression',
            }
          ],
        },
      ]
    },
  ]
});
