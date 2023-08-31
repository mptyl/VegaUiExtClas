Ext.define('VegaUi.view.ass.mail.MailFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-mail-mailform',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset(){
    this._cancelForm()
    this._showGrid();
    this.__deselectAll();
  },

  onSave(){
    this._newSubmitForm('mail',true)
    this._showGrid();

  },

  __deselectAll(){
    const grid=this.getView().up().down('grid');
    grid.getSelectionModel().deselectAll()
  },


  onFormDirtyChange: function(basic, dirty, eOpts) {
    var me=this;
    if(dirty)
    {
      me.getReferences().save.enable();
    }
    else{
      me.getReferences().save.disable();
    }
  }

});
