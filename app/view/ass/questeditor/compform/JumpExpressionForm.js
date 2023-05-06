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

  items: [

    {
      xtype: 'form',
      jsonSubmit: true,
      fieldDefaults: {
        labelTextAlign: 'right',
        labelMinWidth: 250,
      },
      items: [
        {
          xtype: 'fieldset',
          title: 'Jump Expression',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Id',
              name: 'id',
              bind:'{jeRecord.id}',
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
                  fieldLabel: 'Etichetta',
                  name: 'text',
                  bind:'{jeRecord.text}',
                  flex: 20
                },
                {
                  xtype: 'textfield',
                  name: 'nodeCode',
                  bind:'{jeRecord.nodeCode}',
                  margin: '0 0 0 5',
                  flex: 2
                },
              ]
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Espressione:',
              name: 'expression',
              bind:'{jeRecord.expression}',
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Salta a:',
              name: 'jumpTo',
              bind:'{jeRecord.jumpTo}',
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'elementPrefix',
              name: 'elementPrefix',
              bind:'{jeRecord.elementPrefix}',
              hidden:true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'fatherNodeId',
              name: 'fatherNodeId',
              bind:'{jeRecord.fatherNodeId}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'siblingPosition',
              name: 'siblingPosition',
              bind:'{jeRecord.siblingPosition}',
              hidden: true
            },
            {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'questId',
              name: 'questId',
              bind:'{jeRecord.questId}',
              hidden: true
            }
          ]
        },
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
              text: 'Esci senza salvare',
              handler: 'onCancelWithoutSaving',
            },
            '->',
            {
              reference: 'saveGroup',
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
