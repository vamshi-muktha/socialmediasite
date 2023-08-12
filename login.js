const signUpButton=document.getElementById('signUp');
const signInButton=document.getElementById('signIn');
const main=document.getElementById('main');

signUpButton.addEventListener('click', ()=>{
    main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', ()=>{
    main.classList.remove("right-panel-active");
});
function transferdata() {
var input = document.getElementById('username');
var value = input.value;
localStorage.setItem('myValue', value);
window.location.href = 'main.html';
}const signUpButton=document.getElementById('signUp');
const signInButton=document.getElementById('signIn');
const main=document.getElementById('main');

signUpButton.addEventListener('click', ()=>{
    main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', ()=>{
    main.classList.remove("right-panel-active");
});
function transferdata() {
var input = document.getElementById('username');
var value = input.value;
localStorage.setItem('myValue', value);
window.location.href = 'main.html';
}