Ext.define('VegaUi.view.ass.profili.FormProfiliController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-profili-formprofili',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReset(){
    this._cancelForm()
    this._showGrid();
    this.__deselectAll();
  },

  onSave(){
    this._submitForm('questionnaire_profile',true)
    this._showGrid();

  },

  __deselectAll(){
    const grid=this.getView().up().down('grid');
    grid.getSelectionModel().deselectAll()
  }

});
