
Ext.define('VegaUi.view.autoval.analisi.AnalisiAutovalutazione',{
    extend: 'Ext.panel.Panel',
  xtype:'av-analisi-panel',

    requires: [
        'VegaUi.view.autoval.analisi.AnalisiAutovalutazioneController',
        'VegaUi.view.autoval.analisi.AnalisiAutovalutazioneModel'
    ],

    controller: 'autoval-analisi-analisiautovalutazione',
    viewModel: {
        type: 'autoval-analisi-analisiautovalutazione'
    },

    html: 'Analisi autovalutazione'
});
