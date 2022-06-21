const logo = document.querySelector('.logo');
const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');
const featureButton = document.querySelector('.features');
const companyButton = document.querySelector('.company');
const navList = document.querySelector('.nav-list-section');
const buttonSection = document.querySelector('.nav-button-section');

// click on the burger button
hamburger.addEventListener('click', ()=>{
    header.classList.toggle('active');
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    buttonSection.classList.toggle('active');
   





});

//click on the x button

document.querySelectorAll('.list-item').forEach(i => i.addEventListener('click', (e)=>{
    hamburger.classList.remove('active');
    header.classList.remove('active');
    navList.classList.remove('active');
    buttonSection.classList.remove('active');
}))


