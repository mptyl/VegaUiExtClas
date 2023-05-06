Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioBoxFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questeditor-compform-radioboxform',

  onCancelWithoutSaving() {
    console.log('onCancelWithoutSaving')
  },

  onSaveRadioBox: function(prm) {
    const radioBoxGrid = this.getView().up().down('#radioBoxGrid')
    const radioBoxStore=radioBoxGrid.getStore();
    const record=this.getViewModel().get('radioBoxRecord')
    radioBoxStore.add(record);
    radioBoxStore.sync();
    radioBoxStore.proxy.extraParams = { questId : record.get('questId'), radioGroupId: record.get('fatherNodeId')};
    radioBoxStore.reload();
    //debugger;
  }

});
