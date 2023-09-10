Ext.define('VegaUi.view.ass.questionari.FormQuestionari', {
  extend: 'Ext.form.Panel',
  alias: 'widget.quest-form',

  requires: [
    'VegaUi.view.ass.questionari.FormQuestionariController',
  ],

  controller: 'ass-questionari-formquestionari',
  layout: 'fit',
  reference: 'questionariEntityForm',
  margin: '0 10',
  trackResetOnLoad: true,
  jsonSubmit: true,
  api: {
    submit: 'questionnaireDirectController.saveForm'
  },
  items: [
    {
      xtype: 'tabpanel',
      tabBarPosition: 'top',
      style: 'border: 1px solid lightgrey',
      items: [
        {
          title: 'Dati generali',
          scrollable: true,
          padding: 10,
          flex: 1,
          items: [
            {
              xtype: 'fieldset',
              padding: 10,
              defaults: {
                labelAlign: 'right',
                labelWidth: 180,
              },
              items: [
                {
                  xtype: 'textfield',
                  // bind: '{record.name}',
                  fieldLabel: '* Nome:',
                  allowBlank: false,
                  name: 'name',
                  anchor: '100%'
                },
                {
                  xtype: 'combobox',
                  fieldLabel: '* Gruppo Questionari:',
                  queryMode: 'local',
                  name: 'questionnaireGroupId',
                  allowBlank: false,
                  displayField: 'name',
                  forceSelection: true,
                  store: 'QuestionnaireGroups',
                  valueField: 'id',
                  typeAhead: true,
                  anyMatch: true,
                  anchor: '100%',
                  // bind: '{record.questionnaireGroupId}'
                },
                {
                  xtype: 'htmleditor',
                  fieldLabel: '* Titolo:',
                  allowBlank: false,
                  anchor: '100%',
                  name: 'title',
                  // bind: '{record.title}'
                },
                {
                  xtype: 'htmleditor',
                  fieldLabel: 'Sottotitolo:',
                  anchor: '100%',
                  name: 'subTitle',
                  // bind: '{record.subTitle}'
                },
                {
                  xtype: 'textfield',
                  fieldLabel: '* Campo ricerca questionario:',
                  allowBlank: false,
                  anchor: '100%',
                  name: 'searchText',
                  // bind: '{record.searchText}'
                },
                {
                  xtype: 'combobox',
                  anchor: '100%',
                  fieldLabel: '* Profilo',
                  name: 'questionnaireProfileId',
                  displayField: 'description',
                  forceSelection: true,
                  store: 'QuestionnaireProfiles',
                  valueField: 'id',
                  typeAhead: true,
                  queryMode: 'local',
                  anyMatch: true,
                  allowBlank: false,
                  // bind: '{record.questionnaireProfileId}'
                },
                {
                  xtype: 'checkboxfield',
                  fieldLabel: 'Annullato:',
                  name: 'canceled',
                  // bind: '{record.canceled}'
                },
                {
                  xtype: 'numberfield',
                  hidden: false,
                  name: 'id',
                  fieldLabel: 'Id:',
                  bind: {
                    // value: '{id}',
                    hidden: '{hiddenId}'
                  }
                },
                {
                  xtype: 'textfield',
                  hidden: true,
                  name: 'createdBy',
                  // bind: '{record.createdBy}'

                },
                {
                  xtype: 'textfield',
                  hidden: true,
                  name: 'updatedBy',
                  // bind: '{record.updatedBy}'

                },
                {
                  xtype: 'numberfield',
                  hidden: true,
                  name: 'createdDate',
                  // bind: '{record.createdDate}'

                },
                {
                  xtype: 'numberfield',
                  hidden: true,
                  name: 'lastModifiedDate',
                  // bind: '{record.lastModifiedDate}'

                },
                {
                  xtype: 'numberfield',
                  hidden: true,
                  name: 'version',
                  // bind: '{record.version}'
                },
              ]
            },
          ],
        },
        {
          title: 'Istruzioni, note e pagina finale',
          scrollable: true,
          padding: 10,
          items: [
            {
              xtype: 'fieldset',
              padding: 10,
              defaults: {
                labelAlign: 'right',
                labelWidth: 180,
              },
              items: [
                {
                  xtype: 'combobox',
                  anchor: '100%',
                  width: 30,
                  fieldLabel: 'Tipo questionario',
                  name: 'questionnaireType',
                  displayField: 'questionnaireType',
                  valueField: 'id',
                  forceSelection: true,
                  queryMode: 'local',
                  store: 'QuestionnaireTypes',
                  // bind: '{record.questionnaireType}',
                },
                {
                  xtype: 'htmleditor',
                  fieldLabel: 'Istruzioni:',
                  name: 'instructions',
                  anchor: '100%',
                  // bind: '{record.instructions}',
                },
                {
                  xtype: 'htmleditor',
                  fieldLabel: 'Testo pagina finale:',
                  name: 'saveText',
                  anchor: '100%',
                  // bind: '{record.saveText}',
                },
                {
                  xtype: 'htmleditor',
                  fieldLabel: 'Note:',
                  name: 'notes',
                  anchor: '100%',
                  // bind: '{record.notes}',
                }
              ]
            },
          ],
        },
        {
          title: 'Tempi e altre proprietà',
          scrollable: true,
          padding: 10,
          items: [
            {
              xtype: 'fieldset',
              itemId:'logoForm',
              padding: 10,
              defaults: {
                labelAlign: 'right',
                labelWidth: 180,
              },
              items: [
                // {
                //   xtype: 'image',
                //   bind: {
                //     src: '{record.image}',
                //     hidden: '{!record.image}'
                //   },
                //   width: 200,
                //   fieldLabel: 'Immagine questionario',
                //   margin: '0 0 20 190'
                // },
                // {
                //   xtype: 'filefield',
                //   flex: 1,
                //   anchor: '100%',
                //   fieldLabel: 'Immagine Questionario',
                //   msgTarget: 'side',
                //   name: 'logoFile',
                //   buttonText: 'Seleziona immagine questionario',
                //   submitValue: false,
                // },
                // {
                //   xtype: 'button',
                //   text: 'Rimuovi immagine',
                //   margin: '0 0 0 20',
                //   handler: 'onRemoveLogo',
                //   width: 200,
                //   bind: {
                //     hidden: '{!record.image}'
                //   }
                // },
                // {
                //   xtype: 'textfield',
                //   fieldLabel: 'Image Alt:',
                //   name: 'imageAlt',
                //   anchor: '100%',
                //   // bind: '{record.imageAlt}',
                // },
                {
                  xtype: 'numberfield',
                  name: 'compilationTime',
                  fieldLabel: 'Tempo massimo di compilazione',
                  anchor: '100%',
                  // bind: '{record.compilationTime}',
                },
                {
                  xtype: 'numberfield',
                  anchor: '100%',
                  fieldLabel: 'Tempo fine forzata:',
                  name: 'forcedTerminationTime',
                  // bind: '{record.forcedTerminationTime}',
                }, {
                  xtype: 'numberfield',
                  anchor: '100%',
                  fieldLabel: 'Numero allegati richiesti',
                  name: 'attachments',
                  // bind: '{record.attachments}',
                },
                {
                  xtype: 'checkboxfield',
                  fieldLabel: 'Soggetto a valutazione',
                  name: 'subjectToEvaluation',
                  // bind: '{record.subjectToEvaluation}',
                },
              ],
            },
          ],
        },
        {
          title: 'QuestEditor',
          scrollable: true,
          padding: 10,
          items: [
            {
              xtype: 'fieldset',
              defaults: {
                labelAlign: 'right',
                labelWidth: 180,
              },
              items: [
                {
                  xtype: 'textfield',
                  fieldLabel: 'Questeditor Attuale',
                  name: 'questeditorName',
                  anchor: '100%',
                  // bind: '{record.questeditorName}',
                },
                {
                  xtype: 'xmlTextArea',
                  fieldLabel: 'Xml QuestEditor',
                  anchor: '100%',
                  name: 'questEditor',
                  margin: '0 0 5 0',
                  height: 700,
                  readOnly: true,
                  // bind: '{record.questEditor}',
                }
              ]
            }
          ]
        }
      ]
    },
  ],
  listeners: {
    dirtychange: 'onFormDirtyChange'
  },
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'top',
      ui: 'footer',
      items: [
        {
          xtype: 'button',
          reference: 'add',
          iconCls: 'x-fa fa-plus',
          text: 'Torna alla lista',
          handler: 'onReset',
        },
        {
          xtype: 'tbfill'
        },
        {
          xtype: 'button',
          bind: {
            disabled: '{saveButtonDisabled}'
          },
          reference: 'save',
          iconCls: 'x-fa fa-copy',
          text: 'Salva il Questionario',
          handler: 'onSave',
          align: 'right',
        },
      ]
    }
  ]
});
