 class Time{
    constructor(time=60,timer=null,p=false){
        this.time = time;
        this.timer= timer;
        this.p = p;
    }

    start(){
        if(!this.p){
      this.timer = setInterval(()=>{
      this.time--
      console.log(this.time)
    },1000) 
        }
      }
   
}



