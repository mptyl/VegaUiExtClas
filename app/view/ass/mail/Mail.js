Ext.define('VegaUi.view.ass.mail.Mail', {
  extend: 'Ext.panel.Panel',
  xtype: 'ass-mail-panel',

  requires: [
    'VegaUi.view.ass.mail.MailController',
    'VegaUi.view.ass.mail.MailModel'
  ],

  controller: 'ass-mail-mail',
  viewModel: {
    type: 'ass-mail-mail'
  },
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  items:[
    {
      xtype:'ass-mailForm',
      flex:1,
      bind:{
        hidden:'{formHidden}'
      }
    },
    {
      xtype:'ass-mailGrid',
      flex:1,
      bind:{
        hidden:'{gridHidden}'
      }
    }
  ]
});
