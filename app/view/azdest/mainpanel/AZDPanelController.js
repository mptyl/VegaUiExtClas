Ext.define('VegaUi.view.azdest.mainpanel.AZDPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.azdest-mainpanel-azdpanel',

  router:{
      'azdMain/:selection':{
        action:'onMenuSelection'
      }
  },

  onMenuSelection(selection){
  }

});
