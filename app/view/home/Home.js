
Ext.define('VegaUi.view.home.Home',{
    extend: 'Ext.panel.Panel',
    xtype:'home-home-panel',

    requires: [
        'VegaUi.view.home.HomeController',
        'VegaUi.view.home.HomeModel'
    ],

    controller: 'home-home',
    viewModel: {
        type: 'home-home'
    },

    html: 'Home'
});
