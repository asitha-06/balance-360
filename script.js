const Wrappper=document.querySelector('.Wrappper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');


;registerLink.addEventListener('click',()=>{
    Wrappper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    Wrappper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    Wrappper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    Wrappper.classList.remove('active-popup');
});