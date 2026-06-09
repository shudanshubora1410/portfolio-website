// ============================================
// ============================================
// FEATURES.JS — Premium Interactive Features
// Project Modal, Code Showcase, Timeline,
// Testimonials, Command Palette, Quiz, Greeting
// Terminal, Matrix Rain, Snake Game,
// Achievements, 3D Hero, Activity Tracker
// ============================================
// ============================================

const prefersReducedMotionFeat = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// ============================================
// 1. PROJECT MODAL — Full Case Studies
// ============================================

const projectsData = {
  resumatch: {
    tag: 'Final Year Project · 6 months · Team of 5',
    title: 'ResuMatch Pro',
    subtitle: 'A production-grade ATS and Recruitment Intelligence Platform with custom rule-based NLP engine, 10-stage processing pipeline, and 500+ skill vocabulary across 9 domains.',
    image: 'assets/images/project1.jpg',
    stats: [
      { num: '210+', label: 'Total Files' },
      { num: '16',   label: 'DB Tables' },
      { num: '500+', label: 'Skills DB' },
      { num: '10',   label: 'Pipeline Stages' }
    ],
    overview: 'ResuMatch Pro is an end-to-end recruitment intelligence platform that goes beyond traditional ATS systems. Built as my final year B.Tech IT project at GLBITM, it uses a custom rule-based NLP engine — no AI/ML libraries — to score, rank, and analyze candidate resumes against job requirements in real time.',
    features: [
      { icon: '🧠', title: 'Custom NLP Engine',         desc: 'Rule-based 10-stage pipeline: extraction → normalization → section detection → stopword removal → synonym mapping → skill extraction → action verbs → experience → achievements → contacts' },
      { icon: '🎯', title: '6-Category Scoring (100 pts)', desc: 'Keyword Match (30), Skill Relevance (25), Experience Quality (20), Achievements (15), Formatting (10), Education (5)' },
      { icon: '🔐', title: 'Dual JWT Authentication',   desc: '15-minute access token + 7-day refresh token with BCrypt-12 password hashing via Spring Security 6' },
      { icon: '⚡', title: 'Dynamic Rescoring',         desc: 'Automatically updates all applicant scores when recruiters modify job requirements — no manual recalculation' },
      { icon: '📊', title: 'Confidence Weighting',      desc: 'Skills (1.0) · Experience (0.85) · Projects (0.75) — section-aware keyword matching' },
      { icon: '📁', title: 'Multi-Format Parsing',      desc: 'PDF parsing via Apache PDFBox, DOCX via Apache POI, plain text fallback' }
    ],
    tech: [
      'Java 17', 'Spring Boot 3.2', 'Spring Security 6', 'Spring Data JPA',
      'Hibernate ORM', 'MySQL 8.0', 'JWT', 'BCrypt', 'Apache PDFBox',
      'Apache POI', 'Maven', 'Docker', 'Nginx', 'HTML5', 'CSS3',
      'JavaScript', 'Chart.js', 'Bootstrap 5'
    ],
    architecture: [
      { num: '1', title: 'Frontend Layer', tech: 'HTML5 + CSS3 + JS + Chart.js' },
      { num: '2', title: 'API Layer',      tech: 'Spring Boot REST + JWT' },
      { num: '3', title: 'Data Layer',     tech: 'MySQL + JPA + Hibernate' }
    ],
    process: [
      { title: 'Database Design', desc: 'Designed 16 relational tables with proper foreign keys, indexes, and JPA mappings' },
      { title: 'NLP Engine',      desc: 'Built a 10-stage rule-based pipeline with zero external AI/ML dependencies' },
      { title: 'Security Layer',  desc: 'Implemented Spring Security 6 with dual JWT tokens and BCrypt-12 hashing' },
      { title: 'REST API',        desc: 'Built 7 controllers with proper validation, exception handling, and DTO mapping' },
      { title: 'Frontend',        desc: '31 HTML pages + 28 JavaScript modules connected to backend APIs' },
      { title: 'DevOps',          desc: 'Docker Compose orchestration with Nginx reverse proxy for production' }
    ],
    liveUrl: null,
    repoUrl: 'https://github.com/shudanshubora1410/resumatch-pro'
  },

  'cafe-roadway': {
    tag: '43 Features · 0 Frameworks · 3 Files',
    title: 'Cafe Roadway',
    subtitle: 'A dark-luxury restaurant website with 43+ interactive features built using only HTML5, CSS3, and Vanilla JavaScript — zero libraries, zero frameworks.',
    image: 'assets/images/project2.jpg',
    stats: [
      { num: '43+', label: 'Features' },
      { num: '3',   label: 'Files Only' },
      { num: '0',   label: 'Frameworks' },
      { num: '8',   label: 'Keyboard Shortcuts' }
    ],
    overview: 'Cafe Roadway was a pure-language mastery challenge: build a fully functional, premium restaurant website with 43+ features using nothing but HTML, CSS, and Vanilla JavaScript. No React, no Vue, no jQuery — just core web fundamentals taken to their limit.',
    features: [
      { icon: '🧮', title: 'Bill Calculator',   desc: 'Auto GST computation with WhatsApp API integration for instant order placement' },
      { icon: '🌗', title: 'Dark/Light Mode',   desc: 'Theme toggle with LocalStorage persistence across sessions' },
      { icon: '🎰', title: 'Spin-the-Wheel Game', desc: 'Custom-built discount game with Canvas-based animations' },
      { icon: '🎉', title: 'Confetti Animation', desc: 'Canvas-rendered confetti for special celebrations and wins' },
      { icon: '🔍', title: 'Live Menu Search',  desc: 'Real-time fuzzy search filtering across the entire menu' },
      { icon: '📅', title: 'Table Booking',     desc: 'Reservation system with date/time picker and form validation' },
      { icon: '🕐', title: 'Happy Hours Timer', desc: 'Live countdown for time-limited offers and specials' },
      { icon: '⌨️', title: '8 Keyboard Shortcuts', desc: 'Power-user navigation shortcuts for instant section access' }
    ],
    tech: [
      'HTML5', 'CSS3 Grid', 'CSS Animations', 'Vanilla JS ES6+',
      'Canvas API', 'LocalStorage API', 'WhatsApp API',
      'JSON-LD', 'Open Graph', 'SEO'
    ],
    architecture: [
      { num: '1', title: 'Single HTML', tech: 'Semantic + JSON-LD Schema' },
      { num: '2', title: 'Single CSS',  tech: 'Custom properties + Grid' },
      { num: '3', title: 'Single JS',   tech: 'Vanilla ES6+ modules' }
    ],
    process: [
      { title: 'Pure Vanilla',       desc: 'Built every feature without touching a single library or framework' },
      { title: 'Canvas API',         desc: 'Hand-coded confetti and wheel game using HTML5 Canvas' },
      { title: 'LocalStorage',       desc: 'Persistent theme, cart, and user preferences across sessions' },
      { title: 'Full SEO',           desc: 'JSON-LD restaurant schema + Open Graph + Twitter cards' },
      { title: 'Mobile-First',       desc: 'Tested on real iPhones, Androids, tablets, and desktops' },
      { title: 'Zero Dependencies',  desc: 'Loads instantly — no npm, no CDN bloat, no third-party JS' }
    ],
    liveUrl: 'https://shudanshubora1410.github.io/cafe-roadway',
    repoUrl: 'https://github.com/shudanshubora1410/cafe-roadway'
  },

  homyz: {
    tag: 'Incapp Web Dev Final Project',
    title: 'Homyz — Real Estate Platform',
    subtitle: 'A modern real estate web platform targeting Delhi NCR with dynamic property filtering, Google Sheets as serverless backend, and a complete client-side architecture.',
    image: 'assets/images/project3.jpg',
    stats: [
      { num: '5',    label: 'Cities Covered' },
      { num: '4',    label: 'Property Types' },
      { num: '0',    label: 'Backend Servers' },
      { num: '100%', label: 'Mobile First' }
    ],
    overview: 'Homyz was selected as the official Final Project for the Web Development course at Incapp IT Training Institute. It tackles a real problem — finding properties in Delhi NCR — with a clever serverless architecture using Google Sheets API as the entire backend.',
    features: [
      { icon: '🔍', title: 'Dynamic Filtering',   desc: 'Filter by Apartments, Villas, Houses, Penthouses with smooth CSS fade transitions' },
      { icon: '☁️', title: 'Serverless Backend',  desc: 'Google Sheets API stores all contact form leads — no server required' },
      { icon: '💬', title: 'WhatsApp CTA',         desc: 'Floating WhatsApp button for instant contact with agents' },
      { icon: '🗺️', title: 'Locality Explorer',   desc: 'Animated section showcasing all 5 covered cities in Delhi NCR' },
      { icon: '❤️', title: 'Favorites System',    desc: 'Heart animation with localStorage persistence for saved properties' },
      { icon: '🔔', title: 'Toast Notifications', desc: 'Beautiful toast system for user feedback on all actions' },
      { icon: '📊', title: 'Animated Stats',       desc: 'Counter animations triggered on scroll for engagement' },
      { icon: '🎨', title: 'AOS Animations',       desc: 'Scroll-triggered animations throughout for a premium feel' }
    ],
    tech: [
      'HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap 5',
      'Google Sheets API', 'AOS Library', 'Google Maps API', 'GitHub Pages'
    ],
    architecture: [
      { num: '1', title: 'Client-Side App', tech: 'HTML + Bootstrap + JS' },
      { num: '2', title: 'API Bridge',      tech: 'Google Apps Script' },
      { num: '3', title: 'Data Storage',    tech: 'Google Sheets' }
    ],
    process: [
      { title: 'No Backend',       desc: 'Designed entirely around a serverless architecture using Google Sheets' },
      { title: 'Property Grid',    desc: 'CSS Grid with smooth filter transitions and instant rendering' },
      { title: 'Lead Capture',     desc: 'Contact form data flows directly to a Google Sheet via Apps Script' },
      { title: 'Maps Integration', desc: 'Google Maps embed for each property location' },
      { title: 'Mobile Optimized', desc: 'Mobile-first design with custom scrollbar styling' },
      { title: 'GitHub Pages',     desc: 'Deployed with continuous integration — push to main = live update' }
    ],
    liveUrl: 'https://shudanshubora1410.github.io/Homyz',
    repoUrl: 'https://github.com/shudanshubora1410/Homyz'
  }
};

const projectOrder = ['resumatch', 'cafe-roadway', 'homyz'];
let currentProjectIdx = 0;

function initProjectModal() {
  const modal      = document.getElementById('project-modal');
  const content    = document.getElementById('modal-content');
  const closeBtn   = document.getElementById('modal-close');
  const prevBtn    = document.getElementById('modal-prev');
  const nextBtn    = document.getElementById('modal-next');
  const currentEl  = document.getElementById('modal-current');
  const totalEl    = document.getElementById('modal-total');

  if (!modal || !content) return;

  totalEl.textContent = projectOrder.length;

  // Open modal from project cards
  document.querySelectorAll('.clickable-project').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const key = card.dataset.project;
      const idx = projectOrder.indexOf(key);
      if (idx !== -1) openProject(idx);
    });
  });

  function openProject(idx) {
    currentProjectIdx = idx;
    const key  = projectOrder[idx];
    const data = projectsData[key];
    if (!data) return;

    currentEl.textContent  = idx + 1;
    prevBtn.disabled        = idx === 0;
    nextBtn.disabled        = idx === projectOrder.length - 1;

    content.innerHTML = renderProjectContent(data);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.scrollTo({ top: 0, behavior: 'auto' });

    if (typeof unlockAchievement === 'function') {
      unlockAchievement('explorer', 'Explorer', 'You opened a project case study!');
    }
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  prevBtn.addEventListener('click', () => {
    if (currentProjectIdx > 0) openProject(currentProjectIdx - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentProjectIdx < projectOrder.length - 1) openProject(currentProjectIdx + 1);
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'ArrowLeft'  && currentProjectIdx > 0)                    openProject(currentProjectIdx - 1);
    if (e.key === 'ArrowRight' && currentProjectIdx < projectOrder.length - 1) openProject(currentProjectIdx + 1);
  });
}

function renderProjectContent(d) {
  const ctaButtons = [];

  if (d.liveUrl) {
    ctaButtons.push(`
      <a href="${d.liveUrl}" class="btn btn-primary btn-lg magnetic"
         target="_blank" rel="noopener noreferrer">
        <span>View Live Demo</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5">
          <path d="M7 17L17 7M7 7h10v10"/>
        </svg>
      </a>
    `);
  }

  if (d.repoUrl) {
    ctaButtons.push(`
      <a href="${d.repoUrl}" class="btn btn-ghost btn-lg magnetic"
         target="_blank" rel="noopener noreferrer">
        <span>View Source</span>
      </a>
    `);
  }

  return `
    <div class="modal-hero">
      <span class="modal-tag">${d.tag}</span>
      <h2 class="modal-title" id="modal-title">${d.title}</h2>
      <p class="modal-subtitle">${d.subtitle}</p>
    </div>

    <div class="modal-section">
      <div class="modal-gallery">
        <img src="${d.image}" alt="${d.title} screenshot" class="modal-gallery-main">
      </div>
      <div class="modal-stats-grid">
        ${d.stats.map(s => `
          <div class="modal-stat">
            <span class="modal-stat-num">${s.num}</span>
            <span class="modal-stat-label">${s.label}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Overview</h3>
      <p style="color: var(--text-secondary); line-height: 1.7; font-size: var(--text-lg);">
        ${d.overview}
      </p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Key Features</h3>
      <div class="modal-features-list">
        ${d.features.map(f => `
          <div class="modal-feature">
            <span class="modal-feature-icon">${f.icon}</span>
            <div class="modal-feature-text">
              <strong>${f.title}</strong>
              <span>${f.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Tech Stack</h3>
      <div class="modal-tech-grid">
        ${d.tech.map(t => `<span class="modal-tech">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Architecture</h3>
      <div class="modal-architecture">
        ${d.architecture.map(a => `
          <div class="arch-layer">
            <span class="arch-layer-num">${a.num}</span>
            <div class="arch-layer-title">${a.title}</div>
            <div class="arch-layer-tech">${a.tech}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Build Process</h3>
      <div class="modal-process">
        ${d.process.map(p => `
          <div class="process-step">
            <div class="process-step-text">
              <strong>${p.title}</strong>
              <span>${p.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-cta">
      ${ctaButtons.join('')}
    </div>
  `;
}


// ============================================
// 2. CODE SHOWCASE — Java / JavaScript / SQL
// ============================================

const codeSnippets = {
  java: {
    filename: 'SecurityConfig.java',
    info: 'From <strong>ResuMatch Pro</strong> — Spring Security 6 configuration with JWT authentication and BCrypt password hashing',
    code: `package com.resumatch.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authProvider;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter,
                          AuthenticationProvider authProvider) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.authProvider  = authProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/recruiter/**").hasAnyRole("RECRUITER", "ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authProvider)
            .addFilterBefore(jwtAuthFilter,
                UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCrypt with strength 12 — production-grade
        return new BCryptPasswordEncoder(12);
    }
}`
  },

  javascript: {
    filename: 'billCalculator.js',
    info: 'From <strong>Cafe Roadway</strong> — Vanilla JS bill calculator with GST computation and WhatsApp API integration',
    code: `// ============================================
// Bill Calculator with GST + WhatsApp Order
// Zero dependencies — pure Vanilla JavaScript
// ============================================

const GST_RATE         = 0.05; // 5% GST
const RESTAURANT_PHONE = '919978648457';

const cart = JSON.parse(localStorage.getItem('cafe-cart')) || [];

function addToCart(itemId, name, price) {
  const existing = cart.find(item => item.id === itemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: itemId, name, price, quantity: 1 });
  }

  saveCart();
  updateCartDisplay();
  showToast(\`✅ \${name} added to cart\`);
}

function calculateBill() {
  const subtotal = cart.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  );

  const gst   = subtotal * GST_RATE;
  const total = subtotal + gst;

  return {
    subtotal:  subtotal.toFixed(2),
    gst:       gst.toFixed(2),
    total:     total.toFixed(2),
    itemCount: cart.reduce((sum, item) => sum + item.quantity, 0)
  };
}

function sendOrderViaWhatsApp() {
  if (cart.length === 0) {
    showToast('🛒 Cart is empty!', 'error');
    return;
  }

  const bill = calculateBill();

  const orderText = cart
    .map(item => \`• \${item.name} x\${item.quantity} = ₹\${item.price * item.quantity}\`)
    .join('%0A');

  const message =
    \`Hi Cafe Roadway! 👋%0A%0AI'd like to place an order:%0A%0A\${orderText}\` +
    \`%0A%0ASubtotal: ₹\${bill.subtotal}%0AGST (5%): ₹\${bill.gst}\` +
    \`%0A*Total: ₹\${bill.total}*%0A%0AThank you!\`;

  const whatsappUrl = \`https://wa.me/\${RESTAURANT_PHONE}?text=\${message}\`;
  window.open(whatsappUrl, '_blank');

  launchConfetti();
  showToast('🎉 Order sent! We\\'ll contact you soon.');
}

function saveCart() {
  localStorage.setItem('cafe-cart', JSON.stringify(cart));
}`
  },

  sql: {
    filename: 'scoring_query.sql',
    info: 'From <strong>ResuMatch Pro</strong> — Multi-table JOIN query that calculates dynamic ATS scores across 6 weighted categories',
    code: `-- ============================================
-- Dynamic ATS Score Calculation Query
-- Aggregates scores across 6 weighted categories
-- Used by ResuMatch Pro's rescoring engine
-- ============================================

SELECT
    a.applicant_id,
    a.full_name,
    a.email,
    j.title AS job_title,

    -- Category 1: Keyword Match (30 points)
    COALESCE(SUM(
        CASE
            WHEN km.section = 'SKILLS'     THEN km.match_count * 1.0
            WHEN km.section = 'EXPERIENCE' THEN km.match_count * 0.85
            WHEN km.section = 'PROJECTS'   THEN km.match_count * 0.75
            ELSE                                km.match_count * 0.5
        END
    ), 0) * 0.30 AS keyword_score,

    -- Category 2: Skill Relevance (25 points)
    (
        SELECT COUNT(DISTINCT s.skill_id)
        FROM   applicant_skills aps
        JOIN   skills s             ON aps.skill_id = s.skill_id
        JOIN   job_required_skills jrs ON s.skill_id = jrs.skill_id
        WHERE  aps.applicant_id = a.applicant_id
          AND  jrs.job_id       = j.job_id
    ) * 2.5 AS skill_score,

    -- Category 3: Experience Quality (20 points)
    LEAST(20, (
        SELECT COALESCE(SUM(
            EXTRACT(YEAR FROM AGE(end_date, start_date))
        ), 0) * 4
        FROM applicant_experience
        WHERE applicant_id = a.applicant_id
    )) AS experience_score,

    -- Category 4: Achievements (15 points)
    LEAST(15, (
        SELECT COUNT(*) * 3
        FROM applicant_achievements
        WHERE applicant_id = a.applicant_id
    )) AS achievements_score,

    -- Category 5: Formatting & Structure (10 points)
    a.formatting_score,

    -- Category 6: Education Match (5 points)
    CASE
        WHEN a.highest_degree = j.required_degree THEN 5
        WHEN a.highest_degree > j.required_degree THEN 5
        ELSE 2
    END AS education_score,

    NOW() AS calculated_at

FROM applicants a
JOIN applications app ON a.applicant_id = app.applicant_id
JOIN jobs j           ON app.job_id     = j.job_id
LEFT JOIN keyword_matches km
    ON km.applicant_id = a.applicant_id
   AND km.job_id       = j.job_id

WHERE j.status      = 'ACTIVE'
  AND app.submitted_at > NOW() - INTERVAL '30 DAYS'

GROUP BY
    a.applicant_id, a.full_name, a.email,
    j.title, j.job_id,
    a.formatting_score, a.highest_degree, j.required_degree

ORDER BY (
    keyword_score + skill_score + experience_score
    + achievements_score + a.formatting_score + education_score
) DESC

LIMIT 50;`
  }
};

function initCodeShowcase() {
  const tabs       = document.querySelectorAll('.code-tab');
  const codeEl     = document.getElementById('code-content');
  const filenameEl = document.getElementById('code-filename');
  const infoEl     = document.getElementById('code-info-text');
  const copyBtn    = document.getElementById('copy-code-btn');

  if (!tabs.length || !codeEl) return;

  function loadSnippet(lang) {
    const snippet = codeSnippets[lang];
    if (!snippet) return;

    codeEl.textContent  = snippet.code;
    codeEl.className    = `language-${lang}`;
    filenameEl.textContent = snippet.filename;
    infoEl.innerHTML    = snippet.info;

    if (window.Prism) Prism.highlightElement(codeEl);

    tabs.forEach(t => t.classList.toggle('active', t.dataset.lang === lang));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => loadSnippet(tab.dataset.lang));
  });

  loadSnippet('java');

  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeEl.textContent);
      copyBtn.classList.add('copied');
      copyBtn.querySelector('span').textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.querySelector('span').textContent = 'Copy';
      }, 2000);

      if (typeof unlockAchievement === 'function') {
        unlockAchievement('coder', 'Code Curious', 'You copied a code snippet!');
      }
    } catch (err) {
      console.error('Copy failed:', err);
    }
  });
}


// ============================================
// 3. TIMELINE — Scroll Animations
// ============================================

function initTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
}


// ============================================
// 4. TESTIMONIALS CAROUSEL
// ============================================

function initTestimonials() {
  const track         = document.getElementById('testimonials-track');
  const prevBtn       = document.getElementById('testi-prev');
  const nextBtn       = document.getElementById('testi-next');
  const dotsContainer = document.getElementById('testi-dots');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  let current      = 0;
  let autoplayTimer = null;

  dotsContainer.innerHTML = Array.from({ length: total }, (_, i) =>
    `<button class="testi-dot${i === 0 ? ' active' : ''}"
             aria-label="Go to testimonial ${i + 1}"
             data-idx="${i}"></button>`
  ).join('');

  const dots = dotsContainer.querySelectorAll('.testi-dot');

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  prevBtn?.addEventListener('click', () => { prev(); resetAutoplay(); });
  nextBtn?.addEventListener('click', () => { next(); resetAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.idx, 10));
      resetAutoplay();
    });
  });

  function startAutoplay() {
    if (prefersReducedMotionFeat) return;
    autoplayTimer = setInterval(next, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  track.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  track.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let touchStartX = 0;
  let touchEndX   = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetAutoplay();
    }
  }, { passive: true });

  startAutoplay();
}


// ============================================
// 5. COMMAND PALETTE (Ctrl+K)
// ============================================

const cmdCommands = [
  {
    group: 'Navigation',
    items: [
      { id: 'nav-about',        title: 'Go to About',        desc: 'Learn about my background',     icon: '👤', shortcut: 'G A', action: () => scrollToSection('#about') },
      { id: 'nav-journey',      title: 'Go to Journey',      desc: 'View my timeline',              icon: '🗺️', shortcut: 'G J', action: () => scrollToSection('#journey') },
      { id: 'nav-skills',       title: 'Go to Skills',       desc: 'See my technical toolkit',      icon: '⚡', shortcut: 'G S', action: () => scrollToSection('#skills') },
      { id: 'nav-projects',     title: 'Go to Projects',     desc: 'Browse my work',                icon: '💼', shortcut: 'G P', action: () => scrollToSection('#projects') },
      { id: 'nav-code',         title: 'Go to Code',         desc: 'View code samples',             icon: '💻', shortcut: 'G C', action: () => scrollToSection('#code') },
      { id: 'nav-testimonials', title: 'Go to Testimonials', desc: 'Read what people say',          icon: '💬', shortcut: 'G T', action: () => scrollToSection('#testimonials') },
      { id: 'nav-terminal',     title: 'Go to Terminal',     desc: 'Try interactive terminal',      icon: '⌨️', shortcut: 'G ⌨', action: () => scrollToSection('#terminal') },
      { id: 'nav-contact',      title: 'Go to Contact',      desc: 'Get in touch',                  icon: '📧', shortcut: 'G M', action: () => scrollToSection('#contact') }
    ]
  },
  {
    group: 'Projects',
    items: [
      { id: 'proj-resumatch', title: 'View ResuMatch Pro', desc: 'Open full case study', icon: '🏆', action: () => openProjectByKey('resumatch') },
      { id: 'proj-cafe',      title: 'View Cafe Roadway',  desc: 'Open full case study', icon: '☕', action: () => openProjectByKey('cafe-roadway') },
      { id: 'proj-homyz',     title: 'View Homyz',          desc: 'Open full case study', icon: '🏠', action: () => openProjectByKey('homyz') }
    ]
  },
  {
    group: 'Actions',
    items: [
      { id: 'act-cv',       title: 'Download CV',    desc: 'Get my PDF resume',                   icon: '📄', action: () => window.open('assets/files/cv.pdf', '_blank') },
      { id: 'act-email',    title: 'Copy Email',     desc: 'shudanshubora1410@gmail.com',         icon: '📋', action: () => copyToClipboard('shudanshubora1410@gmail.com', 'Email copied!') },
      { id: 'act-github',   title: 'Open GitHub',    desc: 'View my repositories',                icon: '🐙', action: () => window.open('https://github.com/shudanshubora1410', '_blank') },
      { id: 'act-linkedin', title: 'Open LinkedIn',  desc: 'Connect with me',                     icon: '💼', action: () => window.open('https://www.linkedin.com/in/shudanshubora/', '_blank') },
      { id: 'act-theme',    title: 'Toggle Theme',   desc: 'Switch dark/light mode',              icon: '🌓', action: () => document.getElementById('theme-toggle')?.click() },
      { id: 'act-print',    title: 'Print Resume',   desc: 'Print-friendly view',                 icon: '🖨️', action: () => printResume() }
    ]
  },
  {
    group: 'Fun',
    items: [
      { id: 'fun-konami', title: 'Konami Code',  desc: '↑↑↓↓←→←→BA for surprise', icon: '🎮', action: () => triggerKonami() },
      { id: 'fun-matrix', title: 'Matrix Rain',  desc: 'Enter the Matrix',          icon: '🟢', action: () => triggerMatrixRain() },
      { id: 'fun-snake',  title: 'Play Snake',   desc: 'Classic retro game',        icon: '🐍', action: () => openSnakeGame() }
    ]
  }
];

function initCommandPalette() {
  const palette = document.getElementById('cmd-palette');
  const input   = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');
  const openBtn = document.getElementById('cmd-palette-btn');
  if (!palette || !input || !results) return;

  let activeIdx    = 0;
  let filteredItems = [];

  function open() {
    palette.classList.add('is-open');
    palette.setAttribute('aria-hidden', 'false');
    input.value  = '';
    activeIdx    = 0;
    renderResults('');
    setTimeout(() => input.focus(), 50);
    document.body.style.overflow = 'hidden';

    if (typeof unlockAchievement === 'function') {
      unlockAchievement('hacker', 'Power User', 'You opened the command palette!');
    }
  }

  function close() {
    palette.classList.remove('is-open');
    palette.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderResults(query) {
    const q = query.toLowerCase().trim();
    filteredItems = [];
    let html = '';

    cmdCommands.forEach(group => {
      const matches = group.items.filter(item =>
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      );

      if (matches.length > 0) {
        html += `<div class="cmd-group"><div class="cmd-group-label">${group.group}</div>`;
        matches.forEach(item => {
          const idx = filteredItems.length;
          filteredItems.push(item);
          html += `
            <button class="cmd-item${idx === activeIdx ? ' active' : ''}" data-idx="${idx}">
              <span class="cmd-item-icon">${item.icon}</span>
              <span class="cmd-item-content">
                <span class="cmd-item-title">${item.title}</span>
                <span class="cmd-item-desc">${item.desc}</span>
              </span>
              ${item.shortcut ? `<span class="cmd-item-shortcut">${item.shortcut}</span>` : ''}
            </button>
          `;
        });
        html += '</div>';
      }
    });

    if (!html) {
      html = '<div class="cmd-empty">No commands found.<br><small>Try "github" or "theme"</small></div>';
    }

    results.innerHTML = html;

    results.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        executeCommand(parseInt(el.dataset.idx, 10));
      });
    });
  }

  function updateActive() {
    results.querySelectorAll('.cmd-item').forEach((el, i) => {
      el.classList.toggle('active', i === activeIdx);
      if (i === activeIdx) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function executeCommand(idx) {
    const item = filteredItems[idx];
    if (item && typeof item.action === 'function') {
      close();
      setTimeout(() => item.action(), 100);
    }
  }

  openBtn?.addEventListener('click', open);

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      palette.classList.contains('is-open') ? close() : open();
    }
    if (e.key === 'Escape' && palette.classList.contains('is-open')) close();
  });

  palette.querySelector('.cmd-backdrop')?.addEventListener('click', close);

  input.addEventListener('input', (e) => {
    activeIdx = 0;
    renderResults(e.target.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, filteredItems.length - 1);
      updateActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      updateActive();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(activeIdx);
    }
  });
}

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) {
    const offset = 70;
    const top    = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function openProjectByKey(key) {
  const card = document.querySelector(`[data-project="${key}"]`);
  if (card) card.click();
}

async function copyToClipboard(text, msg) {
  try {
    await navigator.clipboard.writeText(text);
    showSimpleToast(msg || 'Copied!');
  } catch (err) {
    console.error('Copy failed:', err);
  }
}

function showSimpleToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--brand-gradient);
    color: white;
    padding: 14px 24px;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.875rem;
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
  }, 2500);
}


// ============================================
// 6. SMART GREETING BASED ON TIME
// ============================================

function initSmartGreeting() {
  const toast = document.getElementById('greeting-toast');
  const text  = document.getElementById('greeting-text');
  const close = toast?.querySelector('.greeting-close');
  if (!toast || !text) return;

  if (sessionStorage.getItem('greeting-shown')) return;

  const hour = new Date().getHours();
  let msg = '';

  if      (hour >= 5  && hour < 12) msg = '☀️ Good morning! Hope you have a productive day';
  else if (hour >= 12 && hour < 17) msg = '👋 Good afternoon! Thanks for stopping by';
  else if (hour >= 17 && hour < 21) msg = '🌅 Good evening! Glad you made it here';
  else                               msg = '🌙 Working late? Same here. Welcome!';

  text.innerHTML = msg;

  const showTimer = setTimeout(() => {
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');
  }, 2500);

  const hideTimer = setTimeout(() => {
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
  }, 10500);

  close?.addEventListener('click', () => {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
  });

  sessionStorage.setItem('greeting-shown', 'true');
}


// ============================================
// 7. QUIZ WIDGET
// ============================================

const quizQuestions = [
  {
    q: 'What will this Java code output?',
    code: 'String a = "Java";\nString b = "Java";\nSystem.out.println(a == b);',
    options: ['true', 'false', 'Compile error', 'NullPointerException'],
    correct: 0,
    explain: '"Java" is stored in the String Pool. Both references point to the same object.'
  },
  {
    q: 'Which collection maintains insertion order AND allows duplicates?',
    code: null,
    options: ['HashSet', 'TreeSet', 'ArrayList', 'HashMap'],
    correct: 2,
    explain: 'ArrayList maintains insertion order and allows duplicate elements.'
  },
  {
    q: 'What is the time complexity of HashMap.get() on average?',
    code: null,
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
    correct: 2,
    explain: 'HashMap.get() is O(1) on average with a good hash function.'
  }
];

function initQuiz() {
  const startBtn  = document.getElementById('quiz-start-btn');
  const container = document.getElementById('quiz-container');
  if (!startBtn || !container) return;

  let currentQ = 0;
  let score    = 0;

  startBtn.addEventListener('click', () => {
    container.hidden     = false;
    startBtn.style.display = 'none';
    currentQ = 0;
    score    = 0;
    renderQuestion();
  });

  function renderQuestion() {
    if (currentQ >= quizQuestions.length) {
      renderResult();
      return;
    }

    const q = quizQuestions[currentQ];
    container.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-q-num">Question ${currentQ + 1} of ${quizQuestions.length}</div>
        <div class="quiz-q-text">${q.q}</div>
        ${q.code ? `<pre class="quiz-code">${q.code}</pre>` : ''}
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" data-idx="${i}">
              ${String.fromCharCode(65 + i)}. ${opt}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx, 10), btn));
    });
  }

  function handleAnswer(idx, btn) {
    const q          = quizQuestions[currentQ];
    const allOptions = container.querySelectorAll('.quiz-option');
    allOptions.forEach(b => b.classList.add('disabled'));

    if (idx === q.correct) {
      btn.classList.add('correct');
      score++;
    } else {
      btn.classList.add('wrong');
      allOptions[q.correct].classList.add('correct');
    }

    setTimeout(() => {
      currentQ++;
      renderQuestion();
    }, 1500);
  }

  function renderResult() {
    const percent = Math.round((score / quizQuestions.length) * 100);
    let msg = '';

    if      (percent === 100) msg = '🏆 Perfect! You really know your Java!';
    else if (percent >= 66)   msg = '🎯 Great job! You have a strong foundation.';
    else if (percent >= 33)   msg = '💪 Keep practicing — you\'re on the right track!';
    else                      msg = '📚 No worries — that\'s why I\'m here to help!';

    container.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-result-score">${score}/${quizQuestions.length}</div>
        <div class="quiz-result-msg">${msg}</div>
        <button class="btn btn-primary magnetic" id="quiz-retry">Try Again</button>
      </div>
    `;

    document.getElementById('quiz-retry')?.addEventListener('click', () => {
      currentQ = 0;
      score    = 0;
      renderQuestion();
    });

    if (typeof unlockAchievement === 'function' && percent >= 66) {
      unlockAchievement('quiz-master', 'Quiz Master', 'You aced the Java quiz!');
    }
  }
}


// ============================================
// 8. INITIALIZE CORE FEATURES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initProjectModal();
  initCodeShowcase();
  initTimeline();
  initTestimonials();
  initCommandPalette();
  initSmartGreeting();
  initQuiz();
});


// ============================================
// 9. ACHIEVEMENT SYSTEM
// ============================================

const ACHIEVEMENTS = {
  explorer:      { icon: '🗺️', title: 'Explorer',              desc: 'Visited all sections of the portfolio' },
  hacker:        { icon: '💎', title: 'Power User',            desc: 'You opened the command palette!' },
  stalker:       { icon: '👀', title: 'Curious Mind',          desc: 'Spent over 3 minutes here — wow!' },
  curious:       { icon: '🎩', title: 'DevTools Detective',    desc: 'You opened DevTools — a true dev' },
  konami:        { icon: '🎮', title: 'Konami Master',         desc: 'Found the secret cheat code' },
  matrix:        { icon: '🟢', title: 'Welcome to the Matrix', desc: 'You took the red pill' },
  snake:         { icon: '🐍', title: 'Game Player',           desc: 'Found and played the secret game' },
  terminal:      { icon: '⌨️', title: 'Terminal Hacker',       desc: 'Used the interactive terminal' },
  'quiz-master': { icon: '🏆', title: 'Quiz Master',           desc: 'Aced the Java knowledge quiz' },
  coder:         { icon: '📋', title: 'Code Curious',          desc: 'Copied a code snippet' },
  theme:         { icon: '🌓', title: 'Mood Shifter',          desc: 'Toggled between themes' },
  emailer:       { icon: '📧', title: 'Got in Touch',          desc: 'Reached out via the contact form' },
  cv:            { icon: '📄', title: 'Resume Reader',         desc: 'Downloaded the CV' },
  printer:       { icon: '🖨️', title: 'Resume Printer',        desc: 'You printed my resume!' }
};

function unlockAchievement(id, customTitle, customDesc) {
  const unlocked = JSON.parse(localStorage.getItem('portfolio-achievements') || '{}');
  if (unlocked[id]) return;

  unlocked[id] = Date.now();
  localStorage.setItem('portfolio-achievements', JSON.stringify(unlocked));

  const ach = ACHIEVEMENTS[id] || { icon: '🏆', title: customTitle, desc: customDesc };
  showAchievementToast(ach.icon, ach.title, ach.desc);
}

function showAchievementToast(icon, title, desc) {
  const toast  = document.getElementById('achievement-toast');
  const iconEl = toast?.querySelector('.achievement-icon');
  const titleEl = document.getElementById('achievement-title');
  const descEl  = document.getElementById('achievement-desc');

  if (!toast || !iconEl || !titleEl || !descEl) return;

  iconEl.textContent  = icon;
  titleEl.textContent = `Achievement Unlocked: ${title}`;
  descEl.textContent  = desc;

  toast.classList.add('show');
  toast.setAttribute('aria-hidden', 'false');

  playSound('achievement');

  setTimeout(() => {
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
  }, 4000);
}

function initAchievementTracker() {
  // "stalker" — 3 minutes on site
  setTimeout(() => unlockAchievement('stalker'), 180000);

  // "explorer" — visited all sections
  const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'code', 'testimonials', 'contact'];
  const visited  = new Set(JSON.parse(localStorage.getItem('portfolio-visited') || '[]'));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visited.add(entry.target.id);
        localStorage.setItem('portfolio-visited', JSON.stringify([...visited]));
        if (sections.every(s => visited.has(s))) unlockAchievement('explorer');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });

  // "curious" — DevTools open detection
  let devtoolsOpen = false;
  const threshold  = 160;

  setInterval(() => {
    const widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        unlockAchievement('curious');
      }
    } else {
      devtoolsOpen = false;
    }
  }, 1500);

  // "theme" — theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    setTimeout(() => unlockAchievement('theme'), 500);
  });

  // "cv" — CV download
  document.querySelectorAll('a[download][href*="cv"]').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => unlockAchievement('cv'), 500);
    });
  });
}


// ============================================
// 10. SOUND EFFECTS SYSTEM
// ============================================

let soundEnabled = localStorage.getItem('portfolio-sound') === 'on';

function initSoundToggle() {
  const btn = document.getElementById('sound-toggle');
  if (!btn) return;

  document.documentElement.setAttribute('data-sound', soundEnabled ? 'on' : 'off');

  btn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('portfolio-sound', soundEnabled ? 'on' : 'off');
    document.documentElement.setAttribute('data-sound', soundEnabled ? 'on' : 'off');

    if (soundEnabled) {
      playSound('click');
      showSimpleToast('🔊 Sounds enabled');
    } else {
      showSimpleToast('🔇 Sounds disabled');
    }
  });

  // Subtle hover/click sounds on interactive elements
  document.querySelectorAll('.btn, .nav-link, .mobile-nav-link, .code-tab, .testi-btn').forEach(el => {
    el.addEventListener('mouseenter', () => playSound('hover'));
    el.addEventListener('click',      () => playSound('click'));
  });
}

function playSound(type) {
  if (!soundEnabled) return;

  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    let freq, duration, waveType;

    switch (type) {
      case 'hover':
        freq     = 600;
        duration = 0.05;
        waveType = 'sine';
        gain.gain.value = 0.03;
        break;

      case 'click':
        freq     = 800;
        duration = 0.1;
        waveType = 'square';
        gain.gain.value = 0.08;
        break;

      case 'achievement':
        playNote(ctx, 523.25, 0.15, 0.1, 'sine');
        setTimeout(() => playNote(ctx, 659.25, 0.15, 0.1, 'sine'), 100);
        setTimeout(() => playNote(ctx, 783.99, 0.3,  0.1, 'sine'), 200);
        return;

      case 'error':
        freq     = 200;
        duration = 0.2;
        waveType = 'sawtooth';
        gain.gain.value = 0.1;
        break;

      case 'success':
        playNote(ctx, 523.25, 0.1, 0.08, 'sine');
        setTimeout(() => playNote(ctx, 659.25, 0.1, 0.08, 'sine'), 80);
        return;

      default:
        return;
    }

    osc.type           = waveType;
    osc.frequency.value = freq;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);

  } catch (e) {
    // Audio not supported — fail silently
  }
}

function playNote(ctx, freq, duration, vol, type = 'sine') {
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type            = type;
  osc.frequency.value = freq;
  gain.gain.value     = vol;
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}


// ============================================
// 11. INTERACTIVE TERMINAL
// ============================================

const TERMINAL_COMMANDS = {
  help: {
    desc: 'Show all available commands',
    run: () => `Available commands:
<span class="out-info">whoami</span>          - Who is Shudanshu?
<span class="out-info">about</span>           - Show bio
<span class="out-info">skills</span>          - List all my skills
<span class="out-info">skills --all</span>    - Detailed skill breakdown
<span class="out-info">projects</span>        - List all projects
<span class="out-info">project &lt;name&gt;</span>  - Show project details
<span class="out-info">education</span>       - Educational background
<span class="out-info">certs</span>           - List certifications
<span class="out-info">contact</span>         - Get my contact info
<span class="out-info">email</span>           - Copy email to clipboard
<span class="out-info">github</span>          - Open my GitHub
<span class="out-info">linkedin</span>        - Open LinkedIn
<span class="out-info">cv</span>              - Download my CV
<span class="out-info">hire-me</span>         - 😎
<span class="out-info">matrix</span>          - Enter the Matrix
<span class="out-info">snake</span>           - Play Snake game
<span class="out-info">theme</span>           - Toggle dark/light mode
<span class="out-info">date</span>            - Show current date
<span class="out-info">echo &lt;text&gt;</span>    - Print text
<span class="out-info">clear</span>           - Clear terminal
<span class="out-info">exit</span>            - Just kidding, you can't escape ;)`
  },

  whoami: {
    desc: 'About me',
    run: () => `<span class="out-success">Shudanshu Sanjay Bora</span>
4th-year B.Tech IT student at GLBITM, Greater Noida
Java Developer · Spring Boot · Full Stack Web Developer
Currently seeking internship opportunities

📍 Greater Noida, Uttar Pradesh, India
📧 shudanshubora1410@gmail.com
🎓 B.Tech IT 2023-2027`
  },

  about: {
    desc: 'About me',
    run: () => `Hey! I'm Shudanshu, a passionate Java developer in my final years of B.Tech IT.

I love building things that actually work in production:
- <span class="out-info">ResuMatch Pro</span> - 210+ file ATS platform (Final Year Project)
- <span class="out-info">Cafe Roadway</span>  - 43 features, 0 frameworks (Vanilla JS mastery)
- <span class="out-info">Homyz</span>         - Real estate platform with serverless backend

I'm currently looking for internships where I can apply my skills
to real problems and learn from experienced engineers.`
  },

  skills: {
    desc: 'List skills',
    run: () => `<span class="out-success">▸ Languages:</span> Java, JavaScript (ES6+), HTML5, CSS3, SQL, C, Python
<span class="out-success">▸ Backend:</span>   Spring Boot 3.2, Spring Security 6, JPA, Hibernate, JWT
<span class="out-success">▸ Frontend:</span>  Vanilla JS, Bootstrap 5, jQuery, Chart.js, AOS
<span class="out-success">▸ Database:</span>  MySQL 8.0, SQL, Spring Data JPA
<span class="out-success">▸ DevOps:</span>    Git, Docker, Docker Compose, Nginx, Maven
<span class="out-success">▸ Tools:</span>     IntelliJ IDEA, VS Code, Postman, GitHub Pages

Type <span class="out-info">skills --all</span> for detailed breakdown.`
  },

  'skills --all': {
    desc: 'Detailed skills',
    run: () => `<span class="out-success">═══ JAVA — Core &amp; Advanced ═══</span>
OOP, Encapsulation, Inheritance, Polymorphism, Abstraction
Exception Handling, Collections Framework, Multithreading
File I/O, Lambda Expressions, String/Wrapper Classes, Swing GUI

<span class="out-success">═══ SPRING BOOT &amp; BACKEND ═══</span>
Spring Boot 3.2, Spring MVC, REST APIs, Spring Security 6
Spring Data JPA, Hibernate ORM, JWT (Access + Refresh)
BCrypt Hashing, Apache PDFBox, Apache POI, JavaMail

<span class="out-success">═══ DATA STRUCTURES &amp; ALGORITHMS ═══</span>
Arrays, Strings, Linked Lists, Stack, Queue, BST
Graph (BFS/DFS), Dynamic Programming, Backtracking
Hashing, Recursion, Sorting &amp; Searching

<span class="out-success">═══ FRONTEND ═══</span>
HTML5 Semantic, CSS3 Flexbox/Grid, Animations
Vanilla JS ES6+, DOM, Fetch API, Bootstrap 5, jQuery

<span class="out-success">═══ DATABASES ═══</span>
MySQL 8.0, SQL Queries, Relational Design, JPA

<span class="out-success">═══ DEVOPS ═══</span>
Git/GitHub, Docker, Docker Compose, Nginx, Maven
GitHub Pages, Netlify, Postman API Testing`
  },

  projects: {
    desc: 'List projects',
    run: () => `<span class="out-success">▸ ResuMatch Pro</span>          (2025) — Java + Spring Boot ATS Platform
  └─ <span class="out-info">github.com/shudanshubora1410/resumatch-pro</span>

<span class="out-success">▸ Cafe Roadway</span>           (2024) — Restaurant site, 43 features
  └─ <span class="out-info">shudanshubora1410.github.io/cafe-roadway</span>

<span class="out-success">▸ Homyz</span>                  (2024) — Real estate platform
  └─ <span class="out-info">shudanshubora1410.github.io/Homyz</span>

<span class="out-success">▸ Email Sender Java</span>      (2024) — Java Swing desktop app
  └─ <span class="out-info">github.com/shudanshubora1410/Email-Sender-Java</span>

<span class="out-success">▸ LeetCode DSA Java</span>      (Ongoing) — DSA solutions
  └─ <span class="out-info">github.com/shudanshubora1410/LeetCode-Java</span>

Type <span class="out-info">project &lt;name&gt;</span> for details (e.g. <span class="out-info">project resumatch</span>)`
  },

  education: {
    desc: 'Education',
    run: () => `<span class="out-success">🎓 B.Tech in Information Technology</span>
GL Bajaj Institute of Technology and Management (GLBITM)
Greater Noida, Uttar Pradesh
Aug 2023 - Jun 2027 (Pursuing)

<span class="out-success">📜 Class 12 — CBSE (PCM)</span>
S. D. Jain Modern School
2021 - 2023 | Score: 86%

<span class="out-success">📜 Class 10 — CBSE</span>
S. D. Jain Modern School
2019 - 2021 | Score: 92%`
  },

  certs: {
    desc: 'Certifications',
    run: () => `<span class="out-success">🏅 Data Structures &amp; Algorithms using Java</span>
Incapp IT Training Institute, Greater Noida · 2024

<span class="out-success">🏅 Java Programming — Core Java</span>
Incapp IT Training Institute, Greater Noida · 2024

<span class="out-success">🏅 Web Development — HTML, CSS, JavaScript, Bootstrap</span>
Incapp IT Training Institute, Greater Noida · 2024`
  },

  contact: {
    desc: 'Contact info',
    run: () => `📧 Email:    <span class="out-info">shudanshubora1410@gmail.com</span>
📞 Phone:    <span class="out-info">+91 9978648457</span>
📍 Location: Greater Noida, Uttar Pradesh, India

<span class="out-success">Social:</span>
🐙 GitHub:    <span class="out-info">github.com/shudanshubora1410</span>
💼 LinkedIn:  <span class="out-info">linkedin.com/in/shudanshubora</span>

Type <span class="out-info">email</span> to copy email to clipboard.
Type <span class="out-info">github</span> or <span class="out-info">linkedin</span> to open in new tab.`
  },

  'hire-me': {
    desc: 'Easter egg',
    run: () => `<span class="out-success">🎉 Wait, really?! Let's talk!</span>

I'm currently available for:
✓ Java Developer Internships
✓ Full Stack Web Developer Internships
✓ Backend Developer Internships
✓ Software Engineer Internships

Why hire me?
✓ Strong Java &amp; Spring Boot foundation
✓ Real production projects (not just tutorials)
✓ Ship-ready code quality
✓ Quick learner, eager to grow

📧 Reach out: <span class="out-info">shudanshubora1410@gmail.com</span>
💼 LinkedIn:  <span class="out-info">linkedin.com/in/shudanshubora</span>

<span class="out-info">Looking forward to working with you! 🚀</span>`
  },

  date: {
    desc: 'Current date',
    run: () => new Date().toLocaleString()
  },

  exit: {
    desc: 'Exit (jk)',
    run: () => `<span class="out-warn">Nice try. There's no escape from awesomeness. 😎</span>
Type <span class="out-info">help</span> to see commands.`
  }
};

// Project details lookup for terminal
const PROJECT_DETAILS = {
  resumatch: () => `<span class="out-success">═══ ResuMatch Pro ═══</span>
Production-grade ATS &amp; Recruitment Intelligence Platform

<span class="out-info">Tech:</span>      Java 17, Spring Boot 3.2, Spring Security 6, MySQL, JWT, Docker
<span class="out-info">Size:</span>      210+ files | 16 DB tables | 7 REST controllers
<span class="out-info">Engine:</span>    Custom rule-based NLP with 10-stage pipeline
<span class="out-info">Vocab:</span>     500+ skills across 9 domains
<span class="out-info">Scoring:</span>   6 weighted categories totaling 100 points
<span class="out-info">Auth:</span>      JWT dual-token (15min access + 7day refresh)
<span class="out-info">Status:</span>    Final Year Project at GLBITM (Team of 5)

Repo: <span class="out-info">github.com/shudanshubora1410/resumatch-pro</span>`,

  'cafe-roadway': () => `<span class="out-success">═══ Cafe Roadway ═══</span>
Dark-luxury restaurant website with 43+ features

<span class="out-info">Tech:</span>      HTML5, CSS3, Vanilla JavaScript (zero frameworks!)
<span class="out-info">Features:</span>  43+ interactive features in just 3 files
<span class="out-info">Highlights:</span> Bill calculator + GST, WhatsApp ordering,
            spin-the-wheel, dark mode, canvas confetti,
            8 keyboard shortcuts, full SEO

Live: <span class="out-info">shudanshubora1410.github.io/cafe-roadway</span>
Repo: <span class="out-info">github.com/shudanshubora1410/cafe-roadway</span>`,

  cafe: function() { return PROJECT_DETAILS['cafe-roadway'](); },

  homyz: () => `<span class="out-success">═══ Homyz ═══</span>
Real estate platform for Delhi NCR

<span class="out-info">Tech:</span>      HTML5, Bootstrap 5, JavaScript, Google Sheets API
<span class="out-info">Backend:</span>   Serverless — Google Sheets stores all leads
<span class="out-info">Coverage:</span>  Noida, Gurgaon, Greater Noida, Faridabad, S. Delhi
<span class="out-info">Status:</span>    Incapp Web Dev Final Project

Live: <span class="out-info">shudanshubora1410.github.io/Homyz</span>
Repo: <span class="out-info">github.com/shudanshubora1410/Homyz</span>`
};

function initTerminal() {
  const input    = document.getElementById('terminal-input');
  const body     = document.getElementById('terminal-body');
  const clearBtn = document.getElementById('terminal-clear');
  if (!input || !body) return;

  const history = [];
  let historyIdx = -1;

  function addLine(html, isCommand = false) {
    const line = document.createElement('div');
    line.className = 'terminal-line';

    if (isCommand) {
      line.innerHTML = `
        <span class="terminal-prompt">shudanshu@portfolio</span><span class="terminal-colon">:</span><span class="terminal-path">~</span><span class="terminal-dollar">$</span> ${html}
      `;
    } else {
      line.innerHTML = `<span class="terminal-output">${html}</span>`;
    }

    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function executeCommand(cmd) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    history.push(trimmed);
    historyIdx = history.length;

    addLine(trimmed, true);
    unlockAchievement('terminal');

    // Special commands
    if (trimmed === 'clear' || trimmed === 'cls') {
      body.innerHTML = '';
      return;
    }

    if (trimmed.startsWith('echo ')) {
      addLine(trimmed.slice(5));
      return;
    }

    if (trimmed.startsWith('project ')) {
      const projName = trimmed.slice(8).toLowerCase().trim();
      const details  = PROJECT_DETAILS[projName];
      if (details) {
        addLine(typeof details === 'function' ? details() : details);
      } else {
        addLine(`<span class="out-error">Project "${projName}" not found.</span>
Try: <span class="out-info">project resumatch</span>, <span class="out-info">project cafe</span>, or <span class="out-info">project homyz</span>`);
      }
      return;
    }

    if (trimmed === 'email') {
      copyToClipboard('shudanshubora1410@gmail.com', '📧 Email copied!');
      addLine(`<span class="out-success">✓ Email copied: shudanshubora1410@gmail.com</span>`);
      return;
    }

    if (trimmed === 'github') {
      addLine(`<span class="out-info">Opening github.com/shudanshubora1410...</span>`);
      window.open('https://github.com/shudanshubora1410', '_blank');
      return;
    }

    if (trimmed === 'linkedin') {
      addLine(`<span class="out-info">Opening linkedin.com/in/shudanshubora...</span>`);
      window.open('https://www.linkedin.com/in/shudanshubora/', '_blank');
      return;
    }

    if (trimmed === 'cv') {
      addLine(`<span class="out-success">📄 Downloading CV...</span>`);
      window.open('assets/files/cv.pdf', '_blank');
      return;
    }

    if (trimmed === 'matrix') {
      addLine(`<span class="out-success">Welcome to the Matrix. Click canvas to exit.</span>`);
      triggerMatrixRain();
      return;
    }

    if (trimmed === 'snake') {
      addLine(`<span class="out-success">🐍 Launching Snake game...</span>`);
      openSnakeGame();
      return;
    }

    if (trimmed === 'theme') {
      addLine(`<span class="out-success">✓ Theme toggled</span>`);
      document.getElementById('theme-toggle')?.click();
      return;
    }

    // Built-in lookup
    const command = TERMINAL_COMMANDS[trimmed];
    if (command) {
      addLine(command.run());
    } else {
      addLine(`<span class="out-error">Command not found: ${trimmed}</span>
Type <span class="out-info">help</span> to see available commands.`);
    }
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value;
      input.value = '';
      executeCommand(cmd);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        input.value = history[historyIdx] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[historyIdx] || '';
      } else {
        historyIdx  = history.length;
        input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.value.toLowerCase();
      const matches = Object.keys(TERMINAL_COMMANDS).filter(c => c.startsWith(partial));
      if      (matches.length === 1) input.value = matches[0];
      else if (matches.length > 1)   addLine(matches.join('  '));
    }
  });

  // Click anywhere in terminal to focus input
  body.parentElement.addEventListener('click', () => input.focus());

  clearBtn?.addEventListener('click', () => {
    body.innerHTML = '';
    input.focus();
  });

  // Auto-focus when terminal section enters viewport (desktop only)
  const section = document.getElementById('terminal');
  if (section) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          if (window.innerWidth > 768) input.focus();
        }
      });
    }, { threshold: 0.5 });
    obs.observe(section);
  }
}


// ============================================
// 12. MATRIX RAIN EFFECT
// ============================================

let matrixAnimation = null;

function triggerMatrixRain() {
  if (prefersReducedMotionFeat) {
    showSimpleToast('⚠️ Matrix rain disabled (reduced motion)');
    return;
  }

  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');

  const chars    = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#%&@*+-/=<>{}[]()';
  const fontSize = 16;
  const columns  = Math.floor(canvas.width / fontSize);
  const drops    = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x    = i * fontSize;

      // Bright head
      ctx.fillStyle = '#fff';
      ctx.fillText(text, x, y * fontSize);

      // Green trail
      ctx.fillStyle = '#0F0';
      if (y > 1) ctx.fillText(text, x, (y - 1) * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });

    matrixAnimation = requestAnimationFrame(draw);
  }

  draw();
  unlockAchievement('matrix');

  function stop() {
    if (matrixAnimation) cancelAnimationFrame(matrixAnimation);
    matrixAnimation = null;
    canvas.classList.remove('active');
    canvas.removeEventListener('click', stop);
  }

  canvas.addEventListener('click', stop);
  setTimeout(stop, 12000);
}


// ============================================
// 13. SNAKE GAME
// ============================================

let snakeGame = null;

function openSnakeGame() {
  const modal    = document.getElementById('snake-modal');
  const closeBtn = document.getElementById('snake-close');
  const startBtn = document.getElementById('snake-start');
  if (!modal) return;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  unlockAchievement('snake');

  if (!snakeGame) snakeGame = new SnakeGame();

  function closeSnake() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    snakeGame?.stop();
  }

  closeBtn?.addEventListener('click', closeSnake);
  modal.querySelector('.modal-backdrop')?.addEventListener('click', closeSnake);
  startBtn?.addEventListener('click', () => snakeGame.start());

  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeSnake();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

class SnakeGame {
  constructor() {
    this.canvas   = document.getElementById('snake-canvas');
    this.ctx      = this.canvas?.getContext('2d');
    this.scoreEl  = document.getElementById('snake-score');
    this.highEl   = document.getElementById('snake-high');

    this.gridSize  = 20;
    this.tileCount = 20;
    this.snake     = [{ x: 10, y: 10 }];
    this.food      = { x: 5, y: 5 };
    this.dx        = 0;
    this.dy        = 0;
    this.score     = 0;
    this.highScore = parseInt(localStorage.getItem('snake-high') || '0', 10);
    this.running   = false;
    this.loopTimer = null;

    if (this.highEl) this.highEl.textContent = this.highScore;
    this.bindControls();
    this.draw();
  }

  bindControls() {
    document.addEventListener('keydown', (e) => {
      if (!this.running) return;
      switch (e.key) {
        case 'ArrowUp':    if (this.dy !==  1) { this.dx = 0;  this.dy = -1; } e.preventDefault(); break;
        case 'ArrowDown':  if (this.dy !== -1) { this.dx = 0;  this.dy =  1; } e.preventDefault(); break;
        case 'ArrowLeft':  if (this.dx !==  1) { this.dx = -1; this.dy =  0; } e.preventDefault(); break;
        case 'ArrowRight': if (this.dx !== -1) { this.dx =  1; this.dy =  0; } e.preventDefault(); break;
      }
    });
  }

  start() {
    this.snake = [{ x: 10, y: 10 }];
    this.dx    = 1;
    this.dy    = 0;
    this.score = 0;
    if (this.scoreEl) this.scoreEl.textContent = '0';
    this.placeFood();
    this.running = true;
    this.loop();
  }

  stop() {
    this.running = false;
    if (this.loopTimer) clearTimeout(this.loopTimer);
  }

  loop() {
    if (!this.running) return;
    this.update();
    this.draw();
    this.loopTimer = setTimeout(() => this.loop(), 100);
  }

  update() {
    const head = {
      x: this.snake[0].x + this.dx,
      y: this.snake[0].y + this.dy
    };

    // Wall collision
    if (head.x < 0 || head.x >= this.tileCount ||
        head.y < 0 || head.y >= this.tileCount) {
      return this.gameOver();
    }

    // Self collision
    if (this.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
      return this.gameOver();
    }

    this.snake.unshift(head);

    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10;
      if (this.scoreEl) this.scoreEl.textContent = this.score;
      this.placeFood();
      playSound('success');
    } else {
      this.snake.pop();
    }
  }

  placeFood() {
    do {
      this.food = {
        x: Math.floor(Math.random() * this.tileCount),
        y: Math.floor(Math.random() * this.tileCount)
      };
    } while (this.snake.some(seg => seg.x === this.food.x && seg.y === this.food.y));
  }

  draw() {
    if (!this.ctx) return;
    const c    = this.ctx;
    const size = this.gridSize;

    // Background
    c.fillStyle = '#0a0a0f';
    c.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Grid lines
    c.strokeStyle = 'rgba(99,102,241,0.05)';
    c.lineWidth   = 1;
    for (let i = 0; i < this.tileCount; i++) {
      c.beginPath(); c.moveTo(i * size, 0); c.lineTo(i * size, this.canvas.height); c.stroke();
      c.beginPath(); c.moveTo(0, i * size); c.lineTo(this.canvas.width, i * size);  c.stroke();
    }

    // Food
    c.shadowColor = '#ec4899';
    c.shadowBlur  = 15;
    c.fillStyle   = '#ec4899';
    c.fillRect(this.food.x * size + 2, this.food.y * size + 2, size - 4, size - 4);
    c.shadowBlur  = 0;

    // Snake
    this.snake.forEach((seg, i) => {
      const isHead = i === 0;
      c.fillStyle  = isHead ? '#8b5cf6' : '#6366f1';
      if (isHead) { c.shadowColor = '#6366f1'; c.shadowBlur = 10; }
      c.fillRect(seg.x * size + 1, seg.y * size + 1, size - 2, size - 2);
      c.shadowBlur = 0;
    });
  }

  gameOver() {
    this.running = false;
    playSound('error');

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('snake-high', String(this.highScore));
      if (this.highEl) this.highEl.textContent = this.highScore;
      showSimpleToast(`🏆 New High Score: ${this.score}!`);
    } else {
      showSimpleToast(`💀 Game Over! Score: ${this.score}`);
    }

    setTimeout(() => this.draw(), 100);
  }
}

function initSnakeTrigger() {
  const trigger = document.getElementById('snake-trigger');
  trigger?.addEventListener('click', openSnakeGame);
}


// ============================================
// 14. 3D HERO BACKGROUND (Pure Canvas)
// ============================================

function init3DHero() {
  if (prefersReducedMotionFeat) return;

  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const shapeCount = window.innerWidth < 768 ? 4 : 8;
  const shapes = Array.from({ length: shapeCount }, () => createShape());

  function createShape() {
    return {
      x:        Math.random() * canvas.width,
      y:        Math.random() * canvas.height,
      z:        Math.random() * 500,
      vx:       (Math.random() - 0.5) * 0.3,
      vy:       (Math.random() - 0.5) * 0.3,
      vz:       (Math.random() - 0.5) * 0.5,
      size:     30 + Math.random() * 50,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      type:     Math.random() > 0.5 ? 'cube' : 'triangle'
    };
  }

  function drawShape(s) {
    const perspective = 600 / (600 + s.z);
    const px   = s.x * perspective;
    const py   = s.y * perspective;
    const size = s.size * perspective;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(s.rotation);

    ctx.strokeStyle = isDark
      ? `rgba(99, 102, 241, ${0.3 * perspective})`
      : `rgba(99, 102, 241, ${0.4 * perspective})`;
    ctx.lineWidth = 1.5 * perspective;

    if (s.type === 'cube') {
      // Front face
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.stroke();
      // Back face (offset)
      ctx.beginPath();
      ctx.rect(-size / 2 + size * 0.2, -size / 2 - size * 0.2, size, size);
      ctx.stroke();
      // Connecting edges
      ctx.beginPath();
      ctx.moveTo(-size / 2,             -size / 2);
      ctx.lineTo(-size / 2 + size * 0.2, -size / 2 - size * 0.2);
      ctx.moveTo( size / 2,             -size / 2);
      ctx.lineTo( size / 2 + size * 0.2, -size / 2 - size * 0.2);
      ctx.moveTo( size / 2,              size / 2);
      ctx.lineTo( size / 2 + size * 0.2,  size / 2 - size * 0.2);
      ctx.moveTo(-size / 2,              size / 2);
      ctx.lineTo(-size / 2 + size * 0.2,  size / 2 - size * 0.2);
      ctx.stroke();
    } else {
      // Triangle
      ctx.beginPath();
      ctx.moveTo(0,         -size / 2);
      ctx.lineTo(-size / 2,  size / 2);
      ctx.lineTo( size / 2,  size / 2);
      ctx.closePath();
      ctx.stroke();
    }

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(s => {
      s.x        += s.vx;
      s.y        += s.vy;
      s.z        += s.vz;
      s.rotation += s.rotSpeed;

      if (s.x < -100)              s.x = canvas.width  + 100;
      if (s.x > canvas.width + 100) s.x = -100;
      if (s.y < -100)              s.y = canvas.height + 100;
      if (s.y > canvas.height + 100) s.y = -100;
      if (s.z < 0)   s.z = 500;
      if (s.z > 500) s.z = 0;

      drawShape(s);
    });

    requestAnimationFrame(animate);
  }

  animate();
}


// ============================================
// 15. SECRET COMMAND DETECTOR
// Type "matrix", "snake", or "hire" anywhere
// ============================================

function initSecretCommands() {
  let buffer      = '';
  let lastKeyTime = 0;

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key.length !== 1) return;

    const now = Date.now();
    if (now - lastKeyTime > 2000) buffer = '';
    lastKeyTime = now;

    buffer += e.key.toLowerCase();
    if (buffer.length > 15) buffer = buffer.slice(-15);

    if (buffer.includes('matrix')) {
      buffer = '';
      triggerMatrixRain();
    } else if (buffer.includes('snake')) {
      buffer = '';
      openSnakeGame();
    } else if (buffer.includes('hire')) {
      buffer = '';
      scrollToSection('#contact');
      showSimpleToast('💼 Let\'s talk!');
    }
  });
}


// ============================================
// 16. EMAIL FORM ACHIEVEMENT TRACKER
// ============================================

function initFormTracker() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', () => {
    setTimeout(() => unlockAchievement('emailer'), 2000);
  });
}


// ============================================
// 17. PRINT RESUME
// ============================================

function printResume() {
  document.documentElement.setAttribute('data-printing', 'true');

  window.print();

  setTimeout(() => {
    document.documentElement.removeAttribute('data-printing');
  }, 1000);

  if (typeof unlockAchievement === 'function') {
    unlockAchievement('printer', 'Resume Printer', 'You printed my resume!');
  }
}

// Hook Ctrl+P to also unlock the achievement
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
    if (typeof unlockAchievement === 'function') {
      setTimeout(() => unlockAchievement('printer', 'Resume Printer', 'You printed my resume!'), 1000);
    }
  }
});


// ============================================
// 18. HELPER — Konami trigger from palette
// ============================================

function triggerKonami() {
  if (typeof triggerConfetti === 'function') {
    triggerConfetti();
    showSimpleToast('🎉 Konami activated!');
    unlockAchievement('konami');
  }
}


// ============================================
// INITIALIZE ALL ADVANCED FEATURES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initAchievementTracker();
  initSoundToggle();
  initTerminal();
  initSnakeTrigger();
  init3DHero();
  initSecretCommands();
  initFormTracker();
});