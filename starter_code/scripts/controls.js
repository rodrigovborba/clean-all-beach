class Controls {
    constructor(game) {
        this.game = game;
    }

    setControls() {
        window.addEventListener('keydown', event => {
            switch (event.keyCode) {
                //LEFT
                case 37:
                    event.preventDefault();
                    this.game.player.x += -5
                    break;
                    //RIGHT
                case 39:
                    event.preventDefault();
                    this.game.player.x += 5
                    break;
                    //UP
                case 38:
                    event.preventDefault();
                    this.game.player.y += -5
                    break;
                    //DOWN
                case 40:
                    event.preventDefault();
                    this.game.player.y += 5
                    break;
            }
        })
        window.addEventListener('keyup', event => {
            switch (event.keyCode) {
                //LEFT
                case 37:
                    this.game.player.vx = 0
                    break;
                    //RIGHT
                case 39:
                    this.game.player.vx = 0
                    break;
                    //UP
                case 38:
                    this.game.player.vy = 0
                    break;
                    //DOWN
                case 40:
                    this.game.player.vy = 0
                    break;
            }
        })
    }
}