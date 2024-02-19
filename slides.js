let slideIndex = 0;

function moveSlider(n) {
    const slides = document.querySelectorAll('.slider-content img');
    const totalSlides = slides.length;

    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const translateValue = -slideIndex * 100;
    document.querySelector('.slider-content').style.transform = `translateX(${translateValue}%)`;
}

// Automatic slideshow
setInterval(function() {
    moveSlider(1);
}, 5000);