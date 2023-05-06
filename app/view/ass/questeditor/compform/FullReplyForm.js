Ext.define('VegaUi.view.ass.questeditor.compform.FullReplyForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-fullreply-form',

  requires: [
    'VegaUi.view.ass.questeditor.compform.FullReplyFormController',
  ],
  itemId:'fullReplPanel',
  controller: 'ass-questeditor-compform-fullreplyform',

  scrollable: 'both',
  border: true,
  bodyPadding: 10,

  items: [
    {
      xtype: 'form',
      jsonSubmit: true,
      itemId:'fullReplyForm',
      fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 180
      },
      items: [
        {
          xtype: 'fieldset',
          title: 'Risposta',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Id',
              name: 'id',
              hidden: true,
              bind:'{replyRecord.id}'
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
                  bind:'{replyRecord.text}',
                  flex: 20,
                  allowBlank:false
                },
                {
                  xtype: 'textfield',
                  name: 'nodeCode',
                  margin: '0 0 0 5',
                  readOnly: true,
                  bind:'{replyRecord.nodeCode}',
                  flex: 2
                },
              ]
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Label risposta:',
              name: 'label',
              reference: 'labelField',
              bind:'{replyRecord.label}',
              allowBlank:false
            },
            {
              xtype: 'fieldcontainer',
              layout: 'hbox',
              items: [
                {
                  xtype: 'checkboxfield',
                  name: 'replyRequired',
                  reference: 'replyRequiredField',
                  fieldLabel: 'Risposta obbligatoria:',
                  hidden: false,
                  defaultValue: false,
                  bind:'{replyRecord.replyRequired}',
                  flex: 1

                },
                {
                  xtype: 'checkboxfield',
                  name: 'withComment',
                  reference: 'withCommentField',
                  fieldLabel: 'Con commento:',
                  hidden: false,
                  defaultValue: false,
                  bind:'{replyRecord.withComment}',
                  flex: 1
                },
              ]
            },
            {
              xtype: 'combobox',
              anchor: '100%',
              fieldLabel: 'Tipo risposta:',
              name: 'replyType',
              displayField: 'replyType',
              valueField: 'id',
              forceSelection: true,
              queryMode: 'local',
              store: 'QeReplyTypes',
              bind:'{replyRecord.replyType}',
              allowBlank:false,
              listeners: {
                change: 'onSelectReplyType'
              },
            },
            {
              xtype: 'container',
              itemId:'specificContent',
              reference: 'specificFormsContainer',
              items: [
              ]
            },


            // Fields standard
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'elementPrefix',
              name: 'elementPrefix',
              bind:'{replyRecord.elementPrefix}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'fatherNodeId',
              name: 'fatherNodeId',
              bind:'{replyRecord.fatherNodeId}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'siblingPosition',
              name: 'siblingPosition',
              bind:'{replyRecord.siblingPosition}',
              hidden: true
            },
            {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'questId',
              name: 'questId',
              bind:'{replyRecord.questId}',
              hidden: true
            }
          ]
        },
      ],
      dockedItems:[
        {
          xtype: 'toolbar',
          docked: 'top',
          ui:'footer',
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
              text: 'Salva Risposta',
              align: 'right',
              handler: 'onSaveReply',
            }
          ]
        }
      ]
    },
    {
      xtype:'qe-radioboxgrid',
      flex:1
    }
  ]
});
