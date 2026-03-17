(function(){
  var stars = [];
  var colors = ["#ffffff","#ffeb3b","#03a9f4","#e91e63","#8bc34a"];
  
  function createStar(e){
    var s = document.createElement("div"); // 改成 div 更稳定
    s.className = "star";
    s.style.position = "fixed";
    s.style.width = "8px";
    s.style.height = "8px";
    s.style.borderRadius = "50%";
    s.style.background = colors[Math.floor(Math.random()*colors.length)];
    s.style.boxShadow = "0 0 10px rgba(255,255,255,0.8)";
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.pointerEvents = "none";
    s.style.zIndex = "100"; // 👈 放到背景
    document.body.appendChild(s);
    
    stars.push({el: s, x: e.clientX, y: e.clientY, alpha:1, scale:1});
  }
  
  function animateStars(){
    for(var i=0;i<stars.length;i++){
      stars[i].y -= 2;
      stars[i].scale += 0.08;
      stars[i].alpha -= 0.03;
      stars[i].el.style.top = stars[i].y + "px";
      stars[i].el.style.transform = "scale("+stars[i].scale+")";
      stars[i].el.style.opacity = stars[i].alpha;
      if(stars[i].alpha <= 0){
        document.body.removeChild(stars[i].el);
        stars.splice(i,1);
        i--;
      }
    }
    requestAnimationFrame(animateStars);
  }
  
  document.addEventListener("mousemove", createStar);
  requestAnimationFrame(animateStars);
})();