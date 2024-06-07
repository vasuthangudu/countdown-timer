let countdown;
let isRunning = false;
let initialTime = 600; // 10 minutes in seconds
let timeRemaining = initialTime;

const minuteDisplay = document.querySelector('#minute');
const secondDisplay = document.querySelector('#second');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    minuteDisplay.textContent = String(minutes).padStart(2, '0');
    secondDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            isRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeRemaining = initialTime;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay(); // Initial display update
