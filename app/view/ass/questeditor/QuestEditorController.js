Ext.define('VegaUi.view.ass.questeditor.QuestEditorController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-questeditor',

  onReset() {
    const me = this;
    this.getView().up().getViewModel().set('hiddenGridButtons', false)

    const grid=me.getView().up().down('grid');
    grid.getStore().load()

    me.getView().down('form-quest-editor').hide();
    me.getView().hide();
    me.getView().up().down('quest-grid').show()
  }

});
