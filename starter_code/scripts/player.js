class Player {
  constructor(game) {
    this.game = game;
    this.height = game.height
    this.width = game.width
    this.context = game.context
    this.radius = 23;
    this.x = this.radius;
    this.y = this.radius * 10 - 20;
    this.vx = 0;
    this.vy = 0;
    this.score = 0;
    this.img = new Image();
    this.size = 2 * this.radius
    this.img.src = 'images/player.png';

  }
  drawPlayer() {
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
    this.context.restore();
  }
  checkCollision(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.radius + b.radius;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // To add as a limit the border of the canvas
    if (this.x - this.radius < 0) this.x = this.radius;
    if (this.x + this.radius > this.width)
      this.x = this.width - this.radius;
    if (this.y - this.radius < 0) this.y = this.radius;
    if (this.y + this.radius > this.height)
      this.y = this.height - this.radius;
  }
}