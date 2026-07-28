document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");

    if (!carousel) {
        return;
    }

    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");

    const previousButton = carousel.querySelector(
        ".carousel-arrow-left"
    );

    const nextButton = carousel.querySelector(
        ".carousel-arrow-right"
    );

    let currentSlide = 0;
    let automaticCarousel;

    function displaySlide(index) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        displaySlide(currentSlide + 1);
    }

    function previousSlide() {
        displaySlide(currentSlide - 1);
    }

    function startAutomaticCarousel() {
        clearInterval(automaticCarousel);

        automaticCarousel = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    previousButton.addEventListener("click", () => {
        previousSlide();
        startAutomaticCarousel();
    });

    nextButton.addEventListener("click", () => {
        nextSlide();
        startAutomaticCarousel();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            displaySlide(index);
            startAutomaticCarousel();
        });
    });

    carousel.addEventListener("mouseenter", () => {
        clearInterval(automaticCarousel);
    });

    carousel.addEventListener("mouseleave", () => {
        startAutomaticCarousel();
    });

    startAutomaticCarousel();
});
