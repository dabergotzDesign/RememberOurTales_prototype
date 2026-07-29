// Get the button:
let btnTop = document.getElementById("btn-top");

btnTop.addEventListener("click", topFunction());

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

/* //// LENIS //// */
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

/* SIDENAV */
(() => {
    const sidenav = document.querySelector('.sideNav');

    if (!sidenav) return;

    const navItems = Array.from(sidenav.querySelectorAll('.sideNav-cta'));
    const sections = Array.from(document.querySelectorAll('.obituary__content > div[id]'));

    console.log(navItems);

    if (!navItems.length || !sections.length || navItems.length !== sections.length) return;

    const setActiveItem = (activeIndex) => {
        navItems.forEach((item, index) => {
            item.classList.toggle('active', index === activeIndex);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
            const activeIndex = sections.indexOf(visibleEntry.target);
            if (activeIndex !== -1) {
                setActiveItem(activeIndex);
            }
        } else {
            setActiveItem(-1);
        }
    }, {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach((section) => observer.observe(section));
})();


/* top nav */
const nav = document.querySelector('.navigation div');
const navLogo = document.querySelector('.nav__logo');

const setNavState = () => {
  const scrolledPastThreshold = window.scrollY > 10;

  if (nav) {
    nav.style.height = scrolledPastThreshold ? '8vh' : '';
  }

  if (navLogo) {
    navLogo.style.width = scrolledPastThreshold ? '12vw' : '';
  }
};

window.addEventListener('scroll', setNavState, { passive: true });
window.addEventListener('load', setNavState);

/* protoype modal */
let modal = document.querySelector(".prototype__info");
let btnStart = document.querySelector(".info__text button");

btnStart.onclick = function(){
    modal.style.display = "none";
}

