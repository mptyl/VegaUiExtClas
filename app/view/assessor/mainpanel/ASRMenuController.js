Ext.define('VegaUi.view.assessor.mainpanel.ASRMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.assessor-mainpanel-asrmenu',

  onButtonTap(button) {
    this.redirectTo('asr/'+button.getItemId())
  },

});
