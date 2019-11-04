function randomX() {
    return Math.floor((Math.random() * 200) + 50)
}

function randomY() {
    return Math.floor((Math.random() * 400) + 10)
}

class Trash {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.x = randomX();
        this.y = randomY();
        this.img = new Image();
        img.src = 'images/trash.jpg'
    }
    drawTrash() {
        this.context.drawImage(this.img, randomX(), randomY())
    }
}