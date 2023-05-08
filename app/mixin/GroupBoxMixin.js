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


  onReload(){
    console.log('onReload')

  },

  onRemove(button){
    const grid=button.up('grid')
    const table=grid.getSelectionModel();
    const selected=table.getSelection()[0];
    const store=grid.getStore();
    store.remove(selected);
  },


  onRowDblClick(view, record, element, rowIndex, e, eOpts ){
    this._setViewModel(record)
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
    const radioBoxStore = this._getRadioBoxStore();
    const record = this.getViewModel().get('checkBoxModel')
    radioBoxStore.add(record);
  },

  _syncCheckBox() {
    const radioBoxStore = this._getRadioBoxStore();
    radioBoxStore.sync();
  },

  _reloadGridStore() {
    const radioBoxStore = this._getRadioBoxStore();
    radioBoxStore.proxy.extraParams = {questId: record.get('questId'), radioGroupId: record.get('fatherNodeId')};
    radioBoxStore.reload();
  },

  _closeForm() {
    const viewModel = this.getViewModel();
    viewModel.set('checkBoxFormHidden', true);
  },

  _resetForm() {
    this.getView().getForm().reset();
  },

  _getRadioBoxStore() {
    const radioBoxGrid = this.getView().up().down('grid')
    const radioBoxStore = radioBoxGrid.getStore();
    return radioBoxStore;
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

  //endregion

  afterDestroy() {
    console.log('destroy QeMixin')
  }
})
