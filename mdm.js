// let btn = document.getElementById('button')
// let side = document.getElementById('side')
// let cancel = document.getElementById('cancel')
// let nav = document.getElementById('nav')

// btn.addEventListener('click', ()=>{

//   side.style.display = 'flex'
//   nav.style.display = 'none'
// })

// cancel.addEventListener('click', ()=>{
//     side.style.display = 'none'
//     nav.style.display = 'block'
// })







//opening the side bar

let btn = document.getElementById('button')
let side = document.getElementById('side')
let cancel = document.getElementById('cancel')
let nav = document.getElementById('nav')
let flexbox = document.getElementById('flexbox')
let notice = document.getElementById('notice')

//opening the login portal

let user = document.getElementById('user')
let signUp = document.getElementById('signUp')

let option = document.getElementById('option')
let option2 = document.getElementById('option2')

let logIn = document.getElementById('logIn')
let Signin = document.getElementById('Signin')
let cancel2 = document.getElementById('cancel2')
let cancel3 = document.getElementById('cancel3')

let container = document.getElementById('container')

//opening filters

let filter = document.getElementById('filter')
let close = document.getElementById('close')
let filters = document.getElementById('filters')




//opening the side panel containg side navigation and sides flex box


btn.addEventListener('click', ()=>{

side.style.display = 'flex'
nav.style.display = 'none'
flexbox.style.display = 'none'
notice.style.display = 'none'
})

//cancelling the side panel

cancel.addEventListener('click', ()=>{
    side.style.display = 'none'
    nav.style.display = 'block'
    flexbox.style.display = 'block'
    notice.style.display = 'block'
})


 

//displaying the user account portal

user.addEventListener('click', ()=>{

signUp.style.display = 'flex'
container.style.display = 'none'
 
})

//switching between the login and signin options

option.addEventListener('click', ()=>{
logIn.style.display = 'none'

Signin.style.display = 'flex'


})

option2.addEventListener('click', ()=>{
logIn.style.display = 'flex'

Signin.style.display = 'none'


})

//cancelling the side panel

cancel2.addEventListener('click', ()=>{

    signUp.style.display = 'none'
    side.style.display = 'none'
    nav.style.display = 'block'
    flexbox.style.display = 'block'
    container.style.display = 'block'

})

cancel3.addEventListener('click', ()=>{

signUp.style.display = 'none'
side.style.display = 'none'
nav.style.display = 'block'
flexbox.style.display = 'block'
container.style.display = 'block'

})

//opening and closing filters

filter.addEventListener('click', ()=>{
    filters.style.display = 'block'
})

close.addEventListener('click', ()=>{
    filters.style.display = 'none'
    
})





//slideshow script  FOR BODY'S FLEX BOX starts here


let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");

for (i = 0; i < slides.length ; i++) {
slides[i].style.display = "none";

}
slideIndex++;

if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 6000); // Change image every 2 seconds


}


//JAVA SCRIPT FOR SIDE'S SLIDESHOW CONTAINER STARTS HERE


let slideIndex2 = 0;
showSlides2();

function showSlides2() {
let i;

let slides2 = document.getElementsByClassName('mySlides2');
for (i = 0; i < slides2.length ; i++) {

slides2[i].style.display = "none";
}
slideIndex2++;


if (slideIndex2 > slides2.length) {slideIndex2 = 1}
slides2[slideIndex2-1].style.display = "block";
setTimeout(showSlides2, 6000); // Change image every 2 seconds
}




 