Ext.define('VegaUi.view.ass.questeditor.TreeQuestEditorController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-treequesteditor',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  config: {
    groupForm: 0,
    questionForm: 1,
    jeForm: 2,
    replyForm: 3,
    radioGroupForm: 3,
    checkGroupForm: 3
  },

  onSelectRow(dataView, record, eOpts) {
    const me = this;
    let questEditorViewModel = this.getViewModel();
    const questId = questEditorViewModel.get('questId');
    if (record) {
      if (record.get('root'))
        me.closeForm()
      else {
        me.setViewModelParameters(record, questEditorViewModel);
        const formToUseContainer = me.getFormToUse(record);
        const form = formToUseContainer.down('form');
        switch (record.get('cls')) {
          case 'QeFullReply':
            me.loadReply(record, form, questId, questEditorViewModel)
            break;
          case 'QeQuestion':
            me.loadQuestion(record, form, questId, questEditorViewModel)
            break;
          case 'QeJumpExpression':
            me.loadJumpExpression(record, form, questId, questEditorViewModel)
            break;
          case 'QeGroup':
            me.loadGroup(record, form, questId, questEditorViewModel)
            break;
        }
        me.getFormContainer().show()
        const active=me.getFormContainer().layout.getActiveItem();
        const treeLabelField=active.down('#treeLabel');
        if(treeLabelField){
          treeLabelField.focus(true, 100)
        }
      }
    }
  },

  onDeleteNode: function (record, index) {
    const me = this;
    Ext.Msg.confirm(
      'Conferma cancellazione',
      'Confermi cancellazione?', function (btn) {
        if (btn === 'yes') {
          me.removeItemNode(record, index);
        }
      })
  },

  //////////////////////////////////////////////////////////////////////

  getFormContainer() {
    const view = this.getView();
    const viewUp = view.up();
    const viewUpDown = viewUp.down('form-quest-editor')
    return viewUpDown;
  },

  getQuestId() {
    const viewModel = this.getViewModel();
    return viewModel.get('questId');
  },

  getFormToUse(selectedRecord) {
    const me = this;
    const formContainer = me.getFormContainer();
    switch (selectedRecord.get('cls')) {
      case 'QeGroup': {
        const formIndex = me.getGroupForm()
        formContainer.setActiveItem(formIndex);
        return formContainer;
      }
      case 'QeQuestion': {
        const formIndex = me.getQuestionForm()
        formContainer.setActiveItem(formIndex);
        return formContainer;
      }
      case 'QeJumpExpression': {
        const formIndex = me.getJeForm()
        formContainer.setActiveItem(formIndex);
        return formContainer;
      }
      case 'QeFullReply': {
        const formIndex = me.getReplyForm()
        formContainer.setActiveItem(formIndex);
        return formContainer;
      }
    }
  },

  loadReply(record, form, questId, viewModel) {
    const me=this;
    const reply = Ext.create('VegaUi.model.questEditor.QeFullReply');
    reply.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    reply.load(
      {
        success: function () {
          viewModel.set('replyRecord', reply);
          viewModel.set('nodeToExpand',record.parentNode.parentNode.id+'/'+record.parentNode.id)
          if(reply.get('replyType')=='RADIOGROUP' || reply.get('replyType')=='CHECKGROUP'){
            const store=Ext.getStore('QeCheckBoxes');
            const questId=viewModel.get('questId');
            store.proxy.extraParams = {questId: questId, checkGroupId: reply.get('id')};
            store.load()
          }
        },
        failure: function () {
        },
        callback: function () {
        }
      }
    )
  },

  loadQuestion(record, form, questId, viewModel) {
    const me=this;
    const question = Ext.create('VegaUi.model.questEditor.QeQuestion');
    question.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    question.load(
      {
        success: function () {
          viewModel.set('questionRecord', question);
          viewModel.set('nodeToExpand',record.parentNode.id)
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  loadJumpExpression(record, form, questId, viewModel) {
    const me=this;
    const jumpExpression = Ext.create('VegaUi.model.questEditor.QeJumpExpression');
    jumpExpression.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    jumpExpression.load(
      {
        success: function () {
          viewModel.set('jeRecord', jumpExpression);
          viewModel.set('nodeToExpand',record.parentNode.parentNode.id+'/'+record.parentNode.id)
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  loadGroup(record, form, questId, viewModel) {
    const me=this;
    const qeGroup = Ext.create('VegaUi.model.questEditor.QeGroup');
    qeGroup.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    qeGroup.load(
      {
        success: function () {
          viewModel.set('groupRecord', qeGroup);
          viewModel.set('nodeToExpand','root')
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  alertMsg(operation){
    let message;
    const rom = operation.error.response.responseJson;
    const apiError=rom.apierror
    if(apiError)
      message='Status: <b>' + apiError['status'] + '</b><br/>Message: <b>' + apiError['message'] + '</b><br/>DebugMessage: <b>' + apiError['debugMessage'] + '</b'
    else
      message = 'Status: <b>' + rom['status'] + '</b><br/>Error: <b>' + rom['error'] + '</b><br/>Message: <b>' + rom['message'] + '</b><br/>'
    Ext.Msg.alert(
      'Failure', message
    );
  },


  closeForm() {
    this.getFormContainer().hide();
  },

  removeItemNode: function (record) {
    let me = this;
    const treeGrid = me.getView().down('treepanel');
    const store = treeGrid.getStore();
    const questId = me.getQuestId();
    const viewModel = me.getViewModel();
    questEditorTreeController.removeTreeElement(questId, record.get('id'), function (result, e) {
      if (e.type == 'rpc') {
        store.reload({
          scope: this,
          callback: function (records, operation, success) {
            treeGrid.expandPath(viewModel.get('nodeToExpand'));
          }
        });
      } else {
        Ext.Msg.alert('Failure', 'Type: ' + result.type + '<br/> Message: ' + result.message);
      }
    })
  },


  parentToExpand(records, record) {
    let selectedNode;
    for (let rec of records) {
      if (rec.id == record.parentNode.id) {
        selectedNode = rec;
        break;
      }
    }
    return selectedNode;
  },

  onDrop(){
    console.log('drop')
  }
})

