Ext.define('VegaUi.view.ass.questeditor.QuestEditorController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-questeditor',

  onReset() {
    const me = this;
    const vm=me.getView().up().getViewModel()

    const grid=me.getView().up().down('grid');
    grid.getStore().load()
    grid.getSelectionModel().deselectAll();

    vm.set('gridHidden',false);
    vm.set('formHidden',true);
    vm.set('questEditorHidden',true);

  }

});
