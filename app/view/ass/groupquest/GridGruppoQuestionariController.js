Ext.define('VegaUi.view.ass.groupquest.GridGruppoQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-groupquest-gridgruppoquestionari',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onAdd() {
    this._addWithLogo('VegaUi.model.QuestionnaireGroup')
  },

  onSelectionChange() {
    this._selectionChange()
  },

  onRowDblClick: function (tableview, record, element, rowIndex, e, eOpts) {
    this._rowDblClick(tableview, record, element, rowIndex, e, eOpts)
    this._resetFormToNotDirty(record, 'form')
    this._setModelForModify();
  },

  onRemove() {
    this._removeSelection();
  },

  onReload() {
    this._reloadGrid();
  },





  //
  //
  // __setModelForAdd(entityPanel) {
  //   const viewModel = entityPanel.getViewModel();
  //   viewModel.set('gridHidden', true);
  //   viewModel.set('formHidden', false);
  //   viewModel.set('hiddenid', true)
  // },
  //
  //
  // __setModelForModify() {
  //   const entityPanel = this.getView().up();
  //   const viewModel = entityPanel.getViewModel();
  //   viewModel.set('gridHidden', true);
  //   viewModel.set('formHidden', false);
  //   viewModel.set('hiddenid', false)
  // }


});
