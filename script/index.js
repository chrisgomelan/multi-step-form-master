
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card1 = document.querySelector('.card1');
let card;
let oblong = document.querySelector('.oblong');
let circ = document.querySelector('.circle');
let yearly = document.querySelector('.yearly');
let monthly = document.querySelector('.monthly');
let ch1 = document.querySelector('.ch1');
let ch2 = document.querySelector('.ch2');
let ch3 = document.querySelector('.ch3');

let addOns = document.querySelector('.add-ons');
// card.forEach(card => card.addEventListener("click", function(){
//     this.classList.toggle('active')
   
// }))
card1.addEventListener('click',function(){
    this.classList.toggle('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
    card = 1;
   
})

card2.addEventListener('click',function(){
    this.classList.toggle('active');
    card1.classList.remove('active');
    card3.classList.remove('active');
   
    
})
card3.addEventListener('click',function(){
    this.classList.toggle('active');
    card2.classList.remove('active');
    card1.classList.remove('active');
   
})


oblong.addEventListener('click',function(){
    this.classList.toggle('active');
    circ.classList.toggle('active');
    yearly.classList.toggle('active');
    monthly.classList.toggle('active');
    card1.classList.toggle('style');
    card2.classList.toggle('style');
    card3.classList.toggle('style');
    ch1.classList.toggle('active');
    ch2.classList.toggle('active');
    ch3.classList.toggle('active');
    addOns.classList.toggle('active');
})

 

let choices = document.querySelectorAll(".choice");
let chkbox = document.querySelectorAll('input[type="checkbox"]');

choices.forEach(choices => choices.addEventListener("click", function(){
    this.classList.toggle('active');
}))
