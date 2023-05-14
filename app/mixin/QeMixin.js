Ext.define('VegaUi.mixin.QeMixin', {
  extend: 'Ext.Mixin',

  mixinId: 'qeMixinId',
  mixinConfig: {
    after: {
      destroy: 'afterDestroy'
    }
  },


  onTreePanelItemContextMenu(dataview, record, item, index, e, eOpts) {
    const me = this;
    e.stopEvent();

    me.addGroupAction = Ext.create('Ext.Action', {
      iconCls: 'x-fa fa-layer-group',
      text: 'Aggiungi nuovo Gruppo di domande',
      disabled: false,
      handler: function (widget, event) {
        me.onAddGroup(record, index);
      }
    });
    me.addQuestionAction = Ext.create('Ext.Action', {
      iconCls: 'x-fa fa-question',
      text: 'Aggiungi nuova Domanda', disabled: false,
      handler: function (widget, event) {
        me.onAddQuestion(record, index);
      }
    });
    me.addReplyAction = Ext.create('Ext.Action', {
      iconCls: 'x-fa fa-reply',
      text: 'Aggiungi nuova Risposta',
      disabled: false,
      handler: function (widget, event) {
        me.onAddReply(record, index);
      }
    });
    me.addJumpAction = Ext.create('Ext.Action', {
      iconCls: 'x-fa fa-project-diagram',
      text: 'Aggiungi nuova Jump Expression',
      disabled: false,
      handler: function (widget, event) {
        me.onAddJumpExpression(record, index);
      }
    });
    me.deleteAction = Ext.create('Ext.Action', {
      iconCls: 'x-fa fa-trash',
      text: 'Cancella elemento',
      disabled: false,
      handler: function (widget, event) {
        me.onDeleteNode(record, index);
      }
    });
    me.menuSeparator = {
      xtype: 'menuseparator'
    };

    if (record.data.root == true) {
      me.ruleMenu = Ext.create('Ext.menu.Menu', {
        items: [
          me.addGroupAction
        ]
      });
    }
    ;
    if (record.data.cls == 'QeGroup') {
      me.ruleMenu = Ext.create('Ext.menu.Menu', {
        items: [
          me.addGroupAction,
          me.menuSeparator,
          me.addQuestionAction,
          me.menuSeparator,
          me.deleteAction
        ]
      });
    }
    if (record.data.cls == 'QeQuestion') {
      me.ruleMenu = Ext.create('Ext.menu.Menu', {
        items: [
          me.addQuestionAction,
          me.menuSeparator,
          me.addReplyAction,
          me.addJumpAction,
          me.menuSeparator,
          me.deleteAction
        ]
      });
    }
    if (record.data.cls == 'QeFullReply') {
      me.ruleMenu = Ext.create('Ext.menu.Menu', {
        items: [
          me.addReplyAction,
          me.menuSeparator,
          me.deleteAction
        ]
      });
    }
    if (record.data.cls == 'QeJumpExpression') {
      me.ruleMenu = Ext.create('Ext.menu.Menu', {
        items: [
          me.addJumpAction,
          me.menuSeparator,
          me.deleteAction
        ]
      });
    }
    me.ruleMenu.showAt(e.getXY());
  },

  onAddGroup: function (record) {
    const me = this;
    const qeGroup = Ext.create('VegaUi.model.questEditor.QeGroup');
    const newNode = me.setupFormAndViewModel(record, qeGroup, 'G', 'root')
    me.addNode(newNode, me.getGroupForm());
  },

  onAddQuestion(record) { //il record è il nodo su cui è stato fatto il right-click
    const me = this;
    const qeQuestion = Ext.create('VegaUi.model.questEditor.QeQuestion');
    const newNode = me.setupFormAndViewModel(record, qeQuestion, 'Q', 'QeGroup');
    me.addNode(newNode, me.getQuestionForm());
  },

  onAddJumpExpression(record) {
    const me = this;
    const qeJumpExpression = Ext.create('VegaUi.model.questEditor.QeJumpExpression');
    const newNode = me.setupFormAndViewModel(record, qeJumpExpression, 'J', 'QeQuestion');
    me.addNode(newNode, me.getJeForm());
  },

  onAddReply(record) {
    const me = this;
    const qeReply = Ext.create('VegaUi.model.questEditor.QeFullReply');
    const newNode = me.setupFormAndViewModel(record, qeReply, 'R', 'QeQuestion')
    me.addNode(newNode, me.getReplyForm());
    const checkGroupStore=Ext.getStore('QeCheckBoxes');
    checkGroupStore.loadData([],false);
  },

  addNode(record, formNumber) {
    const me = this;
    const formContainer = me.getFormContainer();
    formContainer.getLayout().setActiveItem(formNumber);
    const form=formContainer.getLayout().getActiveItem().down('form');
    form.loadRecord(record);
    const specificContainer = form.down('#specificContent');
    if (specificContainer)
      specificContainer.removeAll();
    formContainer.show();
  },

  ////////////////////////////////////////////////////////////////////////////////////

  setupFormAndViewModel(record, newNode, elementPrefix, hierarchicalFatherCls) {
    const me = this;
    const questEditorViewModel = me.getViewModel();
    let fatherNodeId;
    let siblingPosition;
    let nodeToExpand;

    if (record.data.cls === '' || record.data.cls === hierarchicalFatherCls) {
      nodeToExpand = record.get('id');
    } else {
      nodeToExpand = record.parentNode.id+'/'+record.get('fatherId');
    }
    questEditorViewModel.set('nodeToExpand', nodeToExpand);

    if (record.data.cls === '' || record.data.cls === hierarchicalFatherCls) { // partito dal padre
      fatherNodeId = record.id;
      siblingPosition = null;
    } else {
      fatherNodeId = record.parentNode.id; // partito dal figlio
      siblingPosition = record.id;
    }
    me.setViewModelParameters(record, questEditorViewModel)
    newNode.set('elementPrefix', elementPrefix)
    newNode.set('fatherNodeId', fatherNodeId);
    newNode.set('siblingPosition', siblingPosition);
    newNode.set('questId', questEditorViewModel.get('questId'));  // Questionnaire
    questEditorViewModel.set('replyRecord', newNode);
    return newNode;
  },

  setViewModelParameters(record, questEditorViewModel) {
    questEditorViewModel.set('parentNode', record);
    switch (record.data.cls) {
      case 'QeGroup':
        questEditorViewModel.set('groupId', record.id);
        break;
      case 'QeQuestion':
        questEditorViewModel.set('groupId', record.parentNode.id);
        questEditorViewModel.set('questionId', record.id);
        break;
      default:
        if (record.parentNode) {
          questEditorViewModel.set('groupId', record.parentNode.parentNode.id);
          questEditorViewModel.set('questionId', record.parentNode.id);
        }
    }
    return questEditorViewModel;
  },

  saveForm(panel, controller) {
    const me = this;
    const formQuestEditor = me.getView().up();
    const questEditor = formQuestEditor.up();
    const treeGrid = questEditor.down('treepanel');
    const store = treeGrid.getStore();
    const qeForm = formQuestEditor.getLayout().getActiveItem().down('form');
    const viewModel = me.getViewModel();
    viewModel.set('checkBoxFormHidden',true);
    if (!qeForm.isValid()) {
      Ext.Msg.alert('Errore nella validazione del form', 'Form invalido o incompleto. \nVerificare che tutti i campi obbligatori siano stati compilati')
    } else {
      qeForm.submit({
        url: Ext.manifest['server'] + controller + '/submit',
        method: 'POST',
        success: function (form, result, data) {
          const internalForm=qeForm.getForm();
          const replyType=internalForm.findField('replyType');
          if(replyType){
            const replyTypeValue=replyType.getValue();
            if(replyTypeValue=='RADIOGROUP' || replyTypeValue=='CHECKGROUP')
              me.updateBoxes(formQuestEditor);
          }

          store.load({
            callback: function () {
              me.resetForm(viewModel,treeGrid);
            }
          })
        },
        failure: function (form, action) {
          me.resetForm(viewModel,treeGrid);
          switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
              Ext.Msg.alert(
                'Failure',
                'Form fields may not be submitted with invalid values'
              );
              break;
            case Ext.form.action.Action.CONNECT_FAILURE:
              const rt = JSON.parse(action.response.responseText);
              const ae = rt.apierror;
              const message = 'Status: <b>' + ae['status'] + '</b><br/>Message: <b>' + ae['message'] + '</b><br/>Debug: <b>' + ae['debugMessage'] + '</b';
              Ext.Msg.alert('Failure', 'Ajax communication failed:<br/> ' + message);
              break;
            case Ext.form.action.Action.SERVER_INVALID:
              const rts = JSON.parse(action.response.responseText);
              const aes = JSON.parse(rts.responseText)['apierror'];
              const messages = 'Status: <b>' + aes['status'] + '</b><br/>Message: <b>' + aes['message'] + '</b';
              Ext.Msg.alert('Server Error',  messages);
          }
        }
      });
    }
  },

  updateBoxes(form){
    const cbgrid=form.down('qe-checkboxgrid');
    const grid2=cbgrid.down('grid');
    const checkBoxesGrid=grid2.getStore()
    checkBoxesGrid.sync();
  },

  getTreeGrid(){
    const formQuestEditor = this.getView().up();
    const questEditor = formQuestEditor.up();
    return questEditor.down('treepanel');
  },

  resetTreeGrid(treeGrid){
    const viewModel=this.getViewModel();
    treeGrid.getSelectionModel().deselectAll();
    treeGrid.expandPath(viewModel.get('nodeToExpand'));
  },

  resetForm(viewModel,treeGrid){
    this.onCancelWithoutSaving()
    treeGrid.getSelectionModel().deselectAll();
    treeGrid.expandPath(viewModel.get('nodeToExpand'));
  },

  parentToExpand(records, parent) {
    let selectedNode;
    for (let rec of records) {
      if (rec.id == parent.id) {
        selectedNode = rec;
        break;
      }
    }
    return selectedNode;
  },

  onCancelWithoutSaving: function () {
    const viewModel=this.getViewModel();
    viewModel.set('checkBoxFormHidden',true)
    const treeGrid=this.getTreeGrid();
    this.resetTreeGrid(treeGrid);
    const formContainer = this.getView().up('form-quest-editor');
    const form=formContainer.down('form');
    form.reset();
    formContainer.hide();
    form.remove(form, true);
  },

  afterDestroy() {
    console.log('destroy QeMixin')
  },

})
