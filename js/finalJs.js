// section reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);


// Counter
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Projects",104,50);
numCounter("Clients",100,12);
numCounter("Partners",436,10);
numCounter("Supports",400,10);

// Back to top btn
window.addEventListener("scroll",handle)
            function handle(){
                var oTop = document.body.scrollTop||document.documentElement.scrollTop
                if(oTop>=200){
                    gotop.style.display = "block";
                }else{
                    gotop.style.display = "none";
                }

                gotop.onclick = function(){
                    window.scrollTo({
                        top:0,
                        behavior:"smooth"
                    })
                }
            }
