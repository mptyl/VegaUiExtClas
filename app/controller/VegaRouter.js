Ext.define('VegaUi.controller.VegaRouter', {
    extend: 'Ext.app.Controller',

  mixins: [
    'Ext.route.Mixin'
  ],

  refs: {
    contentPanel: '#contentPanel',
    assContentPanel:'#assContentPanel',
    azdContentPanel:'#azdContentPanel',
    azdRuoliAziendaliPanel:'#azdRuoliAziendaliPanel',
    avContentPanel:'#avContentPanel',
    asrContentPanel:'#asrContentPanel',
    admContentPanel:'#admContentPanel',
    menu: '#menu'
  },

  routes: {
    ':xtype': {
      action: 'activateMainRoute'
    },
    'ass/:xtype': {
      action: 'activateAssessmentRoute'
    },
    'azd/:xtype': {
      action: 'activateAzddestRoute'
    },
    'av/:xtype': {
      action: 'activateAutovalRoute'
    },
    'asr/:xtype': {
      action: 'activateAssessorRoute'
    },
    'adm/:xtype': {
      action: 'activateAdminRoute'
    },
  },

  activateMainRoute(xtype){
      this.getContentPanel().layout.setActiveItem(xtype+'Panel');
  },

  activateAssessmentRoute(xtype){
    this.getContentPanel().layout.setActiveItem('assMainPanel');
    this.getAssContentPanel().layout.setActiveItem(xtype+'Panel');
  },

  activateAzddestRoute(xtype){
    this.getContentPanel().layout.setActiveItem('azdMainPanel');
    this.getAzdContentPanel().layout.setActiveItem(xtype+'Panel');
    switch (xtype) {
      case 'azdRuoliAziendaliGrid': {
        Ext.getStore('CompanyRoles').reload();
        break;
      }
      case 'azdGruppoaziende':{
        Ext.getStore('CompanyGroups').reload();
        break;
      }
      case 'azdAziende':{
        Ext.getStore('CompanyGroups').reload();
        Ext.getStore('Companies').reload();
        break;
      }
    }
  },

  activateAutovalRoute(xtype){
    this.getContentPanel().layout.setActiveItem('avMainPanel');
    this.getAvContentPanel().layout.setActiveItem(xtype+'Panel');
  },

  activateAssessorRoute(xtype){
    this.getContentPanel().layout.setActiveItem('asrMainPanel');
    this.getAsrContentPanel().layout.setActiveItem(xtype+'Panel');
  },

  activateAdminRoute(xtype){
    this.getContentPanel().setActiveItem('admMainPanel');
    this.getAdmContentPanel().setActiveItem(xtype+'Panel');
  }

});
