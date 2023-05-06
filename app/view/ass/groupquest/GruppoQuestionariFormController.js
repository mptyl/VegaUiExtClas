Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionariFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-groupquest-gruppoquestionariform',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset(){
    this.cancelFormTyl()
  },

  onSave(){
    this.submitFormTyl('questionnaire_group')
  }

});
