// =====================
// Navigation Functionality
// =====================

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// =====================
// Typing Animation
// =====================

const typingText = document.getElementById('typing-text');
const phrases = [
    'Full-Stack Developer',
    'Java Developer',
    'IT Student',
    'Problem Solver',
    'Tech Enthusiast',
    'Node.js Developer',
    'DSA Learner'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// =====================
// Scroll Animations
// =====================

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when visible
            if (entry.target.classList.contains('skill-card')) {
                entry.target.classList.add('animate');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    const animateElements = document.querySelectorAll(
        '.about-text p, .stat-card, .skill-card, .project-card, .contact-card'
    );
    
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe skill cards separately for progress bar animation
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        observer.observe(card);
    });
});

// =====================
// Smooth Scroll for Navigation Links
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// Project Cards Hover Effect
// =====================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0)';
    });
});

// =====================
// Parallax Effect for Home Section
// =====================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeContent = document.querySelector('.home-content');
    const codeBlock = document.querySelector('.code-block');
    
    if (homeContent && scrolled < window.innerHeight) {
        homeContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        homeContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    if (codeBlock && scrolled < window.innerHeight) {
        codeBlock.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// =====================
// Console Easter Egg
// =====================

console.log('%c 👋 Welcome to Shudanshu Bora\'s Portfolio! ', 'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Built with HTML, CSS & Vanilla JavaScript', 'color: #00d4ff; font-size: 14px;');
console.log('%c 🏥 Featured: Hospital Management System (Node.js, Express, MySQL)', 'color: #7c3aed; font-size: 12px;');
console.log('%c Thanks for checking out the code! 👨‍💻', 'color: #00d4ff; font-size: 14px;');
console.log('%c GitHub: https://github.com/shudanshubora1410', 'color: #a0a0b0; font-size: 12px;');

// =====================
// Project Stats (Optional)
// =====================

// Display project statistics
const projectStats = {
    totalProjects: 5,
    featuredProject: 'Hospital Management System',
    techStack: ['Java', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'HTML5', 'CSS3'],
    linesOfCode: '3500+',
    builtin: '2nd Year'
};

console.log('%c 📊 Portfolio Stats:', 'color: #00d4ff; font-size: 14px; font-weight: bold;');
console.table(projectStats);

// =====================
// Page Load Animation
// =====================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const homeContent = document.querySelector('.home-content');
    const homeImage = document.querySelector('.home-image');
    
    if (homeContent) {
        homeContent.style.opacity = '1';
        homeContent.style.transform = 'translateY(0)';
    }
    
    if (homeImage) {
        homeImage.style.opacity = '1';
        homeImage.style.transform = 'translateX(0)';
    }
});

// =====================
// Dynamic Year in Footer
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const copyrightYear = document.querySelector('.footer-copyright');
    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.textContent = `© ${currentYear} Shudanshu Bora | All Rights Reserved`;
    }
});

// =====================
// Keyboard Navigation
// =====================

// Enable keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    // Press 'C' to scroll to contact
    if (e.key === 'c' || e.key === 'C') {
        if (!e.target.matches('input, textarea')) {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// =====================
// Performance Optimization
// =====================

// Lazy load images (if any are added in the future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =====================
// Accessibility Enhancements
// =====================

// Add aria-labels dynamically
document.querySelectorAll('.project-link').forEach(link => {
    if (link.href.includes('github.com')) {
        link.setAttribute('aria-label', 'View project on GitHub');
    }
});

document.querySelectorAll('.social-links a').forEach(link => {
    const href = link.href;
    if (href.includes('github.com')) {
        link.setAttribute('aria-label', 'Visit GitHub profile');
    } else if (href.includes('linkedin.com')) {
        link.setAttribute('aria-label', 'Visit LinkedIn profile');
    } else if (href.includes('mailto')) {
        link.setAttribute('aria-label', 'Send email');
    }
});

// =====================
// Feature: Copy Email on Click
// =====================

const emailCards = document.querySelectorAll('.contact-card[href^="mailto"]');
emailCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const email = 'shudanshubora1410@gmail.com';
        
        // Try to copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Email copied to clipboard! ✓';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: linear-gradient(135deg, #00d4ff, #7c3aed);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            });
        }
    });
});

// Add animation keyframes for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// =====================
// Log Build Info
// =====================

console.log('%c 🚀 Portfolio v2.0', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%c Last Updated: March 2026', 'color: #a0a0b0; font-size: 12px;');
console.log('%c Built during 3rd Year B.Tech', 'color: #7c3aed; font-size: 12px;');