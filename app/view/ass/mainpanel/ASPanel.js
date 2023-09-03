Ext.define('VegaUi.view.ass.mainpanel.ASPanel', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-mainpanel-panel',

  requires: [
    'VegaUi.view.ass.mainpanel.ASPanelController',
    'VegaUi.view.ass.mainpanel.ASPanelModel'
  ],

  controller: 'ass-mainpanel-aspanel',
  viewModel: {
    type: 'ass-mainpanel-aspanel'
  },
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'ass-mainpanel-menu',
      width: 178
    },
    {
      xtype: 'panel',
      layout: 'card',
      itemId: 'assContentPanel',
      activeItem: 0,
      flex:1,
      items: [
        {
          xtype: 'ass-groupquest-grid',
          itemId: 'assGroupquestPanel',
        },
        {
          xtype: 'ass-questionari-panel',
          itemId: 'assQuestionariPanel',
        },
        {
          xtype: 'ass-questprofile-grid',
          itemId: 'assProfiliPanel',
        },
        {
          xtype: 'ass-assessment-panel',
          itemId: 'assAssessmentPanel',
        },
        {
          xtype: 'ass-assquedest-panel',
          itemId: 'assAssQueDestPanel',
        },
        {
          xtype: 'ass-mail-panel',
          itemId: 'assMailPanel',
        },
        {
          xtype: 'ass-interviste-panel',
          itemId: 'assIntervistePanel',
        },
        {
          xtype: 'ass-allegati-panel',
          itemId: 'assAllegatiPanel',
        },
        {
          xtype: 'ass-reportindividuale-panel',
          itemId: 'assReportIndividualePanel',
        },
        {
          xtype: 'ass-reportstar-panel',
          itemId: 'assReportStarPanel'
        },
        {
          xtype: 'ass-tableau-panel',
          itemId: 'assTableauPanel',
        },
        {
          xtype: 'ass-uploadprofili-panel',
          itemId: 'assUploadProfiliPanel'
        }
      ]
    }
  ]
});
