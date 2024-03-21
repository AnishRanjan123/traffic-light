function startTrafficSignal() {
  const green = document.getElementById("greenlight");
  const red = document.getElementById("redlight");
  const yellow = document.getElementById("yellowlight");
  const green1 = document.getElementById("greenlight-button");
  const red1 = document.getElementById("redlight-button");
  const yellow1 = document.getElementById("yellowlight-button");


  red.style.opacity = 1;

  setInterval(() => {
     red.style.opacity = 1;
     yellow.style.opacity = 0.0;
      green.style.opacity = 0.0;
    red1.style.opacity = 1;
     yellow1.style.opacity = 0.0;
      green1.style.opacity = 0.0;



  }, 10000);

  setInterval(() => {
     red.style.opacity = 0.0;
     yellow.style.opacity = 1;
     green.style.opacity = 0.0;
    red1.style.opacity = 0.0;
     yellow1.style.opacity = 1;
     green1.style.opacity = 0.0;




  }, 20000);

  setInterval(() => {

    red.style.opacity = 0.0;
      yellow.style.opacity = 0.0;
     green.style.opacity = 1;
    red1.style.opacity = 0.0;
      yellow1.style.opacity = 0.0;
     green1.style.opacity = 1;
  }, 22000);
  setInterval(()=>
    {
      let a=new Date();
      let h=a.getHours();
      let m=a.getMinutes();
      let s=a.getSeconds();
      h=(h<10?"0":" ")+h;
      m=(m<10?"0":" ")+m;
      s=(s<10?"0":" ")+s;
      var timeString = h + ":" + m + ":" + s;
      document.getElementById("container").innerText = timeString;
    },1000);
}
 startTrafficSignal(); 





