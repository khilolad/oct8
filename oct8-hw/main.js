let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function time(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
}
setInterval(time, 1000);
time()
