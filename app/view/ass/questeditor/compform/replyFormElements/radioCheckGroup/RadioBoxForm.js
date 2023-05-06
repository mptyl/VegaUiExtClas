Ext.define('VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioBoxForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.radioboxform',

  requires: [
    'VegaUi.view.ass.questeditor.compform.replyFormElements.radioCheckGroup.RadioBoxFormController',
  ],

  controller: 'ass-questeditor-compform-radioboxform',
  hidden: false,
  title: 'Radiobox',
  reference: 'radioBoxForm',
  itemId: 'radioBoxForm',
  items: [

    {
      xtype:'fieldcontainer',
      layout:'form',
      items:[
        {
          xtype:'textfield',
          name:'boxLabel',
          fieldLabel:'Label',
          bind:'{boxmodel.boxLabel}',
          anchor:'100%',
          flex:2
        },
        {
          xtype:'textfield',
          name:'boxValue',
          fieldLabel:'Valore',
          anchor:'100%',
          bind:'{boxmodel.boxValue}',
          flex:2
        },
        {
          xtype:'checkboxfield',
          name:'boxChecked',
          anchor:'100%',
          fieldLabel:'Checked',
          bind:'{boxmodel.boxChecked}',
          flex:1
        },
        {
          xtype:'textfield',
          name:'id',
          bind:'{boxmodel.id}',
          hidden:true,
          flex:1
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          label: 'elementPrefix',
          name: 'elementPrefix',
          hidden: true
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          label: 'fatherNodeId',
          name: 'fatherNodeId',
          hidden: true
        },
        {
          xtype: 'textfield',
          anchor: '100%',
          label: 'siblingPosition',
          name: 'siblingPosition',
          hidden: true
        },
        {
          xtype: 'numberfield',
          anchor: '100%',
          label: 'questId',
          name: 'questId',
          hidden: true
        }
      ],
      dockedItems:[
        {
          xtype: 'toolbar',
          docked: 'top',
          layout: {
            type: 'box',
            pack: 'space-between'
          },
          defaults: {
            xtype: 'button',
          },
          items: [
            {
              reference: 'cancelWithoutSaving',
              iconCls: 'x-fa fa-undo',
              text: 'Esci senza salvare',
              handler: 'onCancelWithoutSaving',
              ui: 'decline round'
            },
            {
              reference: 'saveGroup',
              iconCls: 'x-fa fa-inbox',
              text: 'Salva Radiobox',
              align: 'right',
              handler: 'onSaveRadioBox',
              ui: 'confirm round'
            }
          ]
        },
      ]
    },


  ]
});
