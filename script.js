document.addEventListener("DOMContentLoaded", function () {
  new Splide("#software-carousel", {
    // heightRatio: 0.5,
    // cover: true,
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 3,
      },
    },
    gap: 25,
  }).mount();

  new Splide("#testimonial-slider", {
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
    gap: 25,
    width: 400,
    padding: 50,
  }).mount();
});
