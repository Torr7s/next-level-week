/* .--..--..--..--..--.. MENU ..--..--..--..--..--.. */

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

/* .--..--..--..--..--.. NAVIGATION ..--..--..--..--..--.. */

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
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
`)