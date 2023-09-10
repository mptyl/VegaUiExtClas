Ext.define('VegaUi.view.ass.mail.MailFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-mail-mailform',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset(){
    this._resetForm()
  },

  onSave(){
      this._saveWithoutAttachment('mail');
  },

  onFormDirtyChange: function(basic, dirty, eOpts) {
    this._formDirtyChange(basic, dirty);
  }
});
