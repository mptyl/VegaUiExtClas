Ext.define('VegaUi.view.ass.questeditor.ShowQuestionWindowController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-showquestionwindow',

  init() {
    const viewModel = this.getViewModel();
    const store = this.loadStore(viewModel);
    this.loadQuestion(viewModel);
  },

  fillFormWithQuestion(qeQuestion, window) {
    const me = this;
    const formPanel = window.down('form');
    const fieldContainer = formPanel.down('#replyList')
    const qeReplies = qeQuestion.get('qeReplies');
    qeReplies.forEach(function (qeReply) {
      const qeReplyfld = me.createField(qeReply)
      qeReplyfld.set
      fieldContainer.add(qeReplyfld);

      fieldContainer.add(qeReplyfld);
      // const replyType = qeReply.get('replyType');
      // if (replyType === 'CHECKGROUP' || replyType === 'RADIOGROUP') {
      //   // Get the list of QeCheckBoxes associated with the QeFullReply
      //   const qeCheckBoxes = qeReply.qeCheckBoxes();
      //
      //   // Iterate over the QeCheckBoxes and populate the form fields
      //   qeCheckBoxes.each(function(qeCheckBox) {
      //     // Extract the required information from the QeCheckBox model
      //     const boxLabel = qeCheckBox.get('boxLabel');
      //     const boxValue = qeCheckBox.get('boxValue');
      //     const boxChecked = qeCheckBox.get('boxChecked');
      //
      //     // Populate the form field with the QeCheckBox information
      //     const checkBoxField = Ext.getCmp('checkBoxField_' + qeCheckBox.getId()); // Replace 'checkBoxField' with the actual ID of the field
      //     checkBoxField.setBoxLabel(boxLabel);
      //     checkBoxField.setValue(boxValue);
      //     checkBoxField.setChecked(boxChecked);
      //   });
      // }
    })
  },


  createField(qeReply) {
    const me = this;
    switch (qeReply['replyType']) {
      case 'CHECKBOX':
        return me.createCheckBox(qeReply);
      // case 'COLOR':
      //   return me.createColor(qeReply);
      case 'TEXT':
        return me.createText(qeReply);
      case 'DATE':
        return me.createDate(qeReply);
      case 'EMAIL':
        return me.createEmail(qeReply);
      case 'FILE':
        return me.createFile(qeReply);
      case 'NUMERIC':
        return me.createNumeric(qeReply);
      case 'URL':
        return me.createUrl(qeReply)
    }
  },

  createComment(qeReply) {
    const field = Ext.create('Ext.form.field.TextArea', {
      fieldLabel: 'Commento',
    });
    return field;
  },

  createCheckBox(qeReply) {
    const field = Ext.create('Ext.form.field.Checkbox', {
      inputValue: qeReply['boxValue'],
      checked: qeReply['boxChecked'],
      boxLabel: qeReply['label'],
      anchor:'100%',
    });
    return field;
  },

  // createColor(qeReply) {
  //   const field = Ext.create('Ext.ux.colorpick.Field ', {
  //     fieldLabel: qeReply['label'],
  //   })
  // },

  createDate(qeReply){
    const field = Ext.create('Ext.form.field.Date', {
      fieldLabel: qeReply['label'],
      minDate:qeReply['minDate'],
      minDate:qeReply['maxDate'],
      anchor:'100%',
    });
    return field;
  },

  createEmail(qeReply) {
    const field = Ext.create('Ext.form.field.Text', {
      fieldLabel: qeReply['label'],
      allowedBlank: !qeReply['replyRequired'],
      minLength: qeReply['minLength'],
      maxLength: qeReply['maxLength'],
      anchor:'100%',
      vtype:'email'
    });
    return field;
  },

  createFile(qeReply){
    const field = Ext.create('Ext.form.field.File', {
      fieldLabel: qeReply['label'],
      accept: qeReply['accept'],
      anchor:'100%',
    });
  },

  createInteger(qeReply){
    const field = Ext.create('Ext.form.field.Integer', {
      fieldLabel: qeReply['label'],
      anchor:'100%',
    });
  },


  createNumeric(qeReply) {
    const field = Ext.create('Ext.form.field.Number',{
      fieldLabel: qeReply['label'],
      anchor:'100%',
    });
    return field;
  },

  createText(qeReply) {
    const field = Ext.create('Ext.form.field.Text', {
      fieldLabel: qeReply['label'],
      allowedBlank: !qeReply['replyRequired'],
      minLength: qeReply['minLength'],
      maxLength: qeReply['maxLength']
    });

    return field;
  },
  createUrl(qeReply) {
    const field = Ext.create('Ext.form.field.Text', {
      fieldLabel: qeReply['label'],
      allowedBlank: !qeReply['replyRequired'],
      minLength: qeReply['minLength'],
      maxLength: qeReply['maxLength'],
      vtype:'url'
    });
    return field;
  },

  /*

    CHECKGROUP,

    INTEGER,
    LIKERT,
    NUMERIC,
    PASSWORD,
    RADIOBOX,
    RADIOGROUP,
    SELECT,
    TELEPHONENUMBER,
    TEXTAREA,
    TEXT,
    URL
   */


  loadStore(viewModel) {
    const questId = viewModel.get('questId');
    const questionId = viewModel.get('questionId');
    const store = Ext.getStore('QeReplies')
    store.proxy.extraParams = {questId: questId, questionId: questionId};
    store.load();
    return store;
  },

  loadQuestion(viewModel) {
    const me = this;
    const questId = viewModel.get('questId');
    const questionId = viewModel.get('questionId');
    const question = Ext.create('VegaUi.model.questEditor.QeQuestion');
    question.getProxy().setExtraParams({id: questionId, questId: questId});
    question.load(
      {
        success: function (record, opertion) {
          viewModel.set('questionRecord', record);
          me.fillFormWithQuestion(record, me.getView());
        },
        failure: function (record, operation) {
          me.alertMsg(operation);
        }
      }
    );
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
});
