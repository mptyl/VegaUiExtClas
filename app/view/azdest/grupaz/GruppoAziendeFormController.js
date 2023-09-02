Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-grupaz-gruppoaziendeform',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset() {
    this._showGrid();
  },

  onSave() {
    this._saveWithLogo('#mainForm','companyGroup/uploadLogo?')
  },

  onRemoveLogo() {
    const me=this;
    Ext.Msg.confirm(
      'Conferma cancellazione', 'Confermi la cancellazione del logo?', function (btn) {
        if (btn === 'yes') {
          me._removeLogo(companyGroupDirectController)
        }
      }
    );
  },

  onFormDirtyChange(basic, dirty, eOpts) {
    this._formDirtyChange(basic, dirty);
  }

});
