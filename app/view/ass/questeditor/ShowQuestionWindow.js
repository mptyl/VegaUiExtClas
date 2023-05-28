Ext.define('VegaUi.view.ass.questeditor.ShowQuestionWindow', {
  extend: 'Ext.window.Window',
  alias:'widget.questShowingForm',

  requires: [
    'VegaUi.view.ass.questeditor.ShowQuestionWindowController',
  ],
  controller:'ass-questionari-showquestionwindow',
  title: 'My Window',
  width: 1000,
  height: 700,
  layout:'fit',
  items:[
    {
      xtype:'form',
      itemId:'replyForm',
      layout:'form',
      items:[
        {
          xtype:'textfield',
          fieldLabel:'QuestionText',
          itemId:'questionText',
          bind:'{questionRecord.questionText}'
        } ,
        {
          xtype:'fieldcontainer',
          itemId:'replyList',
          layout:'vbox',
          items:[]
        },
      ]
    }
  ]
})
