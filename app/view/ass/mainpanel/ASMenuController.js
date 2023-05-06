Ext.define('VegaUi.view.ass.mainpanel.ASMenuController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-mainpanel-asmenu',

  onButtonTap(button) {
    this.redirectTo('ass/'+button.getItemId())
  },

});
