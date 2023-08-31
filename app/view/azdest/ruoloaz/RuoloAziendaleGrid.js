Ext.define('VegaUi.view.azdest.ruoloaz.RuoloAziendaleGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.azd-ruoloaziendalegrid-panel',

  requires: [
    'VegaUi.view.azdest.ruoloaz.RuoloAziendaleGridController',
    'VegaUi.view.azdest.ruoloaz.RuoloAziendaleGridModel',
    'Ext.selection.Model',
    'Ext.grid.RowEditor',
    'Ext.grid.plugin.RowEditing'
  ],

  controller: 'azdest-ruoloaz-ruoloaziendalegrid',
  viewModel: {
    type: 'azdest-ruoloaz-ruoloaziendalegrid'
  },

  store: 'CompanyRoles',
  margin: '0 10 0 10',
  columns: [
    {
      text: 'Id',
      dataIndex: 'id',
      format: '#',
      flex: 1
    },
    {
      text: 'Nome',
      dataIndex: 'roleName',
      flex: 10,
      editor: {
        allowBlank: true
      }
    },
    {
      text: 'Descrizione',
      dataIndex: 'roleDescription',
      flex: 20,
      editor: {
        allowBlank: true
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
          text: 'Aggiungi Ruolo',
          handler: 'onAddClick',
          //userCls: 'custom-button-green',
          iconCls: 'x-fa fa-plus',
        },
        '->',
        {
          xtype: 'tbtext',
          text: 'Ruoli Aziendali',
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
          text: 'Cancella Ruolo',
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
