Ext.define('VegaUi.view.ass.questeditor.compform.GroupFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.groupform-controller',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  onSaveGroup: function (button, e, eOpts) {
    this.saveForm('qe-group-form', 'qegroup')
  }
});
