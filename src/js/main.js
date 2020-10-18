
nav = document.querySelector("header");

document.querySelector(".nav-toggle").onclick=function(){
nav.classList.toggle("nav-open");
}

document.querySelector(".nav-background").onclick=function(){
nav.classList.toggle("nav-open");
}



window.onload = function(){
    setTimeout(function(){
      document.getElementById('vidgame').src = 'https://www.youtube.com/embed/vWv1mPzpUf4';
    },1000);
   }; 