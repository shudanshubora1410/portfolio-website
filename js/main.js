// ============================================
// PORTFOLIO MAIN.JS
// Premium interactive features for Shudanshu Bora's portfolio
// ============================================

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// 1. PAGE LOADER
// ============================================
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  // Minimum display time so the loader animation completes
  const minTime = 1800;
  const startTime = performance.now();

  window.addEventListener('load', () => {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, minTime - elapsed);

    setTimeout(() => {
      loader.classList.add('loader-hidden');
      setTimeout(() => loader.remove(), 600);
    }, remaining);
  });
}

// ============================================
// 2. THEME TOGGLE
// ============================================
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  if (!toggle) return;

  // Load saved theme
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
}

// ============================================
// 3. CUSTOM CURSOR (Desktop only)
// ============================================
function initCustomCursor() {
  if (window.innerWidth < 1025 || prefersReducedMotion) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  // Smooth follow for ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const hoverables = document.querySelectorAll('[data-cursor="pointer"], a, button');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
  });
}

// ============================================
// 4. SCROLL PROGRESS BAR
// ============================================
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / winHeight) * 100;
    bar.style.width = scrollPercent + '%';
  }, { passive: true });
}

// ============================================
// 5. NAVIGATION SCROLL EFFECT
// ============================================
function initNavScroll() {
  const nav = document.querySelector('.nav-header');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================
// 6. MOBILE MENU
// ============================================
function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');
  if (!hamburger || !menu) return;

  const toggle = () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    menu.setAttribute('aria-hidden', String(isOpen));
    menu.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  hamburger.addEventListener('click', toggle);

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ============================================
// 7. ACTIVE NAV LINK ON SCROLL
// ============================================
function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ============================================
// 8. SMOOTH SCROLL FOR ANCHORS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target === '#' || target.length < 2) return;
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ============================================
// 9. TYPEWRITER EFFECT
// ============================================
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Java Developer',
    'Spring Boot Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'B.Tech IT Student'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }

  if (!prefersReducedMotion) {
    setTimeout(type, 1000);
  } else {
    el.textContent = phrases[0];
  }
}

// ============================================
// 10. PARTICLE BACKGROUND IN HERO
// ============================================
function initParticles() {
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let mouseX = -1000, mouseY = -1000;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  // Create particles
  const particleCount = window.innerWidth < 768 ? 30 : 70;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? 'rgba(255,255,255,' : 'rgba(99,102,241,';

    particles.forEach((p, i) => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Mouse interaction
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.x += (dx / dist) * force * 2;
        p.y += (dy / dist) * force * 2;
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor + '0.6)';
      ctx.fill();

      // Draw connecting lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const ddx = p.x - p2.x;
        const ddy = p.y - p2.y;
        const d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = particleColor + (0.2 * (1 - d / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// ============================================
// 11. REVEAL ON SCROLL
// ============================================
function initReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ============================================
// 12. STAT COUNTER ANIMATION
// ============================================
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const bars = document.querySelectorAll('.stat-bar-fill');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
        bars.forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const container = document.querySelector('.about-stats');
  if (container) observer.observe(container);
}

// ============================================
// 13. SKILL BAR ANIMATION
// ============================================
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.level + '%';
          }, i * 80);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const grid = document.querySelector('.skills-grid');
  if (grid) observer.observe(grid);
}

// ============================================
// 14. 3D TILT EFFECT ON CARDS
// ============================================
function initTilt() {
  if (prefersReducedMotion || window.innerWidth < 1024) return;

  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    const glow = card.querySelector('.skill-card-glow');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

      if (glow) {
        glow.style.left = x - 100 + 'px';
        glow.style.top = y - 100 + 'px';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ============================================
// 15. MAGNETIC BUTTONS
// ============================================
function initMagnetic() {
  if (prefersReducedMotion || window.innerWidth < 1024) return;

  const magnetics = document.querySelectorAll('.magnetic');

  magnetics.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// ============================================
// 16. PARALLAX FOR HERO PHOTO
// ============================================
function initPhotoParallax() {
  if (prefersReducedMotion || window.innerWidth < 1024) return;

  const photo = document.querySelector('.magnetic-photo');
  if (!photo) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    photo.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${x * 2}deg)`;
  });
}

// ============================================
// 17. CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: { el: document.getElementById('contact-name'), err: document.getElementById('name-error'),
      validate: v => !v.trim() ? 'Please enter your name.' : v.trim().length < 2 ? 'Name too short.' : '' },
    email: { el: document.getElementById('contact-email'), err: document.getElementById('email-error'),
      validate: v => !v.trim() ? 'Please enter your email.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'Invalid email.' : '' },
    subject: { el: document.getElementById('contact-subject'), err: document.getElementById('subject-error'),
      validate: v => !v.trim() ? 'Please enter a subject.' : v.trim().length < 3 ? 'Subject too short.' : '' },
    message: { el: document.getElementById('contact-message'), err: document.getElementById('message-error'),
      validate: v => !v.trim() ? 'Please enter a message.' : v.trim().length < 20 ? 'Message too short (min 20 chars).' : '' }
  };

  const showError = (f, msg) => {
    f.err.textContent = msg;
    f.el.classList.toggle('input-error', !!msg);
  };

  const validate = (f) => {
    const msg = f.validate(f.el.value);
    showError(f, msg);
    return !msg;
  };

  Object.values(fields).forEach(f => {
    f.el.addEventListener('input', () => {
      if (f.el.classList.contains('input-error')) validate(f);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true, firstInvalid = null;

    Object.values(fields).forEach(f => {
      if (!validate(f)) {
        valid = false;
        if (!firstInvalid) firstInvalid = f.el;
      }
    });

    if (!valid) {
      firstInvalid?.focus();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const text = btn.querySelector('.btn-text');
    const loading = btn.querySelector('.btn-loading');
    text.hidden = true;
    loading.hidden = false;
    btn.disabled = true;

    // Simulate submission — replace with Formspree fetch() call
    setTimeout(() => {
      const data = Object.fromEntries(Object.entries(fields).map(([k, f]) => [k, f.el.value.trim()]));
      console.log('Form submission:', data);

      text.hidden = false;
      loading.hidden = true;
      btn.disabled = false;

      const success = document.getElementById('form-success');
      if (success) {
        success.hidden = false;
        setTimeout(() => success.hidden = true, 5000);
      }
      form.reset();
    }, 1200);
  });
}

// ============================================
// 18. BACK TO TOP
// ============================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// 19. KONAMI CODE EASTER EGG — CONFETTI!
// ============================================
function initKonamiCode() {
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let input = [];

  document.addEventListener('keydown', (e) => {
    input.push(e.key);
    if (input.length > sequence.length) input.shift();
    if (input.join(',') === sequence.join(',')) {
      triggerConfetti();
      input = [];
    }
  });
}

function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
  const particles = [];

  for (let i = 0; i < 200; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.8) * 15,
      gravity: 0.3,
      size: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      life: 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.life -= 0.01;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (alive) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();

  // Show toast
  showToast('🎉 You found the secret! Konami code activated!');
}

// ============================================
// 20. TOAST NOTIFICATION
// ============================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--brand-gradient);
    color: white;
    padding: 16px 24px;
    border-radius: 9999px;
    font-weight: 600;
    box-shadow: 0 20px 50px -10px rgba(99,102,241,0.5);
    z-index: 9999;
    transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ============================================
// 21. CONSOLE EASTER EGG
// ============================================
function initConsoleArt() {
  const style1 = 'background: linear-gradient(90deg, #6366f1, #ec4899); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 6px;';
  const style2 = 'color: #6366f1; font-size: 14px; font-weight: 600;';
  const style3 = 'color: #71717a; font-size: 12px;';

  console.log('%cHey there, developer! 👋', style1);
  console.log('%cLike what you see?', style2);
  console.log('%cLet\'s build something together → shudanshubora1410@gmail.com', style3);
  console.log('%c💡 Try the Konami Code: ↑↑↓↓←→←→BA', style3);
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initThemeToggle();
  initCustomCursor();
  initScrollProgress();
  initNavScroll();
  initMobileMenu();
  initActiveNav();
  initSmoothScroll();
  initTypewriter();
  initParticles();
  initReveal();
  initStatCounters();
  initSkillBars();
  initTilt();
  initMagnetic();
  initPhotoParallax();
  initContactForm();
  initBackToTop();
  initKonamiCode();
  initConsoleArt();
});

// ============================================
// PWA — SERVICE WORKER REGISTRATION
// Enables offline support and installability
// ============================================
function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('%c✅ PWA Ready!', 'color: #10b981; font-weight: bold;', 'Service Worker registered.');
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });

    // Listen for app installation
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;

      // Show custom install button after 30 seconds
      setTimeout(() => {
        if (deferredPrompt && !sessionStorage.getItem('install-prompted')) {
          showInstallPrompt(deferredPrompt);
          sessionStorage.setItem('install-prompted', 'true');
        }
      }, 30000);
    });

    // Detect successful install
    window.addEventListener('appinstalled', () => {
      console.log('%c🎉 App Installed!', 'color: #10b981; font-weight: bold;');
      if (typeof unlockAchievement === 'function') {
        unlockAchievement('installer', 'App Installer', 'You installed my portfolio as an app!');
      }
    });
  }
}

function showInstallPrompt(deferredPrompt) {
  const banner = document.createElement('div');
  banner.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    max-width: 400px;
    margin: 0 auto;
    padding: 16px 20px;
    background: var(--bg-card, rgba(20, 20, 30, 0.95));
    backdrop-filter: blur(20px);
    border: 1px solid var(--brand-primary, #6366f1);
    border-radius: 16px;
    box-shadow: 0 20px 50px -10px rgba(99,102,241,0.5);
    z-index: 9998;
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Inter', sans-serif;
    color: var(--text-primary, #f5f5f7);
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  banner.innerHTML = `
    <div style="font-size: 28px;">📱</div>
    <div style="flex: 1; font-size: 14px;">
      <strong>Install this portfolio</strong>
      <div style="font-size: 12px; opacity: 0.7;">Use it like a native app</div>
    </div>
    <button id="install-yes" style="padding: 8px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border: none; border-radius: 9999px; font-weight: 600; cursor: pointer; font-size: 13px;">Install</button>
    <button id="install-no" style="background: transparent; border: none; color: #71717a; cursor: pointer; font-size: 20px; padding: 4px 8px;">×</button>
  `;
  document.body.appendChild(banner);

  document.getElementById('install-yes').addEventListener('click', async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      banner.remove();
    }
  });

  document.getElementById('install-no').addEventListener('click', () => {
    banner.remove();
  });
}

// Initialize PWA
initPWA();