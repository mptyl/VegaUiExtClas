Ext.define('VegaUi.view.ass.questeditor.compform.QuestionFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questeditor-compform-questionform',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  onSaveQuestion() {
    this.saveForm('qe-question-form', 'qequestion')
  }


});
