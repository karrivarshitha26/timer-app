let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const shortBreakButton = document.getElementById('short-break');
const longBreakButton = document.getElementById('long-break');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    display.textContent = `${minutes}:${seconds}`;  // Fixed template literal
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert('Time is up!'); // You can replace this with an audio alert
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60; // Reset to Pomodoro time
    updateDisplay();
}

function setShortBreak() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 5 * 60; // 5 minutes
    updateDisplay();
}

function setLongBreak() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 15 * 60; // 15 minutes
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
shortBreakButton.addEventListener('click', setShortBreak);
longBreakButton.addEventListener('click', setLongBreak);

updateDisplay(); // Initial display update
