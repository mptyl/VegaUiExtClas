Ext.define('VegaUi.view.assessor.propriaval.PropriaValutazione', {
  extend: 'Ext.panel.Panel',
  xtype: 'asr-propriaval-panel',

  requires: [
    'VegaUi.view.assessor.propriaval.PropriaValutazioneController',
    'VegaUi.view.assessor.propriaval.PropriaValutazioneModel'
  ],

  controller: 'assessor-propriaval-propriavalutazione',
  viewModel: {
    type: 'assessor-propriaval-propriavalutazione'
  },

  html: 'Propria autovalutazione'
});
