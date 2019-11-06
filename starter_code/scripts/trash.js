class Trash {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.height = game.height;
        this.width = game.width;
        this.x = this.randomX();
        this.y = this.randomY();
        this.size = 40;
        this.img = new Image();
        this.array = [
            'images/apple-trash.png',
            'images/bottle-trash.png',
            'images/can-trash.png',
            'images/cookie-trash.png',
            'images/dead-fish-trash.png',
            'images/eggs-box-trash.png',
            'images/fork-trash.png',
            'images/fries-trash.png',
            'images/paper-trash.png',
            'images/pizza-box-trash.png',
            'images/pizza-trash.png',
            'images/socks-trash.png',
            'images/tooth-paste-trash.png'
        ]
        this.img.src = this.randomImg(this.array);
    }

    drawTrash() {
        //this.img.src = this.randomImg(this.array);
        if (this.y > 0 && this.x > 0){
        this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
        }
    }

    randomX() {
        return Math.floor((Math.random() * this.game.width - 80) + 10) //todo:change with canvas.width
    }

    randomY() {
        return Math.floor((Math.random() * this.game.height - 180) + 10) //todo: change w/ canvas height
    }

    randomImg(imgArr) {
        let indImg = Math.floor(Math.random() * (imgArr.length - 1));
        return imgArr[indImg]
        // let randomIndex = Math.round(Math.random()*(imgArr.length - 1));//todo: confirm formula
    }

    updateTrash() {
        // this.x += 30;
        // this.y += 30;

        if (this.x <= this.size) {
            this.x = this.size
        } else if (this.x >= this.width - this.size) {
            this.x = this.width - this.size
        } else if (this.y <= this.size) {
            this.y = this.size
        } else if (this.y >= this.height - this.size) {
            this.y = this.height - this.size
        }
    }
}