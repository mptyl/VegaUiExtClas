Ext.define('VegaUi.view.ass.questionari.FormQuestionariController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ass-questionari-formquestionari',

  mixins: [
    'VegaUi.mixin.TylCrudMixin'
  ],

  onReset(){
    this._showGrid();
  },

  onSave() {
    this._saveWithoutAttachment('questionnaire');
  },

  onFormDirtyChange(basic, dirty, eOpts) {
    this._formDirtyChange(basic, dirty);
  },

  onRemoveImage() {
    const me=this;
    Ext.Msg.confirm(
      'Conferma cancellazione', 'Confermi la cancellazione dell\'immagine?', function (btn) {
        if (btn === 'yes') {
          me._removeImage(companyDirectController)
        }
      }
    );
  },


});
