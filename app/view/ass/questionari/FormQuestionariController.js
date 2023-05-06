Ext.define('VegaUi.view.ass.questionari.FormQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-formquestionari',

  mixins: [
    'VegaUi.mixin.TylCrudMixin'
  ],

  onReset() {
    this.cancelFormTyl()
  },

  onSave() {
    this.submitFormTyl('questionnaire');
  },

});
