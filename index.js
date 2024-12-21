var i = 0;
var txt = 'PLACEHOLDER'; 
var speed = 300; 


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
}
typeWriter()


// Sticky navbar
const nav= document.querySelector('.nav')
window.addEventListener('scroll',fixnav)


function fixnav(){
    // console.log(window.scrollY,nav.offsetHeight)
    if(window.scrollY>nav.offsetHeight+17){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}



      //  For Menu 


 let MenuItems = document.getElementById("MenuItems");

 MenuItems.style.maxHeight = "0px";

 function menutoggle(){
     if( MenuItems.style.maxHeight =="0px"){
         MenuItems.style.maxHeight = "300px"
     }
     else{
          MenuItems.style.maxHeight = "0px"
    }
 }