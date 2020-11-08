let speed=document.querySelector(".speed");
let speedBar=document.querySelector(".speed-bar");
let video=document.querySelector("video");
function moveHandler(e){
  let y=e.pageY-this.offsetTop;
  let percent=y/this.offsetHeight;
  let height=Math.round(percent * 100);
  speedBar.style.height=height+"%"
   let max=4;
   let min=0.4;
  
  percent=percent*(max-min)+0.4
  speedBar.textContent=Math.round(percent * 100)/100+"x";
  video.playbackRate = percent;
 
  console.log(height);

};
speed.addEventListener("mousemove",moveHandler);