let startTime, elapsedTime = 0, timerInterval;


function startStopwatch(){
    startTime= Date.now() - elapsedTime;
    timerInterval= setInterval(function printTime(){
        elapsedTime= Date.now() - startTime;
        displayTime(elapsedTime);
    },1000)
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
}



function displayTime(elapsedTime){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime% (1000 * 60)) / 1000);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;


}