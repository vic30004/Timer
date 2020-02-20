const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const timerDisplay = document.querySelector("h1");
const span = document.querySelector('span')

class Time {
  constructor(time, timer = null, end=false) {
    this.time = time;
    this.timer = timer;
    this.timeCopy = this.time;
    this.end=end
    timerDisplay.textContent = this.time;
  }

  start() {
    this.timer = setInterval(() => {
        timerDisplay.textContent--;
        if(timerDisplay.textContent<=0){
          clearInterval(this.timer)
          span.classList.remove('spin')
          play.innerText="Reset";
        }
    }, 1000);
  }
  pause() {
    clearInterval(this.timer);
  }

  stop() {
    timerDisplay.textContent = this.timeCopy;
    clearInterval(this.timer);
  }
}
let count = window.prompt("Select a time")
const time = new Time(parseInt(count));

play.addEventListener("click", e => {
  e.preventDefault();
  console.log(play.innerHTML.toLowerCase());
  if (play.innerHTML.toLowerCase() === "play") {
    time.start();
    play.innerHTML = "Pause";
    console.log(play.textContent);
    span.className="spin"
  } else if (play.textContent.toLowerCase() === "pause") {
    time.pause();
    play.innerHTML = "Play";
    span.classList.remove('spin')
    console.log("clicked");
    return;
  }
  else if(play.textContent.toLowerCase() === "reset"){
    play.innerHTML = "Play";
    time.stop();
    span.classList.remove('spin')

  }
});
stop.addEventListener("click", e => {
  e.preventDefault();
  time.stop();
  play.textContent="Play"
  span.classList.remove('spin')

});
