document.addEventListener("DOMContentLoaded", function () {
  new Splide("#software-carousel", {    
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 3,
      },
    },
    gap: 250,
  }).mount();

  new Splide("#testimonial-slider", {
    perPage: 3,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
    gap: 95,
  }).mount();

  const links = document.querySelectorAll('nav.header-nav--desktop a.menu');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
