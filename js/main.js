/**
 * Main JavaScript file for Maheshwari Industrial Supplies website
 * Handles mobile menu, smooth scrolling, and other interactive features
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.add('hidden');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                navLinks?.classList.add('hidden');
            }
        });
    });

    // Initialize Swiper slider if it exists
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }

    // Add scroll animation classes
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

            if (isVisible) {
                element.classList.add('animate-slide-up');
                element.classList.remove('opacity-0');
            }
        });
    };

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
});
