/* .--..--..--..--..--.. MENU ..--..--..--..--..--.. */

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

/* .--..--..--..--..--.. NAVIGATION ..--..--..--..--..--.. */

window.addEventListener('scroll', onScroll);

onscroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
  scrollY > 500
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show');
}

const revealSettings = {
  origin: 'top',
  distance: '30px',
  duration: 700 /* ms */
}

ScrollReveal(revealSettings).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .cards,
  #about,
  #about header,
  #about .content
`);