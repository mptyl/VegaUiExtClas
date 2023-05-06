Ext.define('VegaUi.view.autoval.mainpanel.AVMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.autoval-mainpanel-avmenu',

  onButtonTap(button) {
    this.redirectTo('av/'+button.getItemId())
  },

});
