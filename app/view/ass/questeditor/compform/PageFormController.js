Ext.define('VegaUi.view.ass.questeditor.compform.PageFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-questeditor-compform-pageform',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  onSaveGroup: function (button, e, eOpts) {
    this.saveForm('qe-page-form', 'qepage')
  }

});
