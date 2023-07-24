Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.azd-gruppoaziende-grid',

  requires: [
    'VegaUi.view.azdest.grupaz.GruppoAziendeGridController',
    'Ext.selection.Model',
    'Ext.grid.RowEditor'
  ],

  controller: 'azdest-grupaz-gruppoaziendegrid',
  margin: '0 10 0 10',
  store: 'CompanyGroups',
  columns: [
    {text: 'Id', dataIndex: 'id', format: '#', flex: 1},
    {text: 'Nome', dataIndex: 'name', flex: 10},
    {text: 'Descrizione', dataIndex: 'description', flex: 20},
    {text: 'Logo', dataIndex: 'groupLogo', flex: 10}
  ],
  bind:
    {
      store: '{gruppoAziende}'
    },
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
          text: 'Aggiungi Gruppo',
          handler: 'onAddClick',
          //userCls: 'custom-button-green',
          iconCls: 'x-fa fa-plus',
        },
        '->',
        {
          xtype: 'tbtext',
          text: 'Gruppi Aziendali',
          style: {
            fontWeight: 'bold'
          }
        },
        '->', {
          text: 'Cancella Gruppo',
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
  listeners: {
    rowdblclick: 'onRowDblClick',
    selectionchange: 'onSelectionChange',
  }

});
