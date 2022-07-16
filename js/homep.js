function timestampletter(){
    let pg1=document.querySelector("#card")
    pg1.style.display="none"
    let pg2=document.querySelector("#letter")
    pg2.style.display="block"
}
function postcard(){
    let pg1=document.querySelector("#card")
    pg1.style.display="block"
    let pg2=document.querySelector("#letter")
    pg2.style.display="none"
}
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
