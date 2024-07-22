//Hamburger
export default function toggle(hamburger, navMenu) {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
};
  
  //Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// click diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target !== hamburger && e.target !== navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});