Ext.define('VegaUi.view.ass.questEditor.compform.JumpExpressionFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questeditor-compform-jumpexpressionform',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  onSaveJumpExpression() {
    this.saveForm('qe-jumpexpression-form', 'qejumpexpression')
  },

  addToExpression(combo, value) {
    const vm = this.getViewModel();
    let expression = vm.get('jeRecord.expression')
    vm.set('jeRecord.expression', expression + value + ' ');
    combo.suspendEvents();
    combo.reset();
    combo.resumeEvents();
  },

  onExpressionChange(field, newValue, oldValue, eOpt) {
    const color = this.checkPredicateValidity(newValue) ? '#a2f5a2' : '#ffbaba';
    field.setFieldStyle('background-color: ' + color + ';');
  },


  checkPredicateValidity(predicate) {
    const expression = predicate.replaceAll('.','');
    try{
      jsep(expression);
      return true;
    } catch (e){
      return false
    }
  },


  loadComboStore(form) {
    console.log('Store loaded')
    const me = this;
    const combo = form.down('#comboQuestions'); // You may need to adjust this to get your specific combo
    const store = combo.getStore();
    const vm = me.getViewModel();
    const questId = vm.get('questId');
    store.proxy.extraParams = {questId: questId};
    store.load();

    const combor = form.down('#comboReplies'); // You may need to adjust this to get your specific combo
    const storer = combor.getStore();
    storer.proxy.extraParams = {questId: questId};
    storer.load();
  },

  onResetExpression() {
    const vm = this.getViewModel();
    vm.set('jeRecord.expression', '');
  }

});
