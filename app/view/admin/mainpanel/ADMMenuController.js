Ext.define('VegaUi.view.admin.mainpanel.ADMMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-mainpanel-admmenu',

  onButtonTap(button) {
    this.redirectTo('adm/'+button.getItemId())
  },

});
