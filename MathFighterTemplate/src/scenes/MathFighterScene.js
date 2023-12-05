import Phaser from "phaser";

export default class MathFighterScene extends Phaser.Scene {
  constructor() {
    super("math-fighter-scene");
  }
  init() {}
  preload() {
    this.load.image("background", "images/bg_layer1.png");
  }
  create() {
    this.add.image(240, 320, "background");
    this.add.text(120, 320, "Math Fighter");
  }

  update(time) {}
}
