/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 4.3.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('VegaUi.view.MainView', {
  extend: 'Ext.container.Viewport',
  alias: 'widget.mainview',

  requires: [
    'VegaUi.view.MainViewViewModel',
    'Ext.tab.Panel',
    'Ext.tab.Tab',
    'Ext.tab.Bar'
  ],
  controller: 'mainview',
  viewModel: {
    type: 'mainview'
  },
  layout: 'border',
  items: [
    {
      region: 'north',
      xtype: 'panel',
      height: 50,
      minHeight: 50,
      header: {
        titlePosition: 0,
        bind: {
          title: '{name}'
        },
        items: [{
          xtype: 'button',
          text: 'Logout',
          handler: 'onLogout',
          cls: 'logoutButton'
        }]
      }
    },
    {
      xtype: 'panel',
      region: 'center',
      layout: 'fit',
      ariaLabelledBy:'Contenuto principale',
      items: [
        {
          xtype: 'panel',
          layout: 'card',
          itemId: 'contentPanel',
          reference: 'contentPanel',
          margin: 10,
          items: [
            {
              xtype: 'home-home-panel',
              itemId: 'homeHomePanel',
            },
            {
              xtype: 'ass-mainpanel-panel',
              itemId: 'assMainPanel',
            },
            {
              xtype: 'azd-mainpanel-panel',
              itemId: 'azdMainPanel',
            },
            // {
            //   xtype: 'av-mainpanel-panel',
            //   itemId: 'avMainPanel',
            // },
            // {
            //   xtype: 'asr-mainpanel-panel',
            //   itemId: 'asrMainPanel',
            // },
            // {
            //   xtype: 'adm-mainpanel-panel',
            //   itemId: 'admMainPanel',
            // }
          ]
        },
      ]
    },
    {
      xtype: 'tabbar',
      region: 'south',
      layout: {
        pack: 'center'
      },
      defaults: {
        padding: '5 5 10 5',
        handler: 'onButtonTap'

      },
      height: 40,
      activeItem: 0,
      items: [
        {
          text: 'Home',
          iconCls: 'x-fa fa-home',
          itemId: 'homeHome',
          closable: false
        },
        {
          text: 'Assessment',
          iconCls: 'x-fa fa-clipboard',
          itemId: 'assMain',
          closable: false
        },
        {
          text: 'Aziende e destinatari',
          iconCls: 'x-fa fa-address-book',
          itemId: 'azdMain',
          closable: false
        },
        {
          text: 'Autovalutazioni',
          iconCls: 'x-fa fa-award',
          itemId: 'avMain',
          closable: false
        }, {
          text: 'Assessors',
          iconCls: 'x-fa fa-marker',
          itemId: 'asrMain',
          closable: false
        },
        {
          text: 'Utenti e ruoli',
          iconCls: 'x-fa fa-users',
          itemId: 'admMain',
          closable: false
        }
      ]
    }
  ]
});
