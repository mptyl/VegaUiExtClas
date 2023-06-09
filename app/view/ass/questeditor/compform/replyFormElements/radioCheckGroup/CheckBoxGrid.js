Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.CheckBoxGrid', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-checkboxgrid',

  requires: [
    'VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.CheckBoxGridController',
    'Ext.grid.plugin.DragDrop',
    'Ext.selection.Model'
  ],

  controller: 'ass-questeditor-checkboxgridcontroller',
  layout: 'fit',
  items: [
    {
      xtype: 'container',
      items: [
        {
          xtype: 'container',
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'checkboxform',
            },
            {
              xtype: 'grid',
              //title: 'Lista di Radiobox',
              reference: 'checkBoxGrid',
              margin: '20 0 0 0',
              store: 'QeCheckBoxes',
              flex: 3,
              itemId: 'checkBoxGrid',
              columns: [
                {
                  xtype: 'gridcolumn',
                  text: 'Id',
                  dataIndex: 'id',
                  flex: 10,
                  hidden: true
                },
                {
                  xtype: 'numbercolumn',
                  text: ' ',
                  dataIndex: 'indexInStore',
                  flex: 1,
                  format:'#'
                },
                {
                  xtype: 'gridcolumn',
                  text: 'Label',
                  dataIndex: 'boxLabel',
                  flex: 10
                },
                {
                  xtype: 'gridcolumn',
                  dataIndex: 'boxValue',
                  text: 'Value',
                  flex: 3
                },
                {
                  xtype: 'checkcolumn',
                  dataIndex: 'boxChecked',
                  text: 'Checked',
                  flex: 1
                }
              ],
              dockedItems: [
                {
                  xtype: 'toolbar',
                  docked: 'top',
                  ui: 'footer',
                  padding: 5,
                  items: [
                    {
                      reference: 'addButton',
                      iconCls: 'x-fa fa-plus',
                      text: 'Aggiungi nuovo Box',
                      align: 'left',
                      handler: 'onAddCheckbox',
                    },
                    '->',
                    {
                      reference: 'reloadButton',
                      iconCls: 'x-fa fa-arrow-up',
                      text: 'Reload',
                      handler: 'onReload',
                      align: 'right',

                    },
                    {
                      reference: 'removeButton',
                      iconCls: 'x-fa fa-trash',
                      text: 'Cancella Box',
                      handler: 'onRemove',
                      align: 'right',
                    }
                  ]
                },
              ],
              viewConfig: {
                plugins: {
                  gridviewdragdrop: {
                    dragText: 'Drag and drop to reorganize'
                  }
                }
              },
              listeners: {
                rowdblclick: 'onRowDblClick',
                drop:'onRowDrop',
              },
              selModel: {
                selType: 'checkboxmodel',
                mode: 'MULTI'
              }
            }
          ]
        },
      ]
    },

  ]
})
