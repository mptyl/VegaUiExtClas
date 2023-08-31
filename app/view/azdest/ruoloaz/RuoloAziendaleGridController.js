Ext.define('VegaUi.view.azdest.ruoloaz.RuoloAziendaleGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.azdest-ruoloaz-ruoloaziendalegrid',

  mixins: [
    VegaUi.mixin.TylCrudMixin
  ],

  onReload: function () {
    this.getView().getStore().reload();
  },

  onAddClick() {
    const store = this.getView().getStore();
    const rec = Ext.create('VegaUi.model.CompanyRole');
    rec.set('id', null);
    rec.set('version', null);
    const rowEditing = this.getView().findPlugin('rowediting');
    store.insert(0, rec);
    rowEditing.startEdit(rec, 0);
  },

  onRemoveClick() {
    this._removeSelection('Ruolo Aziendale');
  },

  onEdit(editor, context){
    //context.record.commit()
    const store= this.getView().getStore();
    store.sync();
    store.reload();
    this.getView().getSelectionModel().deselectAll();
  },

  onCancelEdit(rowEditing, context) {
    if (context.record.phantom) {
      this.getView().store.remove(context.record);
      this.getView().getSelectionModel().deselectAll();
    }
  },

  onSelectionChange(){
    if(this.getView().getSelectionModel().getSelection().length > 0)
      this.getViewModel().set('removeButtonDisabled', false);
    else
      this.getViewModel().set('removeButtonDisabled', true);
  }

});
