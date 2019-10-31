const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  
    function startGame() {
        drawEverything();
    }
}

let car = new Car();

function drawEverything() {
    drawRacemap();
    car.drawCar();
}

window.addEventListener('keydown', event => {
    event.preventDefault();
    switch (event.keyCode) {
      case 37:
        car.moveLeft();
        drawEverything();
        break;
      case 39:
        car.moveRight();
        drawEverything();
        break;
    }
});