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
const nav_submenu = document.querySelectorAll('.submenu ul');

const navArchive = document.querySelector('.nav__archive'),
    navContribute  = document.querySelector('.nav__contribute'),
    navService = document.querySelector('.nav__service');



const navSearchButton = document.querySelector('.searchbar__toggle');
const navSearchBar = document.querySelector('.searchbar__container');

const setNavState = () => {
  const scrolledPastThreshold = window.scrollY > 10;

  if (nav) {
    nav.style.height = scrolledPastThreshold ? '8vh' : '';
  }

  if (navLogo) {
    navLogo.style.width = scrolledPastThreshold ? '12vw' : '';
  }

  if(navSearchButton){
    navSearchButton.style.top = scrolledPastThreshold ? '8%' : '';
  }

  if(navSearchBar){
    navSearchBar.style.top = scrolledPastThreshold ? '64%' : '';
  }
};

window.addEventListener('scroll', setNavState, { passive: true });
window.addEventListener('load', setNavState);

/* submenu */
navArchive.addEventListener("mouseenter", ()=>{
    nav_submenu[0].style.height = '100%';
    nav_submenu[1].style.height = '0';
    nav_submenu[2].style.height = '0';
});
nav_submenu[0].addEventListener("mouseleave", ()=>{
    nav_submenu[0].style.height = '0';
});

navContribute.addEventListener("mouseenter", ()=>{
    nav_submenu[1].style.height = 'max-content';
    nav_submenu[0].style.height = '0';
    nav_submenu[2].style.height = '0';
});
nav_submenu[1].addEventListener("mouseleave", ()=>{
    nav_submenu[1].style.height = '0';
});


navService.addEventListener("mouseenter", ()=>{
    nav_submenu[2].style.height = 'max-content';
    nav_submenu[0].style.height = '0';
    nav_submenu[1].style.height = '0';
});
nav_submenu[2].addEventListener("mouseleave", ()=>{
    nav_submenu[2].style.height = '0';
});


/* search bar */
const searchToggle = document.querySelector(".searchbar__toggle"),
        searchBar = document.querySelector(".searchbar__container"),
        searchClose = document.querySelector(".searchbar__close"),
        searchInput = document.querySelector("#search-input").value,
        searchForm = document.querySelector("#searchbar__form"),
        searchLink = document.querySelector(".searchbar__submit a"),
        searchSubmit = document.querySelector(".searchbar__submit");


searchClose.addEventListener("click",()=>{
    if(searchBar.classList.contains("search")){
        searchBar.classList.remove("search");
        searchToggle.style.display = "block";
    }
});

searchToggle.addEventListener("click",()=>{
    if(!searchBar.classList.contains("search")){
        searchBar.classList.add("search");
        searchToggle.style.display = "none";
    }
});


searchSubmit.addEventListener("click", ()=>{
    
    if(searchInput.value == "Alfred J. Sterling"){
        searchLink.setAttribute("href", "../pages/search_result.html");
    }
    else{
        searchLink.setAttribute("href", "../pages/no_result_search.html");
    }

});
