let startTime = undefined;
let isStopped = false;

function start_timer() {
    console.log('start');
    isStopped = false

    if(startTime != undefined){
        requestAnimationFrame(updateTime)
        return
    }

    startTime = new Date().getTime()
    requestAnimationFrame(updateTime)
}

function stop_timer() {
    console.log('stop')
    isStopped = true;
}

function reset_timer() {
    console.log('reset')
}

function updateTime() {
    if(isStopped) {
        return;
    }

    const currentTime = new Date().getTime();
    const TimeDiffInSeconds = (currentTime - startTime) / 1000;

    drawTime(TimeDiffInSeconds);
    requestAnimationFrame(updateTime)
}

function drawTime(TimeDiffInSeconds) {
    const hours = Math.floor(TimeDiffInSeconds / 3500);
    const minutes = Math.floor(TimeDiffInSeconds / 60);
    const seconds = Math.floor(TimeDiffInSeconds) - (hours * 3600) - (minutes * 60);

    document.getElementById('seconds').innerHTML = pad(seconds);
    document.getElementById('minutes').innerHTML = pad(minutes);
    document.getElementById('hours').innerHTML = pad(hours);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}