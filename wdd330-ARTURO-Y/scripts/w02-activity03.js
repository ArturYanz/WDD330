const countDown = document.getElementById("countDown");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

let timeLeft = 10;
let running = false;
let interval = null;


function tick() {
    if (timeLeft > 0) {
        countDown.textContent = timeLeft;
        timeLeft--;
    } else {
        clearInterval(interval);
        interval = null;
        running = false;
        setTimeout(() => {
            countDown.textContent = "Time's Up!";
        }, 500);
    }
}

startButton.addEventListener("click", () => {
    if (!running) {
        running = true;
        interval = setInterval(tick, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    if (running) {
        clearInterval(interval);
        interval = null;
        running = false;
        pauseButton.textContent = "Resume";
    } else if (timeLeft > 0) {
        running = true;
        interval = setInterval(tick, 1000);
        pauseButton.textContent = "Pause";
    }
});