Ext.define('VegaUi.view.ass.groupquest.GridGruppoQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-groupquest-gridgruppoquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._addInGrid('VegaUi.model.QuestionnaireGroup');
  },

  onSelectionChange() {
    this._selectionChange()
  },

  onReload: function () {
    this.getView().getStore().reload();
  },

  onRemove() {
    this._removeSelection('Gruppo Questionario');
  },

  onEdit(editor, context){
    this._editInGrid(editor, context);
  },

  onCancelEdit(rowEditing, context) {
    this._cancelEditInGrid(rowEditing, context);
  }


});
