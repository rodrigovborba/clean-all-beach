class Beachmap {
    constructor(game) {
        this.game = game;
        this.height = height;
        this.width = width;
        this.context = game.context;
        this.img = new Image();
        this.img.src = 'images/beach1.jpg';
        this.x = 0;
    }

    drawBeachmap() {
        this.context.drawImage(this.img, this.x, 0, this.width, this.height);
        this.context.drawImage(this.img, this.x + this.width, 0, this.width, this.height);
    }

}