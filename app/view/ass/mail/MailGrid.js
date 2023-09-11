Ext.define('VegaUi.view.ass.mail.MailGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.ass-mailGrid',

  requires: [
    'VegaUi.view.ass.mail.MailGridController',
    'Ext.selection.Model',
    'Ext.grid.RowEditor'
  ],

  controller: 'ass-mail-mailgrid',

  margin: '0 10',
  border: true,
  bind: {
    store: '{mails}'
  },
  //style: 'border: 1px solid lightgrey',
  columns: [
    {
      xtype: 'numbercolumn',
      flex: 4,
      dataIndex: 'id',
      text: 'Id',
      format: '0',
      align: 'right'
    },

    {
      xtype: 'gridcolumn',
      flex: 20,
      dataIndex: 'description',
      text: 'Descrizione',
    },
    {
      xtype: 'gridcolumn',
      flex: 20,
      dataIndex: 'object',
      text: 'Oggetto'

    },
    {
      xtype: 'gridcolumn',
      flex: 10,
      dataIndex: 'event',
      text: 'Evento'
    },
    {
      xtype: 'gridcolumn',
      flex: 20,
      dataIndex: 'assessmentTitle',
      text: 'Assessment'
    },
    {
      xtype: 'booleancolumn',
      flex: 2,
      dataIndex: 'cc',
      text: 'Cc'
    },
    {
      xtype: 'booleancolumn',
      flex: 2,
      dataindex: 'bcc',
      text: 'Bcc'
    },

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
          text: 'Aggiungi nuova Mail',
          handler: 'onAdd',
        },
        '->',
        {
          xtype: 'tbtext',
          text: 'Mail',
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
        },
        {
          reference: 'removeButton',
          iconCls: 'x-fa fa-trash',
          text: 'Cancella Mail',
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
    selectionchange: 'onSelectionChange'
  }
});
