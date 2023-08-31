Ext.define('VegaUi.view.ass.mail.MailForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.ass-mailForm',

  requires: [
    'VegaUi.view.ass.mail.MailFormController',
  ],

  controller: 'ass-mail-mailform',

  border: false,
  scrollable: 'vertical',
  reference: 'mailEntityForm',
  bodyPadding: 10,
  fieldDefaults: {
    labelWidth: 120,
    labelAlign: 'right',
    selectOnFocus: true,
    width: 400
  },
  trackResetOnLoad: true,
  jsonSubmit: true,
  items: [
    {
      xtype: 'fieldset',
      margin: 10,
      padding: 5,
      title: 'Gestione testi delle Mail',
      items: [
        {
          xtype: 'combobox',
          anchor: '100%',
          fieldLabel: '* Evento',
          name: 'event',
          value: 'INVITO',
          allowBlank: false,
          queryMode: 'local',
          forceSelection: true,
          store: [
            'INVITO',
            'REMINDER',
            'RECALL',
            'RECALLSINGOLO',
            'RECALLCHIUSURA',
            'PROROGA',
            'RINGRAZIAMENTO',
            'RESETPASSWORD',
            'REPORTINDIVIDUALE'
          ]
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          fieldLabel: '* Descrizione',
          name: 'description',
          allowBlank: false
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          fieldLabel: '* Oggetto',
          name: 'object',
          allowBlank: false
        },
        {
          xtype: 'textareafield',
          anchor: '100%',
          height: 290,
          fieldLabel: 'Testo',
          name: 'text'
        },
        {
          xtype: 'htmleditor',
          anchor: '100%',
          height: 300,
          fieldLabel: 'Html',
          name: 'htmlText'
        },
        {
          xtype: 'fieldcontainer',
          layout: {
            type: 'hbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'combobox',
              flex: 4,
              fieldLabel: 'Assessment',
              name: 'assessmentId',
              allowBlank: false,
              displayField: 'title',
              store: 'AssessmentCombo',
              valueField: 'id',
              typeAhead:true,
              queryMode:'local',
              anyMatch:true,
              forceSelection: true
            },
            {
              xtype: 'checkboxfield',
              flex: 1,
              fieldLabel: 'Bcc',
              name: 'bcc'
            },
            {
              xtype: 'checkboxfield',
              flex: 1,
              fieldLabel: 'Cc',
              name: 'cc'
            }
          ]
        }
      ]
    }
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
          reference: 'backToList',
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
          text: 'Salva la Mail',
          handler: 'onSave',
          align: 'right',
        },
      ]
    }
  ]
});
