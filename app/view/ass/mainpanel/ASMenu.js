Ext.define('VegaUi.view.ass.mainpanel.ASMenu', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.ass-mainpanel-menu',

  requires: [
    'VegaUi.view.ass.mainpanel.ASMenuController',
    'VegaUi.view.ass.mainpanel.ASMenuModel'
  ],

  controller: 'ass-mainpanel-asmenu',
  viewModel: {
    type: 'ass-mainpanel-asmenu'
  },
  bodyPadding:10,
  collapsible: {
    direction: 'left',
    animation: true,
    useDrawer: false,
    collapseToolText: 'Menu Assessment e questionari',
    expandToolText: 'Menu Asssessment e Questionari'
  },
  defaults: {
    xtype: 'button',
    padding: '10 0',
    width: '100%',
    handler:'onButtonTap'
  },
  title:'Menu',
  items: [
    {
      text: 'Gruppi questionari',
      itemId:'assGroupquest'
    },
    {
      text: 'Questionari',
      itemId:'assQuestionari'
    },
    {
      text: 'Profili',
      itemId:'assProfili'
    },
    {
      text: 'Assessment',
      itemId:'assAssessment'
    },
    {
      text: 'Ass/Que/Dest',
      itemId:'assAssQueDest'
    },
    {
      text: 'Gestione Mail',
      itemId:'assMail'
    },
    {
      text: 'Interviste',
      itemId:'assInterviste'
    },
    {
      text: 'Allegati',
      itemId:'assAllegati'
    },
    {
      text: 'Report individuale',
      itemId:'assReportIndividuale'
    },
    {
      text: 'Report Star',
      itemId:'assReportStar'
    },
    {
      text: 'Tableau',
      itemId:'assTableau'
    },
    {
      text: 'Upload Profili',
      itemId:'assUploadProfili'
    }
  ]
});
