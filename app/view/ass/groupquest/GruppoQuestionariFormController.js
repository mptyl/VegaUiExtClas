Ext.define('VegaUi.view.ass.groupquest.GruppoQuestionariFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-groupquest-gruppoquestionariform',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset(){
    this._cancelForm();
    this._showGrid();
    this.__deselectAll();
  },

  __deselectAll(){
    const grid=this.getView().up().down('grid');
    grid.getSelectionModel().deselectAll()
  },

  onSave(){
    this._submitForm('questionnaire_group',true)
    this._showGrid();
  },



});
