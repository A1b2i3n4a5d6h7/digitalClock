setInterval(function(){
    let time = document.querySelector('.displayClock');
    let timeNow = new Date().toLocaleTimeString();
    time.innerHTML = timeNow;
  },1000);

  var icon=document.getElementById("icon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="./images/sun.png"
    }else{
        icon.src="./images/moon.png"
    }
  }