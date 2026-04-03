// Custom Cursor Logic for Bright Theme
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
});

// Smoothly animate the cursor ring
(function animCursor() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    if (cursor) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    }
    if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
    }
    requestAnimationFrame(animCursor);
})();

// Cursor hover effects for interactive elements in Light Mode
const interactables = 'a, button, .module-row, .faq-item, .nav-logo, .hero-tagline-box';
document.querySelectorAll(interactables).forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.background = 'var(--accent)';
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        }
        if (ring) {
            ring.style.width = '60px';
            ring.style.height = '60px';
            ring.style.borderColor = '#000';
            ring.style.opacity = '1';
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.background = '#000';
            cursor.style.width = '8px';
            cursor.style.height = '8px';
        }
        if (ring) {
            ring.style.width = '32px';
            ring.style.height = '32px';
            ring.style.borderColor = '#000';
            ring.style.opacity = '0.3';
        }
    });
});

// Intersection Observer for scroll reveals
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -20px 0px' 
});

// Observe all elements with 'reveal' class
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
