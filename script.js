/* ================================================================
   SHUDANSHU BORA – PREMIUM PORTFOLIO JAVASCRIPT
   Version 3.0 | Built with ❤️
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('DOMContentLoaded', function () {

    /* ==================== PRELOADER ==================== */
    var preloader = document.getElementById('preloader');

    /* Hide preloader immediately on load */
    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }

    /* Multiple fallbacks to ensure it hides */
    window.addEventListener('load', function () {
        setTimeout(hidePreloader, 1000);
    });

    /* Force hide after 2 seconds no matter what */
    setTimeout(hidePreloader, 2000);

    /* Force hide immediately if page already loaded */
    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 500);
    }

    /* ==================== CUSTOM CURSOR ==================== */
    var cursorRing = document.getElementById('cursorRing');
    var cursorDot = document.getElementById('cursorDot');
    var isTouchDevice = 'ontouchstart' in window;

    if (!isTouchDevice && cursorRing && cursorDot) {
        document.addEventListener('mousemove', function (e) {
            cursorRing.style.left = (e.clientX - 16) + 'px';
            cursorRing.style.top = (e.clientY - 16) + 'px';
            cursorDot.style.left = (e.clientX - 3) + 'px';
            cursorDot.style.top = (e.clientY - 3) + 'px';
            cursorRing.classList.add('visible');
            cursorDot.classList.add('visible');
        });

        document.addEventListener('mouseout', function () {
            cursorRing.classList.remove('visible');
            cursorDot.classList.remove('visible');
        });

        var hoverEls = document.querySelectorAll('a, button, .skill-card, .project-card, .stat-card, input, textarea');
        hoverEls.forEach(function (el) {
            el.addEventListener('mouseenter', function () { cursorRing.classList.add('hovering'); });
            el.addEventListener('mouseleave', function () { cursorRing.classList.remove('hovering'); });
        });
    }

    /* ==================== NAVBAR ==================== */
    var navbar = document.getElementById('navbar');
    var navMenu = document.getElementById('nav-menu');
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.querySelectorAll('.nav-link');
    var backToTop = document.getElementById('backToTop');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    /* ==================== SCROLL EVENTS ==================== */
    var sections = document.querySelectorAll('section[id]');

    function onScroll() {
        var scrollY = window.scrollY;

        /* Navbar */
        if (scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        /* Back to top */
        if (backToTop) {
            if (scrollY > 500) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }

        /* Active nav link */
        sections.forEach(function (section) {
            var top = section.offsetTop - 120;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-link[href="#' + id + '"]');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                if (link) link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    /* ==================== BACK TO TOP ==================== */
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==================== SMOOTH SCROLL ==================== */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    /* ==================== TYPING ANIMATION ==================== */
    var typingEl = document.getElementById('typing-text');
    var phrases = [
        'Full-Stack Developer',
        'Java Developer',
        'Problem Solver',
        'Node.js Developer',
        'DSA Enthusiast',
        'Tech Enthusiast',
        'IT Student @ GLBITM',
        'Code Craftsman'
    ];
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typingSpeed = 100;

    function typeEffect() {
        if (!typingEl) return;
        var current = phrases[phraseIndex];

        if (isDeleting) {
            typingEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    setTimeout(typeEffect, 1200);

    /* ==================== SCROLL REVEAL ==================== */
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                /* Animate skill bars */
                if (entry.target.classList.contains('skill-card')) {
                    var bar = entry.target.querySelector('.skill-progress');
                    if (bar) {
                        var progress = bar.getAttribute('data-progress');
                        setTimeout(function () {
                            bar.style.width = progress + '%';
                        }, 200);
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.fade-in, .skill-card').forEach(function (el) {
        observer.observe(el);
    });

    /* ==================== SKILLS TABS ==================== */
    var skillTabs = document.querySelectorAll('.skills-tab');
    var skillCategories = document.querySelectorAll('.skill-category');

    skillTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            skillTabs.forEach(function (t) { t.classList.remove('active'); });
            this.classList.add('active');

            var filter = this.getAttribute('data-tab');

            skillCategories.forEach(function (cat) {
                if (filter === 'all' || cat.getAttribute('data-category') === filter) {
                    cat.style.display = 'block';
                    cat.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });

    /* ==================== CONTACT FORM ==================== */
    var contactForm = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = document.getElementById('contactName').value.trim();
            var email = document.getElementById('contactEmail').value.trim();
            var subject = document.getElementById('contactSubject').value.trim();
            var message = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            /* Send via WhatsApp / MailTo */
            var mailtoLink = 'mailto:shudanshubora1410@gmail.com' +
                '?subject=' + encodeURIComponent(subject || 'Portfolio Contact') +
                '&body=' + encodeURIComponent(
                    'Name: ' + name + '\n' +
                    'Email: ' + email + '\n\n' +
                    message
                );

            window.open(mailtoLink, '_blank');

            contactForm.style.display = 'none';
            if (formSuccess) formSuccess.style.display = 'block';
        });
    }

    /* ==================== EMAIL COPY ==================== */
    var emailItems = document.querySelectorAll('a[href^="mailto"]');
    emailItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            var email = 'shudanshubora1410@gmail.com';
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email);
                showNotification('📧 Email copied to clipboard!', 'cyan');
            }
        });
    });

    /* ==================== NOTIFICATION ==================== */
    function showNotification(text, color) {
        var colors = { cyan: '#00d4ff', purple: '#7c3aed', green: '#10b981' };
        var notif = document.createElement('div');
        notif.textContent = text;
        notif.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:' + (colors[color] || colors.cyan) + ';color:#0a0a0f;padding:12px 24px;border-radius:50px;font-size:0.85rem;font-weight:600;z-index:10000;box-shadow:0 8px 25px rgba(0,0,0,0.3);animation:slideUp 0.3s ease;';
        document.body.appendChild(notif);
        setTimeout(function () { notif.remove(); }, 2500);
    }

    /* ==================== FOOTER YEAR ==================== */
    var yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ==================== KEYBOARD SHORTCUTS ==================== */
    document.addEventListener('keydown', function (e) {
        if (e.target.matches('input, textarea, select')) return;

        switch (e.key.toLowerCase()) {
            case 'h': window.scrollTo({ top: 0, behavior: 'smooth' }); break;
            case 'p': document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); break;
            case 'c': document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); break;
            case 's': document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); break;
        }
    });

    /* ==================== PARALLAX HERO ==================== */
    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        var heroContent = document.querySelector('.home-content');
        var codeBlock = document.querySelector('.code-block');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = 'translateY(' + scrolled * 0.15 + 'px)';
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.2;
        }

        if (codeBlock && scrolled < window.innerHeight) {
            codeBlock.style.transform = 'translateY(' + scrolled * 0.08 + 'px)';
        }
    });

    /* ==================== CONSOLE BRANDING ==================== */
    console.log('%c 💻 Shudanshu Bora Portfolio v3.0 ', 'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: white; font-size: 16px; padding: 10px 20px; border-radius: 8px; font-weight: bold;');
    console.log('%c ☕ Also check: Cafe Roadway – 43 Feature Restaurant Site ', 'background: #f59e0b; color: #0a0a0f; font-size: 12px; padding: 6px 14px; border-radius: 4px;');
    console.log('%c 🌐 https://shudanshubora1410.github.io/cafe-roadway ', 'color: #00d4ff; font-size: 12px;');
    console.log('%c 📧 shudanshubora1410@gmail.com ', 'color: #94a3b8; font-size: 11px;');
    console.log('%c ⌨️  Keyboard shortcuts: H=Home P=Projects C=Contact S=Skills ', 'color: #64748b; font-size: 11px;');

    /* Slide up keyframe */
    var style = document.createElement('style');
    style.textContent = '@keyframes slideUp { from { opacity:0; transform:translate(-50%,20px); } to { opacity:1; transform:translate(-50%,0); } }';
    document.head.appendChild(style);

});
