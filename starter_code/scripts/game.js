const backgroundSound = new Audio("sounds/background-music.mp3");

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
        this.lightning = new Lightning(this);
        this.pickTrash = 0;
        this.hasTrash = false;
        this.containerTrash = 0;
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
        this.trashGrabbed = [];
        this.lightningGrabbed = [];
    }

    startGame() {
        this.animation();
        this.controls.setControls();
    }

    drawEverything() {
        this.clearAll();
        this.beachMap.drawBeachmap();
        this.container.drawContainer();
        this.timer.startTimer();
        this.timer.drawTimer();
        for (let i = 0; i < this.trashArray.length; i++) {
            for (let j = 0; j < this.trashArray.length; j++) {
                if (this.trashArray[i].x + this.trashArray[i].size === this.trashArray[j].x + this.trashArray[j].size &&
                    this.trashArray[i].y + this.trashArray[i].size === this.trashArray[j].y + this.trashArray[j].size) {
                    this.trashArray[i].x + 10;
                    this.trashArray[i].y + 10;
                }
            }
            this.trashArray[i].drawTrash();
        }
        this.shark.drawShark();
        this.lightning.drawLightning();
        if (this.player.y < 365) {
            this.player.drawPlayerhead();
        } else {
            this.player.drawPlayer();
        }
        this.player.update();
        // this.timer.drawTimer();

    }
    animation() {
        backgroundSound.play();
        if (this.trashArray.length === 0) {
            this.winning();
        } else if (this.timer.currentTime === 0) {
            this.gameOver();
        } else if (this.player.x < this.shark.x + this.shark.size &&
            this.player.x + this.player.size > this.shark.x &&
            this.player.y < this.shark.y + this.shark.size &&
            this.player.y + this.player.size > this.shark.y) {
            this.gameOver();
        } else {
            this.drawEverything();
            this.updateEverything();
        }
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }

    updateEverything() {
        this.shark.updateShark();
        //stop the lightning if is the time is over
        if (this.lightning.currentTime === 0) {
            this.player.lightning = false;
            this.lightning.currentTime = 500;
            //if the player is has the lightning, this condition is going to 
            //draw and start the timer lightning.
        } else if (this.player.lightning === true) {
            this.lightning.drawTimerlightning();
            this.lightning.startTimerlightning();
        }
        this.lightning.updateLightning();
        if (this.player.x < this.lightning.x + this.lightning.size &&
            this.player.x + this.player.size > this.lightning.x &&
            this.player.y < this.lightning.y + this.lightning.size &&
            this.player.y + this.player.size > this.lightning.y) {
            this.player.lightning = true;
        }
        //updating the trash
        for (let i = 0; i < this.trashArray.length; i++) {
            this.trashArray[i].updateTrash();
            if (this.trashArray.length > 20) {
                this.trashArray.shift();
            }
        }
        for (let i = 0; i < this.trashArray.length; i++) {
            if (this.player.x < this.trashArray[i].x + this.trashArray[i].size &&
                this.player.x + this.player.size > this.trashArray[i].x &&
                this.player.y < this.trashArray[i].y + this.trashArray[i].size &&
                this.player.y + this.player.size > this.trashArray[i].y) {
                this.trashGrabbed.push(this.trashArray[i]);
            }
            if (this.trashGrabbed.length) {
                this.trashGrabbed[0].x = this.player.x + 20;
                this.trashGrabbed[0].y = this.player.y

            }
            //check the collision between my player and my trash(element of array)
            //check the collision between my player+trash 
            if (this.trashArray[i].x > this.container.x - 25 &&
                this.trashArray[i].y > this.container.y - 25) {
                this.trashArray.splice(i, 1)
                this.trashGrabbed = [];
            }
        }
    }

    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOver() {
        backgroundSound.pause();
        context.rect(0, 150, 500, 200);
        context.fillStyle = 'brown';
        context.fill();
        context.fillStyle = 'white';
        context.font = '40px Courier';
        context.fillText(`Game Over!`, 140, 260);
        context.font = '16px Courier';
        context.fillText(`Click "StartGame" to restart the game`, 80, 290);
    }

    winning() {
        backgroundSound.pause();
        context.rect(0, 150, 500, 200);
        context.fillStyle = 'green';
        context.fill();
        context.fillStyle = 'white';
        context.font = '40px Courier';
        context.fillText(`You Win!!!`, 140, 260);
        context.font = '16px Courier';
        context.fillText(`Click "StartGame" to play again`, 85, 290);
    }
}