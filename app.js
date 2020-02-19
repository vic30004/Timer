const play = document.querySelector("#play")
const stop = document.querySelector("#stop")
const pause = document.querySelector("#pause")
const timerDisplay = document.querySelector('h1')

class Time {
  constructor(time, timer = null) {
    this.time = time;
    this.timer = timer;
    this.timeCopy=this.time
    timerDisplay.textContent=this.time;
  }


  start() {
      this.timer = setInterval(() => {
        timerDisplay.textContent--;
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


play.addEventListener('click',(e)=>{
  e.preventDefault();
  time.start()
})
stop.addEventListener('click',(e)=>{
  e.preventDefault();
  time.stop()
})
pause.addEventListener('click',(e)=>{
  e.preventDefault();
  time.pause()
})
