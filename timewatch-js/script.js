const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let seconds = 0;
let tens = 0;
let Interval;

buttonStart.onclick = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    console.log(seconds);
    seconds++;
    appendSeconds.innerHTML = seconds;
    tens = 0;
    appendTens.innerHTML = 0;
  }
}

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = () => {
  clearInterval(Interval);

  tens = 0;
  seconds = 0;
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
};
