Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioBoxGrid', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.qe-radioboxgrid',

  requires: [
    'VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioBoxGridController',
  ],

  controller: 'ass-questeditor-radioboxgridcontroller',
  layout: 'fit',
  items: [
    {
      xtype: 'container',
      items: [
        {
          xtype: 'container',
          layout:{
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'radioboxform'
            },
            {
              xtype: 'grid',
              //title: 'Lista di Radiobox',
              reference: 'radioBoxGrid',
              margin: '20 0 0 0',
              store: 'QeRadioBoxes',
              flex: 3,
              itemId: 'radioBoxGrid',
              columns: [
                {
                  xtype: 'gridcolumn',
                  text: 'Id',
                  dataIndex: 'id',
                  flex: 10,
                  hidden: false
                },
                {
                  xtype: 'gridcolumn',
                  text: 'Label',
                  dataIndex: 'boxLabel',
                  flex: 20
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
              dockedItems:[
                {
                  xtype: 'toolbar',
                  docked: 'top',
                  ui: 'footer',
                  padding: 5,
                  items: [
                    {
                      reference: 'addButton',
                      iconCls: 'x-fa fa-plus',
                      text: 'Aggiungi nuovo RadioBox',
                      align: 'left',
                      handler: 'onAddRadiobox',
                    },
                    {
                      reference: 'duplicateButton',
                      iconCls: 'x-fa fa-copy',
                      text: 'Duplica il Radiobox',
                      handler: 'onDuplicate',
                      align: 'left'
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
                      text: 'Cancella Radiobox',
                      handler: 'onRemove',
                      align: 'right',
                    }
                  ]
                },
              ],
              listeners: {
                rowdblclick: 'onRowDblClick',
                //show:'onShow',
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
