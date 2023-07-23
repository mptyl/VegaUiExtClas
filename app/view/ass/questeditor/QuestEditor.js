Ext.define('VegaUi.view.ass.questeditor.QuestEditor', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.quest-editor',

  requires: [
    'VegaUi.view.ass.questeditor.QuestEditorController',
    'VegaUi.view.ass.questeditor.QuestEditorModel'
  ],
  reference: 'questEditorRoot',
  controller: 'ass-questionari-questeditor',
  viewModel: {
    type: 'ass-questionari-questeditor'
  },
  layout: 'fit',
  items: [
    {
      xtype: 'panel',
      layout:{
        type: 'hbox',
        align: 'stretch'
      },
      margin: '0 10 0 10',
      items: [
        {
          xtype: 'tree-quest-editor',
          flex: 1
        },
        {
          xtype: 'form-quest-editor',
          flex: 2,
          hidden: true
        }
      ],
      dockedItems: {
        xtype: 'toolbar',
        ui: 'footer',
        dock: 'top',
        defaults: {
          xtype: 'button',
          padding: 10,
        },
        items: [
          {
            iconCls: 'x-fa fa-plus',
            text: 'Torna alla lista',
            handler: 'onReset',
          },
          {
            xtype: 'tbtext',
            bind: {
              text: '{questionnaireTitle}'
            },
            style: {
              fontWeight: 'bold'
            }
          },
          '->'
        ]
      }
    },

  ]
});
