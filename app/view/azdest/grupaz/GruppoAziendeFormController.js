Ext.define('VegaUi.view.azdest.grupaz.GruppoAziendeFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-grupaz-gruppoaziendeform',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onSave() {
    const me=this;
    const form = this.getView().down('#mainForm').getForm();
    form.submit({
      success: function (form, action) {
        me.saveLogo(action.result.id);
        const grid=me.getView().up('azd-gruppoaziende-panel').down('azd-gruppoaziende-grid');
        //const vm = me.getView().up().getViewModel()
        //vm.get('record').set('id', action.result.id);
        grid.getStore('gruppoAziende').reload();
        grid.getSelectionModel().deselectAll();
        me._showGrid();
        Ext.Msg.alert('Success', 'Company Group con ID='+action.result.id+action.result.msg);
      },
      failure: function (form, action) {
        Ext.Msg.alert('Failed', action.result.msg);
      }
    });
  },

  onReset(){
    this._cancelForm()
    this._showGrid();
  },

  saveLogo(id) {
    const me=this;
    const form = me.getView().down('#logoForm').getForm();
    form.submit({
      params: {
        id: id
      }
    })
  }
});
