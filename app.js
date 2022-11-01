const hamburger=document.querySelector('.hamburger');
const navlinks = document.querySelector('.navLinks');
const links = document.querySelectorAll('navLink');
const logo=document.querySelector('.logo');
const navbar=document.querySelector('.navBar');
const cta=document.querySelector('.cta');
const bar1=document.querySelector('.bar1');
const bar2=document.querySelector('.bar2');
const bar3=document.querySelector('.bar3');
const header=document.querySelector('.header');
const intro = document.querySelector(".intro")


hamburger.addEventListener("click", () => {
   
    navlinks.classList.toggle('click');
    logo.classList.toggle('click');
    navbar.classList.toggle('click');
    cta.classList.toggle('click');
    bar1.classList.toggle('click');
    bar2.classList.toggle('click');
    bar3.classList.toggle('click');
    header.classList.toggle('click');
    intro.classList.toggle('click');

});

let docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    console.log("calc woidth"),
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

