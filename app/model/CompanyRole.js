Ext.define('VegaUi.model.CompanyRole', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'integer'},
    {name: 'roleName', type: 'string'},
    {name: 'roleDescription', type: 'string'}
  ]
});
