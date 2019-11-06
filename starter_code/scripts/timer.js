class Timer {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.minuto = 60000; // how long the timer should run
    }

    drawTimer() {
        context.font = '16px Courier';
        context.fillStyle = 'Black';
    }

    updateTimer(){
        let endDate = new Date("Nov 6, 2019 12:00:00").getTime();
        let timer = setInterval(function() {

            let now = newDate().getTime();
            let t = endDate - now;
            
            if (t >= 0) {
                let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((t % (1000 * 60)) / 1000);
                document.getElementById("timer-mins").innerHTML = ("0"+minutes).slice(-2) +
                "<span class='label'>MIN(S)</span>";
            
                document.getElementById("timer-secs").innerHTML = ("0"+seconds).slice(-2) +
                "<span class='label'>SEC(S)</span>";
            
            } else {
        
                document.getElementById("timer").innerHTML = "The countdown is over!";
            
            }
            
        }, 1000);
    }
}