Ext.define('VegaUi.view.ass.questionari.FormQuestionari', {
  extend: 'Ext.panel.Panel',
  xtype: 'quest-form',

  requires: [
    'VegaUi.view.ass.questionari.FormQuestionariController',
  ],

  controller: 'ass-questionari-formquestionari',
  layout: 'fit',
  items: [
    {
      xtype: 'form',
      reference: 'questionariEntityForm',
      margin: '0 10',
      trackResetOnLoad: true,
      jsonSubmit: true,
      flex: 5,
      layout: 'fit',
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
                      fieldLabel: '* Nome:',
                      allowBlank: false,
                      name:'name',
                      anchor:'100%'
                    },
                    // {
                    //   xtype: 'textfield',
                    //   labelAlign: 'right',
                    //   fieldLabel: 'Versione:',
                    //   name: 'questionnaireVersion',
                    //   flex: 3,
                    // },
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
                      anchor:'100%'
                    },
                    {
                      xtype: 'htmleditor',
                      fieldLabel: '* Titolo:',
                      allowBlank: false,
                      anchor:'100%',
                      name: 'title'
                    },
                    {
                      xtype: 'htmleditor',
                      fieldLabel: 'Sottotitolo:',
                      anchor:'100%',
                      name: 'subTitle'
                    },
                    {
                      xtype: 'textfield',
                      fieldLabel: '* Campo ricerca questionario:',
                      allowBlank: false,
                      anchor:'100%',
                      name: 'searchText'
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
                    },
                    {
                      xtype: 'checkboxfield',
                      fieldLabel: 'Annullato:',
                      name: 'canceled'
                    },
                    {
                      xtype: 'numberfield',
                      hidden: false,
                      name: 'id',
                      label: 'Id:',
                      bind: {
                        hidden: '{hiddenid}'
                      }
                    },
                    {
                      xtype: 'textfield',
                      hidden: true,
                      name: 'createdBy',

                    },
                    {
                      xtype: 'textfield',
                      hidden: true,
                      name: 'updatedBy',

                    },
                    {
                      xtype: 'numberfield',
                      hidden: true,
                      name: 'createdDate',

                    },
                    {
                      xtype: 'numberfield',
                      hidden: true,
                      name: 'lastModifiedDate',

                    },
                    {
                      xtype: 'numberfield',
                      hidden: true,
                      name: 'version',

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
                      store: 'QuestionnaireTypes'
                    },
                    {
                      xtype: 'htmleditor',
                      fieldLabel: 'Istruzioni:',
                      name: 'instructions',
                      anchor: '100%',
                    },
                    {
                      xtype: 'htmleditor',
                      fieldLabel: 'Testo pagina finale:',
                      name: 'saveText',
                      anchor: '100%',
                    },
                    {
                      xtype: 'textarea',
                      fieldLabel: 'Note:',
                      name: 'notes',
                      anchor: '100%',
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
                  padding: 10,
                  defaults: {
                    labelAlign: 'right',
                    labelWidth: 180,
                  },
                  items: [
                    {
                      xtype: 'image',
                      bind: {
                        src: '{image}'
                      },
                      width: 170,
                      fieldLabel:'Immagine questionario',
                      margin:'0 0 20 180'
                    },
                    {
                      xtype: 'textfield',
                      fieldLabel: 'Image Alt:',
                      name: 'imageAlt',
                      anchor: '100%',
                    },
                    {
                      xtype: 'numberfield',
                      name: 'compilationTime',
                      fieldLabel: 'Tempo massimo di compilazione',
                      anchor: '100%',
                    },
                    {
                      xtype: 'numberfield',
                      anchor: '100%',
                      fieldLabel: 'Tempo fine forzata:',
                      name: 'forcedTerminationTime',
                    }, {
                      xtype: 'numberfield',
                      anchor: '100%',
                      fieldLabel: 'Numero allegati richiesti',
                      name: 'attachments',
                    },
                    {
                      xtype: 'checkboxfield',
                      fieldLabel: 'Soggetto a valutazione',
                      name: 'subjectToEvaluation'
                    },
                  ]
                }
              ]
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
                      anchor: '100%'
                    },
                    {
                      xtype: 'xmlTextArea',
                      fieldLabel: 'Xml QuestEditor',
                      anchor: '100%',
                      name: 'questEditor',
                      margin: '0 0 5 0',
                      height: 700,
                      readOnly: true
                    }
                  ]
                }
              ]
            }
          ]
        },
      ],
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
              reference: 'save',
              iconCls: 'x-fa fa-copy',
              text: 'Salva il Questionario',
              handler: 'onSave',
              align: 'right',
            },

          ]
        }
      ]
    },
  ]
})
;
