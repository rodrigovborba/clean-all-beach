const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;

window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        $canvas.style.display = "flex";
        let game = new Game($canvas);
        game.startGame();
        // let timer = new Timer
        // game.timer.startTimer();
    }
}