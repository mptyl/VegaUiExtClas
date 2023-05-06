Ext.define('VegaUi.view.ass.questeditor.TreeQuestEditor', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.tree-quest-editor',

  requires: [
    'VegaUi.view.ass.questeditor.TreeQuestEditorController',
  ],

  controller: 'ass-questionari-treequesteditor',

  reference: 'questEditorPanel',
  layout: 'fit',
  items: [{
    xtype: 'treepanel',
    reference: 'questionTree',
    bind: {
      store: '{treePanelStore}'
    },
    rootVisible: true,
    useArrows: true,
    singleExpand: true,
    selectOnExpander:true,
    columns: [
      {
        xtype: 'treecolumn',
        dataIndex: 'text',
        flex: 10,
        text: 'Albero delle domande'
      },
      {
        xtype: 'gridcolumn',
        dataIndex: 'nodeId',
        flex: 2
      }
    ],
    viewConfig:{
      listeners: {
        select: 'onSelectRow',
        itemcontextmenu: 'onTreePanelItemContextMenu',
        drop:'onDrop'
      },
      plugins:{
        ptype: 'treeviewdragdrop',
        dragText: 'Drag and Drop per riorganizzare l\'albero',
        containerScroll:true,
        enableDrag:true,
        enableDrop:true
      },
    }
  }]
});
