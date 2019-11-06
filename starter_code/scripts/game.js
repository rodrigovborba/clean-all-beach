class Game {
    constructor($canvas) {
        this.canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.width = $canvas.width;
        this.height = $canvas.height;
        this.beachMap = new Beachmap(this);
        this.player = new Player(this);
        this.container = new Container(this);
        this.controls = new Controls(this);
        this.shark = new Shark(this);
        this.timer = new Timer(this);
        this.pickTrash = 0;
        this.hasTrash = false;
        this.trashArray = [
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
            new Trash(this),
        ];
    }

    startGame() {
        this.animation();
        this.controls.setControls();
    }

    drawEverything() {
        this.clearAll();
        this.beachMap.drawBeachmap();
        this.container.drawContainer();
        this.timer.drawTimer();
        for (let i = 0; i < this.trashArray.length; i++) {
            this.trashArray[i].drawTrash();
        }
        this.shark.drawShark();
        this.player.drawPlayer();

    }
    animation() {
        this.drawEverything()
        if (this.player.x < this.shark.x + this.shark.size &&
            this.player.x + this.player.size > this.shark.x &&
            this.player.y < this.shark.y + this.shark.size &&
            this.player.y + this.player.size > this.shark.y) {
            this.gameOver();
        } else {
            this.updateEverything()
        }
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }

    updateEverything() {
        this.shark.updateShark();
        this.timer.updateTimer();
        for (let i = 0; i < this.trashArray.length; i++) {
            this.trashArray[i].updateTrash();
            if (this.trashArray.length > 20) {
                this.trashArray.shift();
            }
        }
        for (let i = 0; i < this.trashArray.length; i++) {
            if (this.player.x + 20 === this.trashArray[i].x &&
                this.player.y === this.trashArray[i].y) {
                this.trashArray[i].x = this.trashArray[i].x
                this.trashArray[i].y = this.trashArray[i].y
                console.log(this.trashArray[i].x, this.trashArray[i].y)
            }
            //check the collision between my player and my trash(element of array)
            else if (this.player.x < this.trashArray[i].x + this.trashArray[i].size &&
                this.player.x + this.player.size > this.trashArray[i].x &&
                this.player.y < this.trashArray[i].y + this.trashArray[i].size &&
                this.player.y + this.player.size > this.trashArray[i].y) {
                console.log('entering the second condition')
                this.trashArray[i].x = this.player.x + 20
                this.trashArray[i].y = this.player.y
            }
            //check the collision between my player+trash 
            if (this.trashArray[i].x > this.container.x - 25 &&
                this.trashArray[i].y > this.container.y - 25) {
                this.trashArray.splice(i, 1)
                console.log('entering the third condition')
            }
        }
    }

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOver() {
        context.rect(0, 150, 500, 200);
        context.fillStyle = 'Black';
        context.fill();
        context.fillStyle = 'white';
        context.font = '40px Courier';
        context.fillText(`Game Over!`, 140, 260);
        context.font = '16px Courier';
        context.fillText(`Click "StartGame" to restart the game`, 80, 290);
    }
}