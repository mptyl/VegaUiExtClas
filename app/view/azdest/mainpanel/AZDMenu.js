
Ext.define('VegaUi.view.azdest.mainpanel.AZDMenu',{
    extend: 'Ext.panel.Panel',
    xtype:'azd-mainpanel-menu',

    requires: [
        'VegaUi.view.azdest.mainpanel.AZDMenuController',
        'VegaUi.view.azdest.mainpanel.AZDMenuModel'
    ],

    controller: 'azdest-mainpanel-azdmenu',
    viewModel: {
        type: 'azdest-mainpanel-azdmenu'
    },
  defaults: {
    xtype: 'button',
    padding: 10,
    margin: 1,
    width: '100%',
    handler:'onButtonTap'
  },
  items: [
    {
      text: 'Gruppi aziende',
      itemId:'azdGruppoaziende'
    },
    {
      text: 'Aziende',
      itemId:'azdAziende'
    },
    {
      text: 'Ruoli aziendali',
      itemId:'azdRuoliAziendaliGrid'
    },
    {
      text: 'Ruoli x Azienda',
      itemId:'azdRuolixAzienda'
    },
    {
      text: 'Liste deestinatari',
      itemId:'azdListaDestinatarit'
    },
    {
      text: 'Destinatari',
      itemId:'azdDestinatari'
    },
    {
      text: 'Destinatari x lista',
      itemId:'azdDestPerLista'
    },
    {
      text: 'Upload destinatari',
      itemId:'azdUploadDestinatari'
    },
    {
      text: 'Riassegna responsabile',
      itemId:'azdRiassegnaResp'
    }
  ]
});
