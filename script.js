// var hogan = require("hogan.js");

window.onload = function() {
    alert('Welcome to my personal website!');
}

document.querySelector('#mobile-menu').addEventListener('click', function() {
    let ul = document.querySelector('.nav-list ul');
    ul.style.display = ul.style.display === 'none' || ul.style.display === '' ? 'block' : 'none';
});

document.querySelector('#backButton').addEventListener('click', function() {
    document.querySelector('#research').style.display = 'block';
    document.querySelector('#detailedViewContainer').style.display = 'none';
});
