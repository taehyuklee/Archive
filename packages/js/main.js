const toggleBtn = document.querySelector('.nav__toogle');
const menu =  document.querySelector('.menu_ul');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});