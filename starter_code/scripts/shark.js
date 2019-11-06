class Shark {
    constructor(game) {
        this.game = game;
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = 100;
        this.y = 100;
        this.vx = 2;
        this.vy = 0.5;
        this.img = new Image();
        this.size = 45
        this.img.src = 'images/shark.png';

    }
    drawShark() {
        this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
    }

    updateShark() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > this.height - 230 || this.y + this.vy < 0) {
            this.vy *= -1;
        }
        if (this.x + this.vx > this.width - 30 || this.x + this.vx < 0) {
            this.vx *= -1;
        }
        
        
        setInterval(this.updateShark, 20);
    }
}