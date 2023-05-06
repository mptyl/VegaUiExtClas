Ext.define('VegaUi.view.ass.profili.FormProfiliController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-profili-formprofili',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset(){
      this.cancelFormTyl()
  },

  onSave(){
    this.submitFormTyl('questionnaire_profile')
  }

});
