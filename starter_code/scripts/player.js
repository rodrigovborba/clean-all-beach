class Player {
  constructor(game) {
    this.game = game;
    this.height = game.height
    this.width = game.width
    this.context = game.context
    this.x = 23;
    this.y = 410;
    this.vx = 0;
    this.vy = 0.2;
    this.img = new Image();
    this.size = 45;
    this.img.src = 'images/player.png';

  }
  drawPlayer() {
    this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }


  // updatePlayer() {
  //   this.x += this.vx;
  //   this.y += this.vy;

  //   // To add as a limit the border of the canvas
  //   if (this.x <= this.size) {
  //     this.x = this.size
  //   } else if (this.x >= this.width - this.size) {
  //     this.x = this.width - this.size
  //   } else if (this.y <= this.size) {
  //     this.y = this.size
  //   } else if (this.y >= this.height - this.size) {
  //     this.y = this.height - this.size
  //   }
  // }
}