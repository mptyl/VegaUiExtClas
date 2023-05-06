Ext.define('VegaUi.view.azdest.mainpanel.AZDPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.azd-mainpanel-panel',

  requires: [
    'VegaUi.view.azdest.mainpanel.AZDPanelController',
    'VegaUi.view.azdest.mainpanel.AZDPanelModel'
  ],

  controller: 'azdest-mainpanel-azdpanel',
  viewModel: {
    type: 'azdest-mainpanel-azdpanel'
  },
  layout: 'hbox',
  items: [
    {
      xtype: 'azd-mainpanel-menu',
      width: 170

    }, {
      xtype: 'panel',
      layout: 'card',
      itemId: 'azdContentPanel',
      flex: 1,
      items: [
        {
          xtype: 'azd-gruppoaziende-panel',
          itemId: 'azdGruppoaziendePanel',
        },
        {
          xtype: 'azd-azienda-panel',
          itemId: 'azdAziendePanel',
        },
        {
          xtype: 'azd-ruoloaziendale-panel',
          itemId: 'azdRuoliAziendaliPanel',
        },
        {
          xtype: 'azd-ruoloxazienda-panel',
          itemId: 'azdRuolixAziendaPanel',
        },
        {
          xtype: 'azd-listadestinatari-panel',
          itemId: 'azdListaDestinataritPanel',
        },
        {
          xtype: 'azd-destinatari-panel',
          itemId: 'azdDestinatariPanel',
        },
        {
          xtype: 'azd-destinatarixlista-panel',
          itemId: 'azdDestPerListaPanel',
        },
        {
          xtype: 'azd-uploaddestinatari-panel',
          itemId: 'azdUploadDestinatariPanel',
        },
        {
          xtype: 'azd-riassegnaresponsabile-panel',
          itemId: 'azdRiassegnaRespPanel',
        }
      ]
    }
  ]
});
