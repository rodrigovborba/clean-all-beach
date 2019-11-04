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
        this.trash = [];
    }

    startGame() {
        this.animation();
        this.controls.setControls();
        this.drawEverything();
    }

    drawEverything() {
        this.clearAll();
        this.beachMap.drawBeachmap();
        this.container.drawContainer();
        this.player.drawPlayer();
        for (let i = 0; i < this.trash.length; i++) {
            this.trash[i].drawObstacles();
        }
    }


    animation(timestamp) {
        this.drawEverything()
        this.updateEverything(timestamp)
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }
    updateEverything(timestamp) {
        if (this.obstacleTimer < timestamp - this.speed) {
            this.obstacles.push(new Obstacles(this));
            this.obstacleTimer = timestamp;
        }

        for (let i = 0; i < this.trash.length; i++) {
            this.obstacles[i].update();
            if (this.obstacles.length > 20) {
                this.obstacles.shift();
            }
        }
    }
    
    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resetGame() {
        this.player = new Player(23, 210);
    }
}