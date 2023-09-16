// var hogan = require("hogan.js");

window.onload = function() {
    alert('Welcome to my personal website!');
}

document.querySelector('#mobile-menu').addEventListener('click', function() {
    let ul = document.querySelector('.nav-list ul');
    ul.style.display = ul.style.display === 'none' || ul.style.display === '' ? 'block' : 'none';
});