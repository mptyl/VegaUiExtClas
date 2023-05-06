Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioBoxGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questeditor-radioboxgridcontroller',

  onAddRadiobox(){
    const newRadioBox=Ext.create('VegaUi.model.questEditor.QeRadioBox');
    const form = this.getView().up().down('#radioBoxForm');
    this.setViewModel(newRadioBox)
    form.setValues(newRadioBox.data);
  },

  onDuplicate(){
    console.log('onDuplicate')

  },

  onReload(){
    console.log('onReload')

  },

  onRemove(){
    console.log('onRemove')
  },

  setViewModel(newRadioBox, siblingPosition){
    const fullReplyView=this.getView().up();
    const fullReplyForm=fullReplyView.down('#fullReplyForm');
    const viewModel=this.getViewModel();

    const questId=fullReplyForm.getFields('questId').getValue();
    const fatherNodeId=fullReplyForm.getFields('id').getValue();

    newRadioBox.set('questId',questId)
    newRadioBox.set('fatherNodeId',fatherNodeId);
    newRadioBox.set('siblingPosition',siblingPosition);

    viewModel.set('radioBoxRecord',newRadioBox);
  }
})

