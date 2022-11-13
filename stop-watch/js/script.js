const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')

let isStopped = true;
let offset = 0;

function start_timer() {
    if (isStopped) {
        isStopped = false;
        offset -= Date.now();
        render();

        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

function stop_timer() {
    if ( ! isStopped) {
        offset += Date.now();
        isStopped = true;

        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function reset_timer() {
    if (isStopped) {
        offset = 0;
        render();
    } else {
        offset = -Date.now();
    }
}

function format(value, scale, modulo, padding) {
    value = Math.floor(value / scale) % modulo
    return value.toString().padStart(padding, 0);
}

function render() {
    const current = isStopped ? offset : Date.now() + offset;

    milliseconds.innerHTML = format(current, 1, 1000, 3);
    seconds.innerHTML = format(current, 1000, 60, 2);
    minutes.innerHTML = format(current, 60000, 60, 2);
    hours.innerHTML = format(current, 360000, 60, 2);

    if ( ! isStopped) {
        requestAnimationFrame(render);
    }
}
