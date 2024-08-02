document.addEventListener("DOMContentLoaded", function () {
  new Splide("#software-carousel", {    
    perPage: 4,
    breakpoints: {
      600: {
        perPage: 3,
        gap: 70
      },
    },
    gap: 250,
  }).mount();

  new Splide("#testimonial-slider", {
    perPage: 3,
    pagination: false,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
    gap: 65,
  }).mount();

  const links = document.querySelectorAll('nav a.menu');
  const menu = document.getElementById('header-nav--mobile');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            if(this.classList.contains('mobile-menu')) {
                menu.classList.remove('active');
            }
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const menuIcon = document.getElementById('mobile-menu-trigger');
    const closeIcon = document.getElementById('close-icon');
    

    menuIcon.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target == menu) {
            menu.classList.remove('active');
        }
    });
});
