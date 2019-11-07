class Timer {
    constructor(game) {
        this.context = game.context;
        this.width = game.width;
        this.height = game.height;
        this.currentTime = 3000;
        this.intervalId
        this.game = game
    }
    startTimer() {
        if (this.currentTime > 0){
        this.currentTime--
        }
        // this.intervalId = setInterval(() => {
        //     this.currentTime -= 1;
        // }, 1000);
        // console.log(this.currentTime);
    }

    drawTimer() {
        this.context.font = "26px serif";
        this.context.fillStyle = "white";
        this.context.fillText(`0:${this.currentTime}`, this.width - 46, this.height -470);
    }
}