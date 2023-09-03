Ext.define('VegaUi.view.ass.profili.GridProfili', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.ass-questprofile-grid',

  requires: [
    'VegaUi.view.ass.profili.GridProfiliController',
    'VegaUi.view.ass.profili.GridProfiliModel',
    'Ext.selection.Model',
    'Ext.grid.RowEditor',
    'Ext.grid.plugin.RowEditing'
  ],

  controller: 'ass-profili-gridprofili',
  viewModel: {
    type: 'ass-profili-gridprofili'
  },
  store:'QuestionnaireProfiles',

  margin: '0 10',
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
      editor: {allowBlank: false}
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
        '->',
        {
          xtype: 'tbtext',
          text: 'Profili Aziendali',
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
          text: 'Cancella profilo Questionario',
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
});
