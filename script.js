// JavaScript - Site Jaqueline Camila

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn) {
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
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
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
    const totalSlides = 4;

    function updateCarousel() {
        if (carouselTrack) {
            carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
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
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play carousel
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 10000);

    // Toggle transtorno details - VERSÃO SIMPLIFICADA
    const transtornoCards = document.querySelectorAll('.transtorno-card');
    
    transtornoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const details = this.querySelector('.transtorno-details');
            
            // Verificar se está aberto ou fechado
            if (details.style.maxHeight && details.style.maxHeight !== '0px') {
                details.style.maxHeight = '0px';
            } else {
                // Fechar todos os outros
                transtornoCards.forEach(otherCard => {
                    const otherDetails = otherCard.querySelector('.transtorno-details');
                    otherDetails.style.maxHeight = '0px';
                });
                
                // Abrir o clicado
                details.style.maxHeight = '500px';
            }
        });
    });
});