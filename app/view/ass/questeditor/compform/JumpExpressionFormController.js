Ext.define('VegaUi.view.ass.questEditor.compform.JumpExpressionFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-questeditor-compform-jumpexpressionform',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  onSaveJumpExpression() {
    this.saveForm('qe-jumpexpression-form', 'qejumpexpression')
  }
});
