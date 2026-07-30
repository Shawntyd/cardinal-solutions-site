// =====================================================
// CARDINAL SOLUTIONS — SITE SCRIPT
// =====================================================

// ---------- DATA: Consulting Services ----------
const SERVICES = [
  {
    num: '01', name: 'Regulatory Compliance Program',
    desc: 'Bimonthly audits and monthly inspections covering 503A, cGMP, USP, and interstate requirements.',
    quarterly: 8000, yearly: 28000
  },
  {
    num: '02', name: 'Quality Assurance Program',
    desc: 'Comprehensive QA program review, R&D assistance, and continuous quality improvement development.',
    quarterly: 10000, yearly: 33000
  },
  {
    num: '03', name: 'Manufacturing Best Practices',
    desc: 'cGMP review and assessment, material analysis, and automation & expansion planning.',
    quarterly: 13500, yearly: 42000
  },
  {
    num: '04', name: 'Supply Chain Management',
    desc: 'Program review, document control audit, and automation & system development for your supply chain.',
    quarterly: 5000, yearly: 16500
  },
  {
    num: '05', name: 'Formulation Science Services',
    desc: 'Expertly crafted, peer-reviewed formula development — a secondary offering, available with licensed pharmacist oversight.',
    quarterly: 9000, yearly: 30000
  },
  {
    num: '06', name: 'General Consultation',
    desc: 'Ask specific questions about your workflow, or negotiate a custom program for two or more years.',
    quarterly: 500, yearly: null, unit: '/session (4 hrs)'
  }
];

// ---------- DATA: Instruction / Courses ----------
const COURSES = [
  {
    idx: '01', name: 'Sterile Compounding Program', duration: '2 weeks · 8 sessions + 2 on-hands',
    topics: ['USP 797', 'Intro to QC', 'Pressure Control', 'Sterile Theory'],
    quarterly: 3500, yearly: 12500
  },
  {
    idx: '02', name: 'Formulation Science Program', duration: '2 weeks · 8 sessions',
    topics: ['Clinical Dosing', 'Chemical Compatibility', 'Solubility', 'Formulation Math'],
    quarterly: 4500, yearly: 15750
  },
  {
    idx: '03', name: 'Regulatory Compliance Program', duration: '2 weeks · 8 sessions',
    topics: ['Federal Regulation', 'State Regulation', 'Accreditation Boards', 'Inspections & Audits'],
    quarterly: 3000, yearly: 10500
  },
  {
    idx: '04', name: 'Quality Control Program', duration: '2 weeks · 6 sessions + 2 on-hands',
    topics: ['Visual Inspection', 'pH Testing', 'Bubble Point Testing', 'Potency Testing'],
    quarterly: 2500, yearly: 8750
  },
  {
    idx: '05', name: 'Quality Assurance Program', duration: '2 weeks · 7 sessions',
    topics: ['CQI', 'SOP Review', 'R&D', 'Understanding Change'],
    quarterly: 3000, yearly: 10500
  },
  {
    idx: '06', name: 'Manufacturing Best Practices', duration: '3 weeks · 10 sessions + 5 on-hands',
    topics: ['Sterility Assurance', 'cGMP', 'cGDP', 'Checks & Balances'],
    quarterly: 5000, yearly: 17500
  },
  {
    idx: '07', name: 'Supply Chain Management', duration: '1 week · 5 sessions',
    topics: ['Building a Supply Chain', 'Rotation', 'QA Collaboration', 'Product Grades'],
    quarterly: 1500, yearly: 5250
  }
];

// ---------- DATA: Credentials ----------
const CREDENTIALS = [
  { name: 'CPhT Certification', issuer: 'NHA · #K5K4J2D9', file: 'cpht-certification.pdf' },
  { name: 'Pharmacy Technician License', issuer: 'TSBP · #312140', file: 'pharmacy-technician-license.pdf' },
  { name: 'Board Certification, Regulatory Compliance', issuer: 'Board of Pharmacy Technician Specialists', file: 'board-certification-regulatory-compliance.pdf' },
  { name: 'Sterile Compounding – IV Certification', issuer: 'NPTA', file: 'sterile-compounding-iv-certification.pdf' },
  { name: 'Product Verification Certification', issuer: 'NPTA', file: 'product-verification-certification.pdf' },
  { name: 'Supply Chain Management Certification', issuer: 'NPTA', file: 'supply-chain-management-certification.pdf' },
  { name: 'Regulatory Compliance Certification', issuer: 'NPTA', file: 'regulatory-compliance-certification.pdf' },
  { name: 'Medication Therapy Management Certification', issuer: 'NPTA', file: 'mtm-certification.pdf' },
];

const fmt = n => n.toLocaleString('en-US');

// ---------- RENDER: Services (process-flow diagram) ----------
function renderServices() {
  const flow = document.getElementById('servicesFlow');
  const spine = flow.querySelector('.flow-spine');
  const items = SERVICES.map(s => {
    const isSession = !!s.unit;
    const qPrice = `$${fmt(s.quarterly)}`;
    const yPrice = s.yearly ? `$${fmt(s.yearly)}` : qPrice;
    return `
    <div class="flow-item reveal">
      <div class="flow-node">${s.num}</div>
      <div class="flow-body">
        <div class="flow-text"><h3>${s.name}</h3><p>${s.desc}</p></div>
        <div class="flow-price">
          <span class="amt" data-q="${qPrice}" data-y="${yPrice}">${qPrice}</span>
          <span class="per">${isSession ? s.unit : '/quarter'}</span>
        </div>
      </div>
    </div>`;
  }).join('');
  flow.innerHTML = '<div class="flow-spine"></div>' + items;
}

// ---------- RENDER: Courses ----------
function renderCourses() {
  const list = document.getElementById('courseList');
  list.innerHTML = COURSES.map(c => `
    <div class="course-item reveal">
      <span class="course-index">${c.idx}</span>
      <div class="course-name">
        <h4>${c.name}</h4>
        <span>${c.duration}</span>
      </div>
      <div class="course-topics">
        ${c.topics.map(t => `<span class="topic-chip">${t}</span>`).join('')}
      </div>
      <div class="course-price">
        <span class="amt" data-q="$${fmt(c.quarterly)}" data-y="$${fmt(c.yearly)}">$${fmt(c.quarterly)}</span>
        <span class="per" data-per-q="/quarter" data-per-y="/year">/quarter</span>
      </div>
    </div>`).join('');
}

// ---------- RENDER: Credentials ----------
function renderCredentials() {
  const grid = document.getElementById('certWall');
  grid.innerHTML = CREDENTIALS.map((c, i) => `
    <div class="cred-row reveal">
      <div class="cred-seal">
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="m5 10 3.5 3.5L15 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div>
        <div class="cred-id">CS&#8209;CRED&#8209;${String(i + 1).padStart(2, '0')}</div>
        <div class="cred-name">${c.name}</div>
      </div>
      <div class="cred-issuer">${c.issuer}</div>
      <a class="cred-link" href="assets/credentials/${c.file}" target="_blank" rel="noopener">
        View <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>`).join('');
}

// ---------- DATA + RENDER: Results bar chart ----------
const RESULTS = [
  { label: 'Peak production increase for a consulting client', value: 53, max: 100, display: '53%' },
  { label: 'Error reduction achieved for a consulting client', value: 80, max: 100, display: '80%+', gold: true },
  { label: 'Sterile compound accuracy across 4,000+ units', value: 99.5, max: 100, display: '99.5%' },
  { label: 'Compounding pharmacies designed and built from scratch', value: 2, max: 2, display: '2', gold: true },
  { label: 'Fastest pharmacy build, start to licensed operation', value: 25, max: 100, display: '4 wks' },
  { label: 'Cleanroom action-level infractions for clients, at steady state', value: 2, max: 100, display: '~0' },
];

function renderResultsChart() {
  const chart = document.getElementById('resultsChart');
  chart.innerHTML = RESULTS.map(r => `
    <div class="chart-row reveal">
      <span class="chart-label">${r.label}</span>
      <div class="chart-track"><div class="chart-fill${r.gold ? ' gold' : ''}" data-width="${(r.value / r.max) * 100}"></div></div>
      <span class="chart-value">${r.display}</span>
    </div>`).join('');
}

renderServices();
renderCourses();
renderCredentials();
renderResultsChart();

// ---------- PRICING TOGGLE ----------
const periodToggle = document.getElementById('periodToggle');
let isYearly = false;
periodToggle.addEventListener('click', () => {
  isYearly = !isYearly;
  periodToggle.setAttribute('aria-checked', isYearly);
  document.querySelectorAll('[data-period-label]').forEach(el => {
    el.style.color = (el.dataset.periodLabel === (isYearly ? 'yearly' : 'quarterly')) ? 'var(--text)' : '';
  });
  document.querySelectorAll('.flow-price .amt').forEach(el => {
    el.textContent = isYearly ? el.dataset.y : el.dataset.q;
  });
  document.querySelectorAll('.flow-price .per').forEach(el => {
    if (el.textContent.includes('quarter') || el.textContent.includes('year')) {
      el.textContent = isYearly ? '/year' : '/quarter';
    }
  });
  document.querySelectorAll('.course-price .amt').forEach(el => {
    el.textContent = isYearly ? el.dataset.y : el.dataset.q;
  });
  document.querySelectorAll('.course-price .per').forEach(el => {
    el.textContent = isYearly ? el.dataset.perY : el.dataset.perQ;
  });
  document.querySelectorAll('.bundle-price').forEach(el => {
    el.style.display = (el.dataset.period === (isYearly ? 'yearly' : 'quarterly')) ? '' : 'none';
  });
});

// ---------- NAV: scroll state + active link ----------
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 40);

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progressFill').style.width = `${(scrollTop / docHeight) * 100}%`;

  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (scrollTop >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinksEl.style.display = navLinksEl.style.display === 'flex' ? 'none' : 'flex';
});

// ---------- SCROLL REVEAL ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// chart bar fill animation
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.chart-fill');
      if (fill) fill.style.width = fill.dataset.width + '%';
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.chart-row').forEach(el => chartObserver.observe(el));

// stagger hero title lines
document.querySelectorAll('.hero-title .reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
});

// ---------- ANIMATED COUNTERS ----------
const countEls = document.querySelectorAll('.stat-num[data-count]');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = fmt(val) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
countEls.forEach(el => countObserver.observe(el));

// ---------- CONTACT FORM ----------
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const name = document.getElementById('fName').value;
  const email = document.getElementById('fEmail').value;
  const org = document.getElementById('fOrg').value;
  const msg = document.getElementById('fMsg').value;
  const subject = encodeURIComponent(`Cardinal Solutions inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${org}\n\n${msg}`);
  window.location.href = `mailto:cchcxvii@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = 'Opening your email client…';
});
