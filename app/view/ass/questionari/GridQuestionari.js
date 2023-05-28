Ext.define('VegaUi.view.ass.questionari.GridQuestionari', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.quest-grid',

  requires: [
    'VegaUi.view.ass.questionari.GridQuestionariController',
  ],
  controller: 'ass-questionari-gridquestionari',
  layout: 'fit',
  items: [
    {
      xtype: 'grid',
      scrollable: 'vertical',

      reference: 'grid',
      bind:
        {
          store: '{queststore}'
        },
      autoLoad: true,
      flex: 10,
      plugins: 'gridfilters',
      margin: '0 10 0 10',
      border: true,
      //style: 'border: 1px solid lightgrey',
      columns: [
        {
          xtype: 'numbercolumn',
          flex: 2,
          dataIndex: 'id',
          text: 'Id',
          format: '0',
          align: 'right'
        },
        {
          xtype: 'gridcolumn',
          flex: 10,
          dataIndex: 'title',
          text: 'Nome',
          filter: {
            type: 'string'
          }
        },
        {
          xtype: 'gridcolumn',
          flex: 10,
          dataIndex: 'searchText',
          text: 'Ricerca Questionario',
          filter: {
            type: 'string'
          }
        },
        {
          xtype: 'gridcolumn',
          flex: 10,
          dataIndex: 'notes',
          text: 'Note',
          filter: {
            type: 'string'
          }
        },
        {
          xtype: 'gridcolumn',
          flex: 10,
          dataIndex: 'questionnaireGroupName',
          text: 'Gruppo questionari',
          filter: {
            type: 'string'
          }
        },
        {
          xtype: 'numbercolumn',
          flex: 2,
          format: '0',
          align: 'right',
          dataIndex: 'compilationTime',
          text: 'T. comp'
        },
        {
          xtype: 'numbercolumn',
          flex: 2,
          format: '0',
          align: 'right',
          dataIndex: 'forcedTerminationTime',
          text: 'T. max'
        },
        {
          xtype: 'numbercolumn',
          flex: 2,
          format: '0',
          align: 'right',
          dataIndex: 'attachments',
          text: 'Allegati'
        },
        {
          xtype: 'checkcolumn',
          flex: 3,
          dataIndex: 'canceled',
          text: 'Annullato',
          filter: {
            type: 'boolean',
            active: true,
            value: false
          }
        }
      ],
      dockedItems: [
        {
          xtype: 'toolbar',
          ui: 'footer',
          dock: 'top',
          defaults: {
            xtype: 'button',
            padding: 10,
          },
          items: [
            {
              reference: 'addButton',
              iconCls: 'x-fa fa-plus',
              text: 'Aggiungi nuovo Questionario',
              handler: 'onAdd',
              bind: {
                disabled: '{disabledGridButtons}'
              }

            },
            {
              reference: 'duplicateButton',
              iconCls: 'x-fa fa-copy',
              text: 'Duplica il Questionario',
              handler: 'onDuplicate',

            },
            {
              reference: 'questeditorButton',
              iconCls: 'x-fa fa-pencil-ruler',
              text: 'QuestEditor',
              handler: 'onOpenQuestEditor',

            },
            {
              xtype: 'tbfill'
            },
            {
              reference: 'reloadButton',
              iconCls: 'x-fa fa-arrow-up',
              text: 'Reload',
              handler: 'onReload',
              textAlign: 'right',
              bind: {
                disabled: '{disabledGridButtons}'
              }
            },
            {
              reference: 'removeButton',
              iconCls: 'x-fa fa-trash',
              text: 'Cancella Gruppo Questionario',
              handler: 'onRemove',
              textAlign: 'right',
              bind: {
                disabled: '{disabledGridButtons}'
              }

            }
          ]
        }
      ],
      listeners:{
        rowdblclick:'onRowDblClick'
      }
    },
  ]
});

