class Lightning {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.width = game.width;
        this.height = game.height;
        this.x = 300;
        this.y = 50;
        this.size = 40;
        this.vx = 0.5;
        this.vy = 0.3;
        this.image = new Image();
        this.image.src = "images/lightning.png"
        this.currentTime = 500
    }

    drawLightning() {
        if (this.game.player.lightning === false){
        this.context.drawImage(this.image, this.x, this.y, this.size, this.size);
        }
    }

    randomX() {
        return Math.floor((Math.random() * this.game.width - 80) + 10) //todo:change with canvas.width
    }

    randomY() {
        return Math.floor((Math.random() * this.game.height - 180) + 10) //todo: change w/ canvas height
    }

    updateLightning() {
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

    startTimerlightning() {
        if (this.currentTime > 0){
        this.currentTime--
        }
    }

    drawTimerlightning() {
        this.context.font = "26px serif";
        this.context.fillStyle = "green";
        let seconds = (this.currentTime / 100).toFixed(0);
        this.context.fillText(`0:${seconds}`, this.width - 34, this.height -440);
    }
}