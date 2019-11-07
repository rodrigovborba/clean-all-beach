const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;

window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        let game = new Game($canvas);
        game.startGame();
        // let timer = new Timer
        // game.timer.startTimer();
    }
}
//         let timer = new Timer;
//         const minDec = document.getElementById('min-dec');
//         const minUni = document.getElementById('min-uni');
//         const secDec = document.getElementById('sec-dec');
//         const secUni = document.getElementById('sec-uni');
//         timer.startClick();

//         function printTime() {
//             printMinutes()
//             printSeconds()
//             // printMilliseconds()
//         }

//         function printMinutes() {
//             minDec.innerText = timer.twoDigitsNumber(timer.getMinutes())[0]
//             minUni.innerText = timer.twoDigitsNumber(timer.getMinutes())[1]
//         }

//         function printSeconds() {
//             secDec.innerText = timer.twoDigitsNumber(timer.getSeconds())[0]
//             secUni.innerText = timer.twoDigitsNumber(timer.getSeconds())[1]
//         }
            
//         timer.startClick()
//             setInterval(() => {
//               printTime()
//             }, -1);
//     }

// }