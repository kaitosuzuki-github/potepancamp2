let IntervalId;

let hours = 0;
let minutes = 0;
let seconds = 0;
let mmSeconds = 0;

let displayElement = document.getElementById("display");
let startElement = document.getElementById("start");
let stopElement = document.getElementById("stop");
let resetElement = document.getElementById("reset");

function timeUpdate() {
  mmSeconds++;
  if (mmSeconds == 10) {
    seconds++;
    mmSeconds = 0;
  }

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
  }

  if (hours == 60) {
    hours = 0;
    minutes = 0;
    seconds = 0;
    mmSeconds = 0;
  }

  displayElement.innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + mmSeconds;
}

function startEvent() {
  IntervalId = setInterval(timeUpdate, 100);
  startElement.disabled = true;
  stopElement.disabled = false;
  resetElement.disabled = false;
}

function stopEvent() {
  clearInterval(IntervalId);
  startElement.disabled = false;
  stopElement.disabled = true;
  resetElement.disabled = false;
}

function resetEvent() {
  clearInterval(IntervalId);
  displayElement.innerHTML = "0:0:0:0";
  hours = 0;
  minutes = 0;
  seconds = 0;
  mmSeconds = 0;
  startElement.disabled = false;
  stopElement.disabled = true;
  resetElement.disabled = true;
}
