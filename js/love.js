(function(){
  var hearts = [];
  function randomColor(){
    return "rgb(" + ~~(255*Math.random()) + "," + ~~(255*Math.random()) + "," + ~~(255*Math.random()) + ")";
  }
  function createHeart(e){
    var d = document.createElement("div");
    d.className = "heart";
    d.style.position="fixed";
    d.style.zIndex="9999"; // 👈 在最上层
    d.style.pointerEvents="none";
    d.style.left = e.clientX-5 + "px";
    d.style.top = e.clientY-5 + "px";
    d.style.color = randomColor();
    d.style.fontSize = "30px"
    d.innerText = "❤";
    document.body.appendChild(d);
    hearts.push({el:d,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1});
  }
  function gameloop(){
    for(var i=0;i<hearts.length;i++){
      if(hearts[i].alpha<=0){
        document.body.removeChild(hearts[i].el);
        hearts.splice(i,1);
        i--;
        continue;
      }
      hearts[i].y-=1;
      hearts[i].scale+=0.03
      hearts[i].alpha-=0.01;
      hearts[i].el.style.top = hearts[i].y+"px";
      hearts[i].el.style.transform = "scale("+hearts[i].scale+")";
      hearts[i].el.style.opacity = hearts[i].alpha;
    }
    requestAnimationFrame(gameloop);
  }
  window.addEventListener("click",createHeart);
  requestAnimationFrame(gameloop);
})();