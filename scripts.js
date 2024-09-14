// Navigation Scroll Background Change
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Responsive Navigation Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = `
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
`;
nav.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

// Hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .neon-button');
interactiveElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    elem.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Smooth Scrolling for Anchor Links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        nav.classList.remove('active'); // Close menu on mobile after clicking
    });
});

// Intersection Observer for Animations
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Parallax Effect for Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = -(window.scrollY * 0.5) + 'px';
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top');
scrollToTopBtn.innerHTML = '↑';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.innerHTML = '🌙';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
    } else {
        darkModeToggle.innerHTML = '🌙';
    }
});

// Random Background Shapes
const shapesContainer = document.createElement('div');
shapesContainer.classList.add('shapes-container');
document.body.appendChild(shapesContainer);

for (let i = 0; i < 20; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.style.left = Math.random() * 100 + 'vw';
    shape.style.top = Math.random() * 100 + 'vh';
    shape.style.width = shape.style.height = Math.random() * 100 + 50 + 'px';
    shape.style.animationDuration = Math.random() * 10 + 5 + 's';
    shapesContainer.appendChild(shape);
}
