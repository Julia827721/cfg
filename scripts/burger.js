console.log('burger');
const navLinks = document.querySelectorAll('.nav-link');



function burgerClick()
{
    document.querySelector('.nav').classList.toggle('nav-active');
    document.querySelector('.burger').classList.toggle('active');
    navLinks.forEach((link, index)=>{
    })
}