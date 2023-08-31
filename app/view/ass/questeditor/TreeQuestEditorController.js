Ext.define('VegaUi.view.ass.questeditor.TreeQuestEditorController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-treequesteditor',

  mixins: [
    'VegaUi.mixin.QeMixin'
  ],

  config: {
    groupForm: 0,
    pageForm: 1,
    questionForm: 2,
    jeForm: 3,
    replyForm: 4,
    radioGroupForm: 4,
    checkGroupForm: 4
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
          case 'QePage':
            me.loadPage(record, form, questId, questEditorViewModel)
            break;
          case 'QeGroup':
            me.loadGroup(record, form, questId, questEditorViewModel)
            break;
        }
        me.getFormContainer().show()
        const active = me.getFormContainer().layout.getActiveItem();
        const treeLabelField = active.down('#treeLabel');
        if (treeLabelField) {
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

  onDuplicateNode: function (record, index) {
    const me = this;
    Ext.Msg.confirm(
      'Conferma duplicazione',
      'Confermi duplicazione?', function (btn) {
        if (btn === 'yes') {
          me.duplicateItemNode(record, index);
        }
      })
  },

  //////////////////////////////////////////////////////////////////////

  getFormContainer() {
    const view = this.getView();
    const viewUp = view.up().up();
    return viewUp.down('form-quest-editor')
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
      case 'QePage': {
        const formIndex = me.getPageForm()
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
    const me = this;
    const reply = Ext.create('VegaUi.model.questEditor.QeFullReply');
    reply.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    reply.load(
      {
        success: function () {
          viewModel.set('replyRecord', reply);
          viewModel.set('nodeToExpand', record.parentNode.parentNode.id + '/' + record.parentNode.id)
          if (reply.get('replyType') == 'RADIOGROUP' || reply.get('replyType') == 'CHECKGROUP') {
            const store = Ext.getStore('QeCheckBoxes');
            const questId = viewModel.get('questId');
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
    const me = this;
    const question = Ext.create('VegaUi.model.questEditor.QeQuestion');
    question.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    question.load(
      {
        success: function () {
          viewModel.set('questionRecord', question);
          viewModel.set('nodeToExpand', record.parentNode.id)
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  loadJumpExpression(record, form, questId, viewModel) {
    const me = this;
    const jumpExpression = Ext.create('VegaUi.model.questEditor.QeJumpExpression');
    jumpExpression.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    jumpExpression.load(
      {
        success: function () {
          viewModel.set('jeRecord', jumpExpression);
          viewModel.set('nodeToExpand', record.parentNode.parentNode.id + '/' + record.parentNode.id)
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  loadPage(record, form, questId, viewModel) {
    const me = this;
    const qePage = Ext.create('VegaUi.model.questEditor.QePage');
    qePage.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    qePage.load(
      {
        success: function () {
          viewModel.set('pageRecord', qePage);
          viewModel.set('nodeToExpand', record.parentNode.id)
          viewModel.set('currentRecord', qePage);
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  loadGroup(record, form, questId, viewModel) {
    const me = this;
    const qeGroup = Ext.create('VegaUi.model.questEditor.QeGroup');
    qeGroup.getProxy().setExtraParams({id: record.get('id'), questId: questId});
    qeGroup.load(
      {
        success: function () {
          viewModel.set('groupRecord', qeGroup);
          viewModel.set('nodeToExpand', qeGroup.id)
          viewModel.set('currentRecord', qeGroup);
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    )
  },

  alertMsg(operation) {
    let message;
    const rom = operation.error.response.responseJson;
    const apiError = rom.apierror
    if (apiError)
      message = 'Status: <b>' + apiError['status'] + '</b><br/>Message: <b>' + apiError['message'] + '</b><br/>DebugMessage: <b>' + apiError['debugMessage'] + '</b'
    else
      message = 'Status: <b>' + rom['status'] + '</b><br/>Error: <b>' + rom['error'] + '</b><br/>Message: <b>' + rom['message'] + '</b><br/>'
    Ext.Msg.alert(
      'Failure', message
    );
  },


  closeForm() {
    this.getFormContainer().hide();
  },

  duplicateItemNode: function (record) {
    let me = this;
    const treeGrid = me.getView().down('treepanel');
    const store = treeGrid.getStore();
    const questId = me.getQuestId();
    const viewModel = me.getViewModel();
    questEditorTreeController.duplicateTreeElement(questId, record.get('id'), function (result, e) {
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

  onBeforeDrop(node, data, overModel, dropPosition, dropHandlers, eOpts) {
    try {
      const me = this;
      const draggedRecordId = data.records[0].get('id')
      const overModelId = overModel.get('id');
      const position = dropPosition;
      const questId = me.getQuestId();
      console.log('Before drop ' + data.records[0].get('cls') + ' ' + position + ' ' + overModel.get('cls'));
      if (this._isAllowed(data.records[0].get('cls'), overModel.get('cls'))) {
        treeDragAndDropController.dragAndDrop(questId, draggedRecordId, overModelId, position, function (result, e) {
          if (!result.success) {
            Ext.Msg.alert('Failure', result.message);
            return false;
          } else
            return true;
        })
      }
    } catch (e) {
      console.log(e)
      return false
    }
  },

  onDrop(node, data, overModel, dropPosition, eOpts) {
    console.log('After Drop ' + data.records[0].get('cls') + ' ' + dropPosition + ' ' + overModel.get('cls'));
    const me = this;
    const treeGrid = me.getView().down('treepanel');
    treeGrid.expandNode(overModel);
  },

  _isAllowed(draggedClass, overClass) {
    console.log('Dragged: ' + draggedClass + ' Over: ' + overClass)
    if ((draggedClass === overClass) ||
      (draggedClass === 'QeFullReply' && overClass === 'QeQuestion') ||
      (draggedClass === 'QeJumpExpression' && overClass === 'QeQuestion') ||
      (draggedClass === 'QeQuestion' && overClass === 'QePage') ||
      (draggedClass === 'QePage' && overClass === 'QeGroup')) {
      return true;
    } else
      return false;
  }


})

