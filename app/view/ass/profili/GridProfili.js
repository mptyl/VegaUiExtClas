Ext.define('VegaUi.view.ass.profili.GridProfili', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.questprofile-grid',

  requires: [
    'VegaUi.view.ass.profili.GridProfiliController',
  ],

  controller: 'ass-profili-gridprofili',
  items: [
    {
      xtype: 'grid',
      reference: 'grid',
      bind:
        {
          store: '{quesprofiletstore}'
        },
      plugins: 'gridfilters',
      margin: '0 10 0 10',
      border: true,
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
          flex: 100,
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
              text: 'Aggiungi nuovo Profilo Questionario',
              handler: 'onAdd',
              bind: {
                disabled: '{disabledGridButtons}'
              }

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
              text: 'Cancella profilo Questionario',
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
