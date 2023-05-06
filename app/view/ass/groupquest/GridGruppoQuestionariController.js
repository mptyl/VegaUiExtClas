Ext.define('VegaUi.view.ass.groupquest.GridGruppoQuestionariController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-groupquest-gridgruppoquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],


  onAdd(){
    let record=Ext.create('VegaUi.model.QuestionnaireGroup');
    this.loadFormWithNewRecordTyl(record);
  },

  onReload(){
    this.reloadGridTyl()
  },

  onRemove(){
    this.removeTyl();
  },

  onModify(grid){
      this.loadFormTyl(grid);
    },



});
