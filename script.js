/* ================================================================
   SHUDANSHU BORA – PORTFOLIO JAVASCRIPT v4.0
   Java Full Stack Developer | Made with ❤️
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ==================== PRELOADER ==================== */
    var preloader = document.getElementById('preloader');

    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }

    window.addEventListener('load', function () {
        setTimeout(hidePreloader, 1500);
    });

    /* Safety fallback */
    setTimeout(hidePreloader, 3000);

    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 800);
    }

    /* ==================== CUSTOM CURSOR ==================== */
    var cursorRing = document.getElementById('cursorRing');
    var cursorDot = document.getElementById('cursorDot');
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursorRing && cursorDot) {
        var mouseX = 0, mouseY = 0;
        var ringX = 0, ringY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = (mouseX - 3) + 'px';
            cursorDot.style.top = (mouseY - 3) + 'px';
            cursorRing.classList.add('visible');
            cursorDot.classList.add('visible');
        });

        /* Smooth ring follow */
        function animateCursor() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            cursorRing.style.left = (ringX - 16) + 'px';
            cursorRing.style.top = (ringY - 16) + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        document.addEventListener('mouseout', function () {
            cursorRing.classList.remove('visible');
            cursorDot.classList.remove('visible');
        });

        document.querySelectorAll('a, button, .skill-item, .project-card, .stat-card, .tech-item, input, textarea').forEach(function (el) {
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
    var sections = document.querySelectorAll('section[id]');

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

        /* Active nav */
        sections.forEach(function (section) {
            var top = section.offsetTop - 130;
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
                window.scrollTo({ top: target.offsetTop - 75, behavior: 'smooth' });
            }
        });
    });

    /* ==================== TYPING ANIMATION ==================== */
    var typingEl = document.getElementById('typing-text');
    var phrases = [
        'Java Full Stack Developer',
        'DSA Problem Solver',
        'Java Core Expert',
        'Frontend Developer',
        'Learning Advanced Java 🔄',
        'Future Spring Boot Dev 🎯',
        'Code Craftsman',
        'GLBITM IT Student'
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
            typingSpeed = 2200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    setTimeout(typeEffect, 1200);

    /* ==================== SCROLL REVEAL ==================== */
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        revealObserver.observe(el);
    });

    /* ==================== SKILL BAR ANIMATION ==================== */
    var skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(function (fill) {
                    var progress = fill.getAttribute('data-progress');
                    setTimeout(function () {
                        fill.style.width = progress + '%';
                    }, 300);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skills-status-card').forEach(function (card) {
        skillObserver.observe(card);
    });

    /* ==================== JOURNEY PHASE ANIMATION ==================== */
    var journeyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.journey-phase').forEach(function (phase, index) {
        phase.style.opacity = '0';
        phase.style.transform = 'translateX(-20px)';
        phase.style.transition = 'opacity 0.6s ease ' + (index * 0.15) + 's, transform 0.6s ease ' + (index * 0.15) + 's';
        journeyObserver.observe(phase);
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
                showNotification('⚠️ Please fill all required fields!', 'orange');
                return;
            }

            var mailtoLink = 'mailto:shudanshubora1410@gmail.com' +
                '?subject=' + encodeURIComponent(subject || 'Portfolio Contact from ' + name) +
                '&body=' + encodeURIComponent(
                    'Name: ' + name + '\n' +
                    'Email: ' + email + '\n\n' +
                    message
                );

            window.open(mailtoLink, '_blank');
            contactForm.style.display = 'none';
            if (formSuccess) formSuccess.style.display = 'block';
            showNotification('✅ Message sent! I\'ll reply soon.', 'green');
        });
    }

    /* ==================== NOTIFICATION ==================== */
    function showNotification(text, color) {
        var colors = {
            green: 'linear-gradient(135deg,#10b981,#34d399)',
            orange: 'linear-gradient(135deg,#f59e0b,#fbbf24)',
            cyan: 'linear-gradient(135deg,#00d4ff,#7c3aed)'
        };

        var notif = document.createElement('div');
        notif.textContent = text;
        notif.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:' + (colors[color] || colors.cyan) + ';color:#0a0a0f;padding:12px 24px;border-radius:50px;font-size:0.85rem;font-weight:600;z-index:99999;box-shadow:0 8px 25px rgba(0,0,0,0.3);white-space:nowrap;';
        document.body.appendChild(notif);
        setTimeout(function () { if (notif.parentNode) notif.remove(); }, 2500);
    }

    /* ==================== NAVBAR TOGGLER ==================== */
    var navColEl = document.getElementById('navbarNav');
    if (navColEl) {
        navColEl.addEventListener('show.bs.collapse', function () { hamburger.setAttribute('aria-expanded', 'true'); });
        navColEl.addEventListener('hide.bs.collapse', function () { hamburger.setAttribute('aria-expanded', 'false'); });
    }

    /* ==================== FOOTER YEAR ==================== */
    var yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ==================== KEYBOARD SHORTCUTS ==================== */
    document.addEventListener('keydown', function (e) {
        if (e.target.matches('input, textarea, select')) return;

        switch (e.key.toLowerCase()) {
            case 'h':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showNotification('🏠 Home', 'cyan');
                break;
            case 'p':
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                showNotification('📁 Projects', 'cyan');
                break;
            case 'c':
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                showNotification('📞 Contact', 'cyan');
                break;
            case 's':
                document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                showNotification('⚙️ Skills', 'cyan');
                break;
            case 'j':
                document.getElementById('journey').scrollIntoView({ behavior: 'smooth' });
                showNotification('🗺️ Journey', 'cyan');
                break;
        }
    });

    /* ==================== PARALLAX HERO ==================== */
    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        var heroContent = document.querySelector('.home-content');
        var codeBlock = document.querySelector('.code-block');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = 'translateY(' + scrolled * 0.1 + 'px)';
            heroContent.style.opacity = String(1 - (scrolled / window.innerHeight) * 1.1);
        }

        if (codeBlock && scrolled < window.innerHeight) {
            codeBlock.style.transform = 'translateY(' + scrolled * 0.06 + 'px)';
        }
    });

    /* ==================== CONSOLE BRANDING ==================== */
    console.log('%c ☕ Shudanshu Bora – Java Full Stack Developer ', 'background:linear-gradient(135deg,#00d4ff,#7c3aed);color:white;font-size:15px;padding:10px 20px;border-radius:8px;font-weight:bold;');
    console.log('%c 🚀 Portfolio v4.0 | GLBITM Greater Noida ', 'background:#13131f;color:#00d4ff;font-size:12px;padding:6px 14px;border-radius:4px;');
    console.log('%c ☕ Also check: Cafe Roadway – 43 Feature Restaurant Site ', 'background:#f59e0b;color:#0a0a0f;font-size:11px;padding:5px 12px;border-radius:4px;');
    console.log('%c 🌐 https://shudanshubora1410.github.io/cafe-roadway ', 'color:#00d4ff;font-size:11px;');
    console.log('%c ⌨️ Shortcuts: H=Home P=Projects C=Contact S=Skills J=Journey ', 'color:#64748b;font-size:11px;');

});
