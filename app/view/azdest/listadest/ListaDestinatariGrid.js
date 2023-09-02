Ext.define('VegaUi.view.azdest.listadest.ListaDestinatariGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.azd-listadestinatarigrid-panel',

  requires: [
    'VegaUi.view.azdest.listadest.ListaDestinatariGridController',
    'VegaUi.view.azdest.listadest.ListaDestinatariGridModel',
    'Ext.selection.Model',
    'Ext.grid.RowEditor',
    'Ext.grid.plugin.RowEditing'
  ],

  controller: 'azdest-listadest-listadestinatarigrid',
  viewModel: {
    type: 'azdest-listadest-listadestinatarigrid'
  },

  store: 'RecipientLists',
  margin: '0 10',
  columns: [
    {text: 'Id', dataIndex: 'id', format: '#', flex: 1,},
    {text: 'Nome', dataIndex: 'listName', flex: 10, editor: {allowBlank: false}},
    {
      text: 'Tipo Lista', dataIndex: 'listType', flex: 20,
      editor: {
        xtype: 'combobox',
        name: 'listType',
        allowBlank: false,
        forceSelection: true,
        store: [
          'SVILUPPO',
          'TEST',
          'PRODUZIONE',
          'CHIUSO'
        ],
      }
    },
    {text: 'Descrizione', dataIndex: 'listDescription', flex: 20, editor: {allowBlank: true}}
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
          text: 'Aggiungi Lista',
          handler: 'onAdd',
          //userCls: 'custom-button-green',
          iconCls: 'x-fa fa-plus',
        },
        '->',
        {
          xtype: 'tbtext',
          text: 'Liste Destinatari',
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
          text: 'Cancella Lista Destinatari',
          reference: 'removeRole',
          handler: 'onRemoveClick',
          //userCls: 'custom-button-red',
          iconCls: 'x-fa fa-trash',
          bind: {
            disabled: '{removeButtonDisabled}'
          }
        }
      ]
    }],
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
});
