// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Carousel functionality
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.carousel-dot');
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-yellow-600');
        } else {
            dot.classList.remove('bg-yellow-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Auto-play carousel - aumentado para 10 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 10000);