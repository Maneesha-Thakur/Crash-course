let slides = document.querySelectorAll('#slideshow img');
let currentIndex = 0;
let slideshowInterval;

function toggleSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        document.getElementById('startStopButton').textContent = 'Start';
    } else {
        slideshowInterval = setInterval(nextSlide, 2000);
        document.getElementById('startStopButton').textContent = 'Stop';
    }
}

function prevSlide() {
    stopSlideshow();
    showSlide(currentIndex - 1);
}

function nextSlide() {
    stopSlideshow();
    showSlide(currentIndex + 1);
}

function showSlide(index) {
    slides[currentIndex].style.display = 'none';
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].style.display = 'block';
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        document.getElementById('startStopButton').textContent = 'Start';
    }
}