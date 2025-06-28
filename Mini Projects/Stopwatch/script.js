let startTime = 0;
let elapsedTime = 0;
let interval;
let running = false;

function start(){
    if(!running){
       running = true;
       startTime = Date.now() - elapsedTime;
       interval = setInterval(updateDisplay, 10); 
    }
}

function stop(){
    if(running){
        running = false;
        clearInterval(interval);
        elapsedTime = Date.now() - startTime;
    }
}

function reset(){
    running = false;
    clearInterval(interval);
    startTime = 0;
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00:00";
}

function updateDisplay(){
    elapsedTime = Date.now() - startTime;

    const ms = Math.floor((elapsedTime % 1000) / 10);
    const sec = Math.floor((elapsedTime/1000) % 60);
    const min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hrs = Math.floor(elapsedTime / (1000 * 60 * 60));

    document.getElementById("display").innerText = `${pad(hrs)}:${pad(min)}:${pad(sec)}:${pad(ms)}`;
}

function pad(n){
    return n.toString().padStart(2, "0");
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
document.getElementById("resetBtn").addEventListener("click", reset); 
