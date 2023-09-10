Ext.define('VegaUi.view.ass.questionari.GridQuestionari', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.quest-grid',

  requires: [
    'VegaUi.view.ass.questionari.GridQuestionariController',
  ],
  scrollable: 'vertical',
  controller: 'ass-questionari-gridquestionari',
  layout: 'fit',
  bind:
    {
      store: '{queststore}'
    },
  plugins: 'gridfilters',
  margin: '0 10 0 10',
  border: true,
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
      flex: 7,
      dataIndex: 'name',
      text: 'Nome',
      filter: {
        type: 'string'
      }
    },
    {
      xtype: 'gridcolumn',
      flex: 5,
      dataIndex: 'searchText',
      text: 'Ricerca Questionario',
      filter: {
        type: 'string'
      }
    },
    {
      xtype: 'gridcolumn',
      flex: 10,
      dataIndex: 'title',
      text: 'Titolo',
      filter: {
        type: 'string'
      }
    },
    {
      xtype: 'gridcolumn',
      flex: 5,
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
      text: 'T.C',
      textAlign:'right'
    },
    {
      xtype: 'numbercolumn',
      flex: 2,
      format: '0',
      align: 'right',
      dataIndex: 'forcedTerminationTime',
      text: 'T.M',
    },
    {
      xtype: 'numbercolumn',
      flex: 2,
      format: '0',
      align: 'right',
      dataIndex: 'attachments',
      text: 'All.'
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
        '->',
        {
          xtype: 'tbtext',
          text: 'Questionari',
          style: {
            fontWeight: 'bold'
          }
        },
        '->',
        {
          reference: 'reloadButton',
          iconCls: 'x-fa fa-arrow-up',
          text: 'Reload',
          handler: 'onReload',
          textAlign: 'right'
        },
        {
          reference: 'removeButton',
          iconCls: 'x-fa fa-trash',
          text: 'Cancella Questionari',
          handler: 'onRemove',
          textAlign: 'right',
          bind: {
            disabled: '{removeButtonDisabled}'
          }

        }
      ]
    }
  ],
  selModel: {
    selType: 'checkboxmodel',
    mode: 'MULTI'
  },
  listeners: {
    rowdblclick: 'onRowDblClick',
    selectionchange: 'onSelectionChange',
  }
});

