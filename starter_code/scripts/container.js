class Container {
    constructor(game) {
        this.game = game;
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.radius = 23;
        this.x = this.radius * 8;
        this.y = this.radius * 8.5;
        this.vx = 0;
        this.vy = 0;
        this.score = 0;
        this.img = new Image();
        this.size = this.radius * 4;
        this.img.src = 'images/trashcan.png';

    }
    drawContainer() {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
        this.context.restore();
    }
}