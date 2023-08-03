
let timerDisplay = document.querySelector('.time');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.push');
let resetButton = document.querySelector('.stop');


let startTime;
let zero = 0;
let timerInterval;

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    return (
        appendZero(hours) + ":" + appendZero(minutes) + ":" + appendZero(seconds)
    );
}
function appendZero(x) {
    if (x >= 0 && x <= 9) {
        x = "0" + x;
    }
    return x;
}

function updateTimer() {
    let currentTime = Date.now();
    zero = currentTime - startTime;
    timerDisplay.innerHTML = formatTime(zero);
}

function startTimer() {
    startTime = Date.now() - zero;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    zero = 0;
    timerDisplay.innerHTML = formatTime(zero);
    startButton.disabled = false;
}


startButton.onclick = () => {
    startTimer()
};
stopButton.onclick = () => {
    stopTimer()
};
resetButton.onclick = () => {
    resetTimer()
};
