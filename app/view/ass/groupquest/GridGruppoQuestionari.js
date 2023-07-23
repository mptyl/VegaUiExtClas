Ext.define('VegaUi.view.ass.groupquest.GridGruppoQuestionari', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.questgroup-grid',

    requires: [
      'VegaUi.view.ass.groupquest.GridGruppoQuestionariController',
      'Ext.grid.filters.Filters'
    ],
    bind:
      {
        store: '{quesgrouptstore}'
      },
    controller: 'ass-groupquest-gridgruppoquestionari',
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
        flex: 20,
        dataIndex: 'name',
        text: 'Nome'
      },
      {
        xtype: 'gridcolumn',
        flex: 20,
        dataIndex: 'description',
        text: 'Descrizione',
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
            text: 'Aggiungi nuovo Gruppo Questionario',
            handler: 'onAdd',
            bind: {
              disabled: '{disabledGridButtons}'
            }

          },
          '->',
          {
            xtype: 'tbtext',
            text: 'Gruppi Questionario',
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
    selModel: {
      selType: 'checkboxmodel',
      mode: 'MULTI'
    },
    listeners: {
      rowdblclick: 'onRowDblClick',
      selectionchange: 'onSelectionChange',
    }
  }
)
