import Phaser from 'phaser';
import world from 'world';
import { global } from './global';

const config: any = {
  gameTitle: 'OpenSC2K',
  gameURL: 'https://github.com/rage8885/OpenSC2K',
  gameVersion: '1.0',
  renderType: Phaser.WEBGL,
  parent: 'content',
  expandParent: true,
  autoRound: true,
  pixelArt: true,
  batchSize: 32767,
  inputGamepad: false,
  disableContextMenu: true,
  sbanner: false,
  audio: {
    noAudio: true,
  },
  width: window.innerWidth,
  height: window.innerHeight,
  scaleMode: Phaser.Scale.ScaleModes.RESIZE,
  scene: world,
};

global.init();
global.game = new Phaser.Game(config);