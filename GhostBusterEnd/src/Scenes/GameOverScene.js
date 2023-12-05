import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("game-over-scene");
  }
  init(data) {
    this.score = data.score;
  }
  preload() {
    this.load.image("background", "images/background.png");
    this.load.image("game-over-text", "images/gameover.png");
    this.load.image("replay-button", "images/replay.png");
  }
  create() {
    //Create Background
    this.add.image(500, 500, "background").setScale(1.8);
    this.add.image(500, 500, "game-over-text").setScale(1.8);

    this.replayButton = this.add
      .image(500, 850, "replay-button")
      .setInteractive();

    this.replayButton.once(
      "pointerup",
      () => {
        this.scene.start("ghost-buster-scene");
      },
      this
    );
    this.add.text(200, 700, "SCORE:", { fontSize: "64px", color: "#FFFFFF" });
    this.add.text(450, 700, this.score, { fontSize: "64px", color: "#FFFFFF" });
  }
}
