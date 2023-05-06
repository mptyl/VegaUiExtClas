Ext.define('VegaUi.view.ass.questeditor.compform.QuestionForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-question-form',

  requires: [
    'VegaUi.view.ass.questeditor.compform.QuestionFormController',
  ],

  controller: 'ass-questeditor-compform-questionform',
  scrollable: 'both',
  border: true,
  bodyPadding: 10,
  jsonSubmit:true,
  items: [

    {
      xtype: 'form',
      jsonSubmit:true,
      trackResetOnLoad: true,
      fieldDefaults: {
        labelAlign: 'right',
        labelMinWidth: 180,
      },
      items: [
        {
          xtype: 'fieldset',
          padding: 10,
          title: 'Domanda',
          items: [
            {
              xtype: 'textfield',
              name: 'id',
              bind:'{questionRecord.id}',
              hidden: true,
              fieldLabel: 'Id'
            },
            {
              xtype: 'fieldcontainer',
              layout: 'hbox',
              items: [
                {
                  xtype: 'textfield',
                  anchor: '100%',
                  fieldLabel: 'Etichetta',
                  name: 'text',
                  bind:'{questionRecord.text}',
                  flex: 20
                },
                {
                  xtype: 'textfield',
                  name: 'nodeCode',
                  bind:'{questionRecord.nodeCode}',
                  margin: '0 0 0 5',
                  flex: 2
                },
              ]
            },

            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Titolo Domanda',
              name: 'title',
              bind:'{questionRecord.title}',
            },
            {
              xtype: 'textareafield',
              anchor: '100%',
              fieldLabel: 'Testo Domanda',
              name: 'questionText',
              bind:'{questionRecord.questionText}',
            },
            {
              xtype: 'textareafield',
              anchor: '100%',
              fieldLabel: 'Note',
              name: 'note',
              bind:'{questionRecord.note}',
            },
            {
              xtype: 'fieldcontainer',
              layout: 'hbox',
              margin: '5 0 5 0',
              items: [
                {
                  xtype: 'numberfield',
                  anchor: '100%',
                  fieldLabel: 'Numero minimo di risposte',
                  name: 'minReplyNumber',
                  bind:'{questionRecord.minReplyNumber}',
                  flex: 1,
                  margin: '0 5 0 0'
                },
                {
                  xtype: 'numberfield',
                  anchor: '100%',
                  fieldLabel: 'Numero massimo di risposte',
                  name: 'maxReplyNumber',
                  bind:'{questionRecord.maxReplyNumber}',
                  flex: 1
                },

              ]
            },
            {
              xtype: 'container',
              layout: 'hbox',
              items: [
                {
                  xtype: 'numberfield',
                  anchor: '100%',
                  fieldLabel: 'Somma dei valori dele risposte',
                  name: 'valueOfAnswersSum',
                  bind:'{questionRecord.valueOfAnswersSum}',
                  flex: 1,
                  margin: '0 5 0 0'
                },
                {
                  xtype: 'numberfield',
                  anchor: '100%',
                  fieldLabel: 'Numero massimo di allegati',
                  name: 'attachmentsRequired',
                  bind:'{questionRecord.attachmentsRequired}',
                  flex: 1
                }
              ]
            },
            {
              xtype: 'checkboxfield',
              anchor: '100%',
              fieldLabel: 'Randomizzazione risposte',
              name: 'randomRepliesOrder',
              bind:'{questionRecord.randomRepliesOrder}',
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'elementPrefix',
              name: 'elementPrefix',
              bind:'{questionRecord.elementPrefix}',
              hidden:true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Immagine',
              name: 'imageLink',
              bind:'{questionRecord.imageLink}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'Testo descrizione immagine',
              name: 'imageAlt',
              bind:'{questionRecord.imageAlt}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'fatherNodeId',
              name: 'fatherNodeId',
              bind:'{questionRecord.fatherNodeId}',
              hidden: true
            },
            {
              xtype: 'textfield',
              anchor: '100%',
              fieldLabel: 'siblingPosition',
              name: 'siblingPosition',
              bind:'{questionRecord.siblingPosition}',
              hidden: true
            },
            {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'questId',
              name: 'questId',
              bind:'{questionRecord.questId}',
              hidden: true
            }
          ]
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
              text: 'Esci senza salvare',
              handler: 'onCancelWithoutSaving',
            },
            '->',
            {
              reference: 'saveGroup',
              iconCls: 'x-fa fa-inbox',
              text: 'Salva Domanda',
              handler:'onSaveQuestion',
            }
          ]
        },
      ]
    },
  ]
});
