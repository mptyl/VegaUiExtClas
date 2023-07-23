Ext.define('VegaUi.view.ass.questionari.FormQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-formquestionari',

  mixins: [
    'VegaUi.mixin.TylCrudMixin'
  ],


  onReset(){
    this._cancelForm()
    this.__hideQuestEditor();
    this._showGrid();
    this.__deselectAll();

  },

  __deselectAll(){
    const grid=this.getView().up().down('grid');
    grid.getSelectionModel().deselectAll()
  },

  __hideQuestEditor(){
    const vm=this.getView().up().getViewModel();
    vm.set('questEditorHidden',true);
  },


  onSave() {
    const me=this;

    me._submitForm('questionnaire',true);
    const questModel=me.getView().up().getViewModel();
    me.getView().up().down('grid').getStore().load()
    me.getView().hide()
    me._showGrid(questModel);

  },


});
