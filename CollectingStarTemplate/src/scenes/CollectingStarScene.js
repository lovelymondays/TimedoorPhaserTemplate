import Phaser from "phaser";

export default class CollectingStarsScene extends Phaser.Scene {
  constructor() {
    super("collecting-stars-scene");
  }
  preload() {
    this.load.image("sky", "images/sky.png");
  }
  create() {
    this.add.image(400, 300, "sky");
  }

  update() {}
}
