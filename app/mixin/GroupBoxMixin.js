Ext.define('VegaUi.mixin.GroupBoxMixin', {
  extend: 'Ext.Mixin',

  mixinId: 'qeGroupBoxMixinId',
  mixinConfig: {
    after: {
      destroy: 'afterDestroy'
    }
  },



  onAddCheckbox(){
    const newCheckBox=Ext.create('VegaUi.model.questEditor.QeCheckBox');
    //const form = this.getView().up().down('#checkBoxForm');
    this._setViewModel(newCheckBox);
    //form.loadRecord(newCheckBox);
  },


  onReload(button){
    const grid=button.up('grid')
    const store=grid.getStore();
    const viewModel=this.getViewModel()
    const questId=viewModel.get('questId');
    const replyRecord=viewModel.get('replyRecord')
    store.proxy.extraParams = {questId: questId, checkGroupId: replyRecord.get('id')};
    store.load()
  },

  onRemove(button){
    const grid=button.up('grid')
    const table=grid.getSelectionModel();
    const selected=table.getSelection()[0];
    const store=grid.getStore();
    store.remove(selected);
    this._renumberStore(store)
  },


  onRowDblClick(view, record, element, rowIndex, e, eOpts ){
    this._setViewModel(record)
  },

  onRowDrop(){
    const gridContainer=this.getView();
    const grid=gridContainer.down('grid')
    const store=grid.getStore();
    this._renumberStore(store)
  },

  onCancelWithoutSaving() {
    this._closeForm();
  },

  onSaveAndContinue() {
    this._saveCheckBox();
    const newCheckBox = Ext.create('VegaUi.model.questEditor.QeCheckBox');
    this._setViewModel(newCheckBox);
  },

  onSaveBox: function (prm) {
    this._saveCheckBox();
    this._closeForm();
  },

  //region Priivate Functions
  _saveCheckBox() {
    const checkBoxStore = this._getCheckBoxStore();
    const record = this.getViewModel().get('checkBoxModel')
    checkBoxStore.add(record);
    this._renumberStore(checkBoxStore)
  },

  _syncCheckBox() {
    const checkBoxStore = this._getCheckBoxStore();
    checkBoxStore.sync();
  },

  _reloadGridStore() {
    const checkBoxStore = this._getCheckBoxStore();
    checkBoxStore.proxy.extraParams = {questId: record.get('questId'), radioGroupId: record.get('fatherNodeId')};
    checkBoxStore.reload();
  },

  _closeForm() {
    const viewModel = this.getViewModel();
    viewModel.set('checkBoxFormHidden', true);
  },

  _resetForm() {
    this.getView().getForm().reset();
  },

  _getCheckBoxStore() {
    const checkBoxGrid = this.getView().up().down('grid')
    const checkBoxStore = checkBoxGrid.getStore();
    return checkBoxStore;
  },

  _setViewModel(newCheckBox) {
    const fullReplyForm = this.getView().up('qe-fullreply-form');
    const form = fullReplyForm.down('form').getForm();
    const viewModel = this.getViewModel();


    const questId = form.findField('questId').getValue();
    const fatherNodeId = form.findField('id').getValue();

    newCheckBox.set('questId', questId)
    newCheckBox.set('fatherNodeId', fatherNodeId);

    viewModel.set('checkBoxModel', newCheckBox);
    viewModel.set('checkBoxFormHidden', false);
  },

  _renumberStore(store){
    store.each(function(record){
      record.set('indexInStore',store.indexOf(record)+1)
    })
  },

  //endregion

  afterDestroy() {
    console.log('destroy QeMixin')
  }
})
