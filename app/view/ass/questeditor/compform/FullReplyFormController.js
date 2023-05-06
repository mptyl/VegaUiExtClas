Ext.define('VegaUi.view.ass.questeditor.compform.FullReplyFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questeditor-compform-fullreplyform',
  mixins: [
    'VegaUi.mixin.QeMixin'
  ],
  onSaveReply() {
    this.saveForm('qe-fullreply-form', 'qereply')
  },

  onSelectReplyType(combo) {
    let me = this;
    me.hideContainers();
    if (combo.getSelection()) {
      const typeSelected = combo.getSelection().get('id');
      me.showSpecificSubform(typeSelected);
    }
  },
  hideContainers() {
    const formsContainer = this.lookupReference('specificFormsContainer');
    formsContainer.removeAll(true);
  },
  showSpecificSubform(typeSelected) {
    const formsContainer = this.lookupReference('specificFormsContainer');
    switch (typeSelected) {
      case 'CHECKBOX':
      case 'RADIOBOX':
        formsContainer.add(this.createBox(typeSelected));
        break;
      case 'CHECKGROUP':
      case 'RADIOGROUP':
        formsContainer.add(this.createGroup(typeSelected));
        break;
      case 'DATE':
        formsContainer.add(this.createDate());
        break;
      case 'FILE':
        formsContainer.add(this.createFile());
        break;
      case 'INTEGER':
        formsContainer.add(this.createInteger());
        break;
      case 'NUMERIC':
        formsContainer.add(this.createNumeric());
        break;
      case 'SELECT':
        formsContainer.add(this.createSelect());
        break;
      case 'COLOR':
      case 'EMAIL':
      case 'PASSWORD':
      case 'TELEPHONENUMBER':
      case 'TEXT':
      case 'URL':
        formsContainer.add(this.createTextual(typeSelected));
        break;
      case 'TEXTAREA':
        formsContainer.add(this.createTextarea());

    }
  },

  createBox(typeSelected) {
    const box = Ext.create('widget.qe-checkradiobox');
    box.setTitle(this.capitalize(typeSelected));
    return box;
  },

  createGroup(typeSelected) {
    let box;
    if (typeSelected === 'CHECKGROUP')
      box = Ext.create('widget.qe-checkgroupfieldset');
    else
      box = Ext.create('widget.qe-radiogroupfieldset');
    box.setTitle(this.capitalize(typeSelected));
    return box;
  },

  createDate() {
    return Ext.create('widget.qe-datefieldset');
  },

  createFile() {
    return Ext.create('widget.qe-filefieldset');
  },

  createInteger() {
    return Ext.create('widget.qe-integerfieldset');
  },
  createNumeric() {
    return Ext.create('widget.qe-numericfieldset');
  },
  createSelect() {
    return Ext.create('widget.qe-selectfieldset');
  },
  createTextual(typeSelected) {
    const box = Ext.create('widget.qe-textualfieldset');
    box.setTitle(this.capitalize(typeSelected));
    return box;
  },

  createTextarea() {
    return Ext.create('widget.qe-textareafieldset');
  },

  capitalize(typeSelected) {
    const firstChar = typeSelected.charAt(0);
    let secondPart = typeSelected.slice(1);
    let lowedText = secondPart.toLowerCase();
    return firstChar + lowedText;
  }
});

