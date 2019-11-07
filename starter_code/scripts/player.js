class Player {
  constructor(game) {
    this.game = game;
    this.height = game.height
    this.width = game.width
    this.context = game.context
    this.x = 23;
    this.y = 410;
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.size = 45;
    this.img.src = 'images/player.png';

  }
  drawPlayer() {
    this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  moveUp() {
    //this.positionY -= 10
  this.vy = -2
       this.direction = 'N'
   }
   moveDown() {
       this.vy = 2
       this.direction = 'S'
   }
   moveLeft() {
       this.vx = -2
       this.direction = 'W'
   }
   moveRight() {
       this.vx = 2
       this.direction = 'E'
   }
update() {
       if (this.x + this.vx > 0 && this.x + this.vx + this.size < this.game.width){
           this.x += this.vx;
       }
       if (this.y + this.vy > 0 && this.y + this.vy + this.size < this.game.height){
           this.y += this.vy;
       }
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