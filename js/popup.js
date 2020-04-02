'use strict';
let modalOverlay = document.querySelector('.modal-overlay');
let modal = document.querySelector('.modal');


document.querySelector('.singUp').addEventListener('click',function(){
    modalOverlay.classList.add('active')
});
document.querySelector('.singUp').addEventListener('click',function(){
    modal.classList.add('active')
});

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active');
});
document.querySelector('.close-modal').addEventListener('click',function(){
    modal.classList.remove('active');
});