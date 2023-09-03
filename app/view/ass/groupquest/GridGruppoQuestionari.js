Ext.define('VegaUi.view.ass.groupquest.GridGruppoQuestionari', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ass-groupquest-grid',

    requires: [
      'VegaUi.view.ass.groupquest.GridGruppoQuestionariController',
      'VegaUi.view.ass.groupquest.GridGruppoQuestionariModel',
      'Ext.selection.Model',
      'Ext.grid.RowEditor',
      'Ext.grid.plugin.RowEditing'
    ],
    controller: 'ass-groupquest-gridgruppoquestionari',
    viewModel: {
      type: 'ass-groupquest-gridgruppoquestionari'
    },
    store: 'QuestionnaireGroups',
    margin: '0 10',
    border: true,
    columns: [
      {xtype: 'numbercolumn', text: 'Id', dataIndex: 'id', format: '#', flex: 1, align: 'right'},
      {xtype: 'gridcolumn', flex: 5, dataIndex: 'name', text: 'Nome', editor: {allowBlank: false}},
      {xtype: 'gridcolumn', flex: 10, dataIndex: 'description', text: 'Descrizione', editor: {allowBlank: true}}
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
          },
          {
            reference: 'removeButton',
            iconCls: 'x-fa fa-trash',
            text: 'Cancella Gruppo Questionario',
            handler: 'onRemove',
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
    plugins: {
      rowediting: {
        clicksToMoveEditor: 1,
        autoCancel: true,
        listeners: {
          cancelEdit: 'onCancelEdit',
          edit: 'onEdit'
        }
      }
    },
    listeners: {
      selectionchange: 'onSelectionChange'
    }
  }
)
