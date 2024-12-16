// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing mobile menu');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    console.log('Menu Elements:', {
        navToggle: navToggle ? 'Found' : 'Not Found',
        navMenu: navMenu ? 'Found' : 'Not Found'
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            console.log('Menu Toggle Clicked');
            navMenu.classList.toggle('is-active');
            navToggle.classList.toggle('is-active');
            console.log('Menu Active State:', navMenu.classList.contains('is-active'));
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
