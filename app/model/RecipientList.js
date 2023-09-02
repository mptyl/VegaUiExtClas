Ext.define('VegaUi.model.RecipientList', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'int'},
    {name: 'listName', type: 'string'},
    {name: 'listDescription', type: 'string'},
    {name: 'listType', type: 'string', defaultValue: 'PRODUZIONE'},
  ]
});
