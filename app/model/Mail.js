Ext.define('VegaUi.model.Mail', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'integer'},
    {name: 'assessmentId', type: 'integer'},
    {name: 'assessmentDescription', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'text', type: 'string'},
    {name: 'htmlText', type: 'string'},
    {name: 'event', type: 'string'},
    {name: 'bcc', type: 'boolean'},
    {name: 'cc', type: 'boolean'},
    {name: 'object', type: 'string'}
  ]
})
