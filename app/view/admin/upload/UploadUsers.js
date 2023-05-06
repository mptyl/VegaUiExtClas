
Ext.define('VegaUi.view.admin.upload.UploadUsers',{
    extend: 'Ext.panel.Panel',
  xtype:'adm-upload-panel',

    requires: [
        'VegaUi.view.admin.upload.UploadUsersController',
        'VegaUi.view.admin.upload.UploadUsersModel'
    ],

    controller: 'admin-upload-uploadusers',
    viewModel: {
        type: 'admin-upload-uploadusers'
    },

    html: 'Upload'
});
