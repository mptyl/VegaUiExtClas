Ext.define('VegaUi.model.CompanyGroup', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'integer'},
    {name: 'version', type: 'integer'},
    {name: 'name', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'groupLogo', type: 'string'},
    {name: 'privacyText', type: 'string'}
  ]
});
