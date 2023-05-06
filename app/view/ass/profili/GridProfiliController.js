Ext.define('VegaUi.view.ass.profili.GridProfiliController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ass-profili-gridprofili',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd(){
    const record=Ext.create('VegaUi.model.QuestionnaireProfile');
    this.loadFormWithNewRecordTyl(record)
  },

  onReload(){
    this.reloadGridTyl()
  },

  onRemove(){
    this.removeTyl("Questionnaire Profile");
  },

  onModify(grid){
    this.loadFormTyl(grid)
  },


});
