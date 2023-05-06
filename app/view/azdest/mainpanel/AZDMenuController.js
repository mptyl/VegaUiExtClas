Ext.define('VegaUi.view.azdest.mainpanel.AZDMenuController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-mainpanel-azdmenu',

  onButtonTap(button) {
    this.redirectTo('azd/' + button.getItemId())
  }

});
