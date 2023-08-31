Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.azd-gruppoaziende-form',

  requires: [
    'VegaUi.view.azdest.grupaz.GruppoAziendeFormController',
  ],
  controller: 'azdest-grupaz-gruppoaziendeform',
  margin: '0 10',

  items: [
    {
      xtype: 'form',
      reference: 'gruppoaziendeEntityForm',
      itemId:'mainForm',
      margin: '10 0',
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      api: {
        submit: 'companyGroupDirectController.saveForm'
      },
      defaults: {
        labelAlign: 'right',
        labelWidth: 120,
      },
      items: [
        {
          xtype: 'fieldcontainer',
          flex: 1,
          layout: 'anchor',
          items: [
            {
              xtype: 'numberfield',
              bind: '{record.id}',
              name: 'id',
              hidden: true,
            },
            {
              xtype: 'numberfield',
              bind: '{record.version}',
              name: 'version',
              hidden: true,
            },
            {
              xtype: 'textfield',
              fieldLabel: 'Nome',
              bind: '{record.name}',
              name: 'name',
              allowBlank: false,
              anchor: '100%'
            },
            {
              xtype: 'textfield',
              fieldLabel: 'Descrizione',
              bind: '{record.description}',
              name: 'description',
              allowBlank: true,
              anchor: '100%'
            },


            {
              xtype: 'htmleditor',
              name: 'privacyText',
              bind: '{record.privacyText}',
              fieldLabel: 'Testo Privacy',
              height: 600,
              allowBlank: true,
              anchor: '100%'
            },
          ]
        },
        {
          xtype: 'fieldcontainer',
          layout: 'anchor',
          margin: '0 10 0 10',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Src immagine',
              bind: '{record.groupLogo}',
              name: 'groupLogo',
              allowBlank: true,
              anchor: '100%',
              hidden:true,
              listeners: {
                change: function (field, newValue) {
                  const imagePreview = this.up('form').down('image[reference=imagePreview]')
                  imagePreview.setSrc(newValue);
                  imagePreview.setVisible(!!newValue);
                }
              }
            },
            {
              xtype: 'image',
              reference: 'imagePreview',
              width: 200,
              hidden:true,
              title: 'Logo Gruppo',
            },

          ]
        },
      ]
    },
    {
      xtype: 'form',
      itemId:'logoForm',
      api: {
        submit: 'companyGroupDirectController.saveLogo'
      },
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [
        {
          xtype: 'filefield',
          flex: 1,
          anchor: '100%',
          fieldLabel: 'Logo gruppo',
          msgTarget: 'side',
          name: 'groupLogoFile',
          buttonText: 'Seleziona immagine logo gruppo',
        },
        {
          html: ' ',
          margin: '0 10 0 10',
          width: 200
        }
      ]
    }
  ],
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'top',
      ui: 'footer',
      items: [
        {
          xtype: 'button',
          reference: 'backToList',
          iconCls: 'x-fa fa-plus',
          text: 'Torna alla lista',
          handler: 'onReset',
        },
         '->',
        {
          xtype: 'tbtext',
          text: 'Gruppo Aziendale',
          style: {
            fontWeight: 'bold'
          }
        },
        '->',
        {
          xtype: 'button',
          reference: 'save',
          iconCls: 'x-fa fa-copy',
          text: 'Salva il Gruppo Aziende',
          handler: 'onSave',
          align: 'right',
        },

      ]
    }
  ]
});
