Ext.define('VegaUi.view.ass.questeditor.compform.MoveForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-move-form',

  requires: [
    'VegaUi.view.ass.questeditor.compform.MoveFormController',
  ],

  controller: 'moveform-controller',
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
          xtype: 'fieldcontainer',
          layout: 'hbox',
          items: [
            {
              xtype: 'combobox',
              fieldLabel: 'Sposta/Duplica:',
              pageSize: 2,
              store: ['SPOSTA', 'DUPLICA'],
              queryMode: 'local',
              anchor: '100%',
              flex: 1,
            },
            {
              xtype: 'combobox',
              bind: {
                value:'{movingRecord.baGroup}',
                fieldLabel:'{movingRecord.labelGruppo}', // Prima,Dopo oppure Seleziona Gruppo
                store:'{movingNode.labelGruppoStore}',
              },
              anchor: '100%',
              flex:1
            },
            {
              xtype: 'combobox',
              displayField: 'groupText',
              valueField: 'groupCode',
              forceSelection: true,
              queryMode: 'local',
              store: 'QeJMoveGroups',
              anchor: '100%',
              fieldLabel: 'Gruppo:',
              bind: '{movingNode.group}',
              flex:1,
              listeners: {
                change: 'addToExpression'
              }
            },
            {
              xtype: 'combobox',
              bind: {
                value:'{movingRecord.baQuestion}',
                fieldLabel:'{movingRecord.labelQuestion}', // Prima,Dopo oppure Seleziona Gruppo
                store:'{movingNode.labelQuestionStore}',
                hidden:'{movingNode.hideQuestion}',
              },
              anchor: '100%',
              flex:1
            },
            {
              xtype: 'combobox',
              displayField: 'questionText',
              valueField: 'questionCode',
              forceSelection: true,
              queryMode: 'local',
              store: 'QeJMoveQuestions',
              anchor: '100%',
              fieldLabel: 'Domanda:',
              bind: {
                value:'{movingNode.question}',
                hidden:'{movingNode.hideQuestion}'
              },
              flex:1
            },
            {
              xtype: 'combobox',
              bind: {
                value:'{movingRecord.baReply}',
                fieldLabel:'{movingRecord.labelReply}', // Prima,Dopo oppure Seleziona Gruppo
                store:'{movingNode.labelReplyStore}',
                hidden:'{movingNode.hideReply}',
              },
              anchor: '100%',
              flex:1
            },
            {
              xtype: 'combobox',
              displayField: 'replyText',
              valueField: 'replyCode',
              forceSelection: true,
              queryMode: 'local',
              store: 'QeJMoveReplies',
              anchor: '100%',
              fieldLabel: 'Risosta:',
              bind: {
                value:'{movingNode.reply}',
                hidden:'{movingNode.hideReply}'
              },
              flex:1
            },
            {
              xtype: 'combobox',
              bind: {
                value:'{movingRecord.baJumpExpression}',
                fieldLabel:'{movingRecord.labelJumpExpression}', // Prima,Dopo oppure Seleziona Gruppo
                store:'{movingNode.labelJumpExpressionStore}',
                hidden:'{movingNode.hideJumpExpression}',
              },
              anchor: '100%',
              flex:1
            },
            {
              xtype: 'combobox',
              displayField: 'jumpExpressionText',
              valueField: 'jumpExpressionCode',
              forceSelection: true,
              queryMode: 'local',
              store: 'QeJMoveJumpExpressions}',
              anchor: '100%',
              fieldLabel: 'Jump/Enter Expression:',
              bind: {
                value:'{movingNode.jumpExpression}',
                hidden:'{movingNode.hideJumpExpression}'
              },
              flex:1
            },
          ]
        },
        {
          xtype: 'textfield',
          name: 'id',
          bind:'{movingRecord.id}',
          hidden: false,
          fieldLabel: 'Id'
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          fieldLabel: 'elementPrefix',
          name: 'elementPrefix',
          bind:'{movingRecord.elementPrefix}',
          hidden:false
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          fieldLabel: 'fatherNodeId',
          name: 'fatherNodeId',
          bind:'{movingRecord.fatherNodeId}',
          hidden: false
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          fieldLabel: 'siblingPosition',
          name: 'siblingPosition',
          bind:'{movingRecord.siblingPosition}',
          hidden: false
        },
        {
          xtype: 'numberfield',
          anchor: '100%',
          fieldLabel: 'questId',
          name: 'questId',
          bind:'{movingRecord.questId}',
          hidden: false
        }
      ],
      dockedItems:[
        {
          xtype: 'toolbar',
          ui:'footer',
          docked: 'top',
          items: [
            {
              reference: 'cancelWithoutSaving',
              iconCls: 'x-fa fa-undo',
              text: 'Esci senza eseguire',
              handler: 'onCancelWithoutSaving',
            },
            '->',
            {
              reference: 'saveButton',
              iconCls: 'x-fa fa-inbox',
              text: 'Esegui spostamento o duplicazione',
              handler:'onSaveQuestion',
            }
          ]
        },
      ]
    }

  ]
})
