Ext.define('VegaUi.view.ass.mail.MailModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ass-mail-mail',
  data: {
    name: 'VegaUi',
    formHidden: true,
    gridHidden: false,
    hiddenId:false,
    removeButtonDisabled:true
  },
  stores: {
    mails: {
      type: 'mails'
    },
  }

});
