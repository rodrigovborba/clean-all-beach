class Container {
    constructor(game) {
        this.game = game;
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = 410;
        this.y = 400;
        this.size = 92;
        this.img = new Image();
        this.img.src = 'images/trashcan.png';

    }
    drawContainer() {
        this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
}