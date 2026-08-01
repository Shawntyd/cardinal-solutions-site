// =====================================================
// CARDINAL SOLUTIONS — SITE SCRIPT (shared across pages)
// =====================================================
const fmt = n => n.toLocaleString('en-US');
const $ = id => document.getElementById(id);

// ---------- DATA: Consulting Services (grouped by client stage) ----------
const SERVICES = [
  { num: '01', stage: 1, name: 'Formulation Science Services',
    desc: 'Expertly crafted, peer-reviewed formula development and Master Formulation Records — available with licensed pharmacist oversight.',
    quarterly: 9000, yearly: 30000 },
  { num: '02', stage: 2, name: 'Manufacturing Best Practices',
    desc: 'cGMP review and assessment, material and equipment analysis, and automation & expansion planning as you scale.',
    quarterly: 13500, yearly: 42000 },
  { num: '03', stage: 2, name: 'Supply Chain Management',
    desc: 'Program review, document control audit, and automation & system development for your supply chain.',
    quarterly: 5000, yearly: 16500 },
  { num: '04', stage: 3, name: 'Regulatory Compliance Program',
    desc: 'Bimonthly audits and monthly inspections covering 503A, cGMP, USP, and interstate requirements.',
    quarterly: 8000, yearly: 28000 },
  { num: '05', stage: 3, name: 'Quality Assurance Program',
    desc: 'Comprehensive QA program review, R&D assistance, and continuous quality improvement development.',
    quarterly: 10000, yearly: 33000 },
  { num: '06', stage: 0, name: 'General Consultation',
    desc: 'Ask specific questions about your workflow, or negotiate a custom program for two or more years.',
    quarterly: 500, yearly: null, unit: '/session (4 hrs)' }
];

const STAGES = [
  { n: 1, title: 'Build', sub: 'Getting Licensed & Operational', desc: 'For pharmacies standing up formulas and processes for the first time.' },
  { n: 2, title: 'Grow', sub: 'Scaling Your Operation', desc: 'For pharmacies expanding capacity, supply chains, and manufacturing practices.' },
  { n: 3, title: 'Sustain', sub: 'Staying Compliant', desc: 'For pharmacies that need ongoing audits, inspections, and quality assurance.' }
];

// ---------- DATA: Instruction / Courses ----------
const COURSES = [
  { idx: '01', name: 'Sterile Compounding Program', duration: '2 weeks \u00b7 8 sessions + 2 on-hands',
    audience: 'For technicians and pharmacists performing hands-on sterile compounding.',
    topics: ['USP 797', 'Intro to QC', 'Pressure Control', 'Sterile Theory'], quarterly: 3500, yearly: 12500 },
  { idx: '02', name: 'Formulation Science Program', duration: '2 weeks \u00b7 8 sessions',
    audience: 'For staff developing or reviewing custom formulas and MFRs.',
    topics: ['Clinical Dosing', 'Chemical Compatibility', 'Solubility', 'Formulation Math'], quarterly: 4500, yearly: 15750 },
  { idx: '03', name: 'Regulatory Compliance Program', duration: '2 weeks \u00b7 8 sessions',
    audience: 'For leadership and staff who need working fluency in the regulations that govern the pharmacy.',
    topics: ['Federal Regulation', 'State Regulation', 'Accreditation Boards', 'Inspections & Audits'], quarterly: 3000, yearly: 10500 },
  { idx: '04', name: 'Quality Control Program', duration: '2 weeks \u00b7 6 sessions + 2 on-hands',
    audience: 'For staff responsible for testing and releasing finished product.',
    topics: ['Visual Inspection', 'pH Testing', 'Bubble Point Testing', 'Potency Testing'], quarterly: 2500, yearly: 8750 },
  { idx: '05', name: 'Quality Assurance Program', duration: '2 weeks \u00b7 7 sessions',
    audience: 'For staff building or running the pharmacy\u2019s quality system day to day.',
    topics: ['CQI', 'SOP Review', 'R&D', 'Understanding Change'], quarterly: 3000, yearly: 10500 },
  { idx: '06', name: 'Manufacturing Best Practices', duration: '3 weeks \u00b7 10 sessions + 5 on-hands',
    audience: 'For staff and leadership preparing for expanded manufacturing capacity.',
    topics: ['Sterility Assurance', 'cGMP', 'cGDP', 'Checks & Balances'], quarterly: 5000, yearly: 17500 },
  { idx: '07', name: 'Supply Chain Management', duration: '1 week \u00b7 5 sessions',
    audience: 'For staff managing ordering, inventory, and vendor relationships.',
    topics: ['Building a Supply Chain', 'Rotation', 'QA Collaboration', 'Product Grades'], quarterly: 1500, yearly: 5250 }
];

// ---------- DATA: Credentials (with real issue/expiry dates from the certificates) ----------
const CREDENTIALS = [
  { name: 'CPhT Certification', issuer: 'NHA \u00b7 #K5K4J2D9', dates: 'Eff. 04/28/2021 \u00b7 Exp. 04/28/2027', file: 'cpht-certification.pdf' },
  { name: 'Pharmacy Technician License', issuer: 'TSBP \u00b7 #312140', dates: 'Exp. 05/31/2027', file: 'pharmacy-technician-license.pdf' },
  { name: 'Board Certification, Regulatory Compliance', issuer: 'Board of Pharmacy Technician Specialists', dates: 'Issued 12/25/2025', file: 'board-certification-regulatory-compliance.pdf' },
  { name: 'Sterile Compounding \u2013 IV Certification', issuer: 'NPTA', dates: 'Issued 11/18/2024', file: 'sterile-compounding-iv-certification.pdf' },
  { name: 'Product Verification Certification', issuer: 'NPTA', dates: 'Issued 12/04/2025', file: 'product-verification-certification.pdf' },
  { name: 'Supply Chain Management Certification', issuer: 'NPTA', dates: 'Issued 12/03/2025', file: 'supply-chain-management-certification.pdf' },
  { name: 'Regulatory Compliance Certification', issuer: 'NPTA', dates: 'Issued 11/05/2025', file: 'regulatory-compliance-certification.pdf' },
  { name: 'Medication Therapy Management Certification', issuer: 'NPTA', dates: 'Issued 12/10/2025', file: 'mtm-certification.pdf' }
];

// ---------- DATA: Career timeline ----------
const EXPERIENCE = [
  { idx: '01', role: 'Founder, CEO & Chief Consultant', org: 'Cardinal Group', place: 'The Woodlands, TX', dates: 'Mar 2026 \u2014 Present',
    bullets: [
      'Founded the Cardinal Group holding company, housing Cardinal Solutions (pharmacy consulting) and Cardinal Promotions (small business marketing).',
      'Cardinal Solutions clients have achieved production increases up to 53%, error reductions exceeding 80%, and near-zero cleanroom action-level infractions.',
      'Credentialed across Sterile Compounding, Formulation Science, Quality Assurance, Regulatory Compliance, cGMP Manufacturing, Supply Chain Management, and Quality Control.'
    ] },
  { idx: '02', role: 'Pharmacy Operations Manager', org: 'Harmony Infusion Pharmacy (DBA Centric Compounding)', place: 'Houston, TX', dates: 'Feb 2026 \u2014 Mar 2026',
    bullets: [
      'Took the pharmacy from concept to fully operational in 4 weeks.',
      'Designed a primary-to-tertiary supply chain system covering ordering, inventory tracking, and profit margin analysis.',
      'Designed SOPs that passed TSBP inspection, plus QC and environmental monitoring forms for ongoing tracking.',
      'Built workflows from scratch, standing up a fully functional sterile department through its first completed batch.'
    ] },
  { idx: '03', role: 'Pharmacy Operations Manager', org: 'B&F Pharmacy (DBA Centric Rx)', place: 'Tomball, TX', dates: 'Oct 2025 \u2014 Feb 2026',
    bullets: [
      'Lead architect converting an office space into a fully licensed sterile and non-sterile compounding pharmacy \u2014 passed cleanroom certification and TSBP licensing as an AS pharmacy in 3 months plus 1 month for licensing.',
      'Built over ten custom formulas with compliant MFRs accounting for osmolarity, solubility, clinical relevance, pH, and storage conditions.',
      'Designed SOPs, QC forms, and environmental monitoring documentation that passed TSBP inspection.'
    ] },
  { idx: '04', role: 'Compliance and Regulations Technician', org: 'Southend Pharmacy', place: 'Houston, TX', dates: 'May 2025 \u2014 Aug 2025',
    bullets: [
      'Built the compliance and regulations department from the ground up \u2014 quality control, regulatory enforcement, and operational development.',
      'Created audit tools for USP Chapters 795, 797, and 800, and TSBP regulations.',
      'Restructured sterile department procedures and developed new company SOPs, policies, and procedures.',
      'Trained sterile staff and developed continuing education programs for technicians and pharmacists.'
    ] },
  { idx: '05', role: 'Lead Pharmacy Technician', org: 'HCA', place: 'Houston, TX', dates: 'Mar 2025 \u2014 Aug 2025',
    bullets: [
      'Sterile compounding experience in a hospital setting, including IV bag preparation and vertical airflow hood technique.',
      'Drafted provisional SOPs for drug diversion accountability and discrepancy reconciliation.'
    ] },
  { idx: '06', role: 'IV Pharmacy Technician', org: 'Remedi Senior Care', place: 'Houston, TX', dates: 'Jan 2025 \u2014 May 2025',
    bullets: [
      'Sterile compounding of 60\u2013100 units daily \u2014 over 4,000 units total at 99.5% accuracy, reaching 30\u201340 units/hour.',
      'Extensive experience with horizontal airflow hoods and elastomeric devices.',
      'Handled billing for sterile compounding and TPN admixture services.'
    ] },
  { idx: '07', role: 'Certified Pharmacy Technician', org: 'H-E-B Pharmacy', place: 'Conroe, TX', dates: 'Oct 2022 \u2014 Present',
    bullets: [
      'Assisted in leading a team of 15 pharmacy technicians and technician assistants.',
      'Developed the pharmacy\u2019s current technician scheduling format and led the Outcomes/Prescribe Wellness program.',
      'Trained pharmacists and technicians in third-party adjudication.'
    ] },
  { idx: '08', role: 'Certified Pharmacy Technician', org: 'Kroger Pharmacy', place: 'The Woodlands, TX', dates: 'Jul 2022 \u2014 Oct 2022',
    bullets: ['Pharmacy buying, inventory rotation, and third-party adjudication.', 'Trained incoming pharmacy technician trainees.'] },
  { idx: '09', role: 'Electronics Technician Nuclear', org: 'United States Navy', place: '', dates: 'Jan 2022 \u2014 Jul 2022',
    bullets: ['Medically discharged under honorable conditions.'] },
  { idx: '10', role: 'Certified Pharmacy Technician', org: 'Walmart Pharmacy Central Fulfillment', place: 'Spring, TX', dates: 'Feb 2021 \u2014 Feb 2022',
    bullets: ['Pharmacy buying and inventory management, data entry, and prior authorization management.'] },
  { idx: '11', role: 'Certified Pharmacy Technician', org: 'Walgreens Pharmacy', place: 'Spring, TX', dates: 'Aug 2020 \u2014 Feb 2021',
    bullets: ['Standard pharmacy technician duties \u2014 buying, data entry, and product inspection.'] }
];

// ---------- DATA: Skills (years of hands-on experience, as stated on resume) ----------
const SKILLS = [
  { label: 'Pharmacology (formal + freelance study)', years: 7 },
  { label: 'Quality Assurance / Quality Control', years: 6 },
  { label: 'Pharmacy Buying & Inventory Management', years: 6 },
  { label: 'Order Entry (multiple pharmacy OS)', years: 6 },
  { label: 'Third-Party Adjudication', years: 6 },
  { label: 'Pharmacy Training (PhTT / CPhT / RPh)', years: 6 },
  { label: 'Fulfillment', years: 6 },
  { label: 'Supply Chain Management', years: 5 },
  { label: 'Transcription', years: 5 },
  { label: 'Transfers', years: 5 },
  { label: 'Logistics & Operations', years: 4 },
  { label: 'cGDP \u2014 Log Creation', years: 4 },
  { label: 'cGDP \u2014 SOP Creation', years: 3 }
];

// ---------- DATA: Results bar chart ----------
const RESULTS = [
  { label: 'Peak production increase for a consulting client', value: 53, max: 100, display: '53%' },
  { label: 'Error reduction achieved for a consulting client', value: 80, max: 100, display: '80%+', gold: true },
  { label: 'Sterile compound accuracy across 4,000+ units', value: 99.5, max: 100, display: '99.5%' },
  { label: 'Compounding pharmacies designed and built from scratch', value: 2, max: 2, display: '2', gold: true },
  { label: 'Fastest pharmacy build, start to licensed operation', value: 25, max: 100, display: '4 wks' },
  { label: 'Cleanroom action-level infractions for clients, at steady state', value: 2, max: 100, display: '~0' }
];

// =====================================================
// RENDERERS (each guarded — only run if the page has the target element)
// =====================================================
function flowItemHTML(s) {
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
}

function renderServicesFlat() {
  const flow = $('servicesFlow');
  if (!flow) return;
  flow.innerHTML = '<div class="flow-spine"></div>' + SERVICES.map(flowItemHTML).join('');
}

function renderServicesByStage() {
  STAGES.forEach(stage => {
    const container = $('stageFlow' + stage.n);
    if (!container) return;
    const items = SERVICES.filter(s => s.stage === stage.n);
    container.innerHTML = '<div class="flow-spine"></div>' + items.map(flowItemHTML).join('');
  });
  const flex = $('flexFlow');
  if (flex) {
    const items = SERVICES.filter(s => s.stage === 0);
    flex.innerHTML = '<div class="flow-spine"></div>' + items.map(flowItemHTML).join('');
  }
}

function renderCourses() {
  const list = $('courseList');
  if (!list) return;
  const deep = list.dataset.deep === 'true';
  list.innerHTML = COURSES.map(c => `
    <div class="course-item reveal">
      <span class="course-index">${c.idx}</span>
      <div class="course-name">
        <h4>${c.name}</h4>
        <span>${c.duration}</span>
        ${deep ? `<p style="font-family:var(--serif);font-size:13.5px;color:var(--text-dim);margin-top:8px;max-width:360px;">${c.audience}</p>` : ''}
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

function renderCredentials() {
  const grid = $('certWall');
  if (!grid) return;
  const deep = grid.dataset.deep === 'true';
  grid.innerHTML = CREDENTIALS.map((c, i) => `
    <div class="cred-row reveal">
      <div class="cred-seal">
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="m5 10 3.5 3.5L15 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div>
        <div class="cred-id">CS&#8209;CRED&#8209;${String(i + 1).padStart(2, '0')}</div>
        <div class="cred-name">${c.name}</div>
        ${deep ? `<div class="cred-dates">${c.dates}</div>` : ''}
      </div>
      <div class="cred-issuer">${c.issuer}</div>
      <a class="cred-link" href="assets/credentials/${c.file}" target="_blank" rel="noopener">
        View <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>`).join('');
}

function renderResultsChart() {
  const chart = $('resultsChart');
  if (!chart) return;
  chart.innerHTML = RESULTS.map(r => `
    <div class="chart-row reveal">
      <span class="chart-label">${r.label}</span>
      <div class="chart-track"><div class="chart-fill${r.gold ? ' gold' : ''}" data-width="${(r.value / r.max) * 100}"></div></div>
      <span class="chart-value">${r.display}</span>
    </div>`).join('');
}

function renderExperience() {
  const el = $('experienceTimeline');
  if (!el) return;
  el.innerHTML = '<div class="flow-spine"></div>' + EXPERIENCE.map(e => `
    <div class="flow-item reveal">
      <div class="flow-node">${e.idx}</div>
      <div class="flow-body" style="grid-template-columns:1fr;">
        <div class="flow-text">
          <h3>${e.role}</h3>
          <p style="font-family:var(--mono);font-size:11.5px;color:var(--text-faint);text-transform:uppercase;letter-spacing:.04em;margin-bottom:10px;">
            ${e.org}${e.place ? ' \u00b7 ' + e.place : ''} \u00b7 ${e.dates}
          </p>
          <ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;">
            ${e.bullets.map(b => `<li style="font-family:var(--serif);font-size:14.5px;color:var(--text-dim);">${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`).join('');
}

function renderSkills() {
  const el = $('skillsList');
  if (!el) return;
  const max = Math.max(...SKILLS.map(s => s.years));
  el.innerHTML = SKILLS.map(s => `
    <div class="skill-row reveal">
      <span class="skill-label">${s.label}</span>
      <div class="skill-track"><div class="skill-fill" data-width="${(s.years / max) * 100}"></div></div>
      <span class="skill-years">${s.years} yrs</span>
    </div>`).join('');
}

renderServicesFlat();
renderServicesByStage();
renderCourses();
renderCredentials();
renderResultsChart();
renderExperience();
renderSkills();

// ---------- PRICING TOGGLE (guarded) ----------
const periodToggle = $('periodToggle');
let isYearly = false;
if (periodToggle) {
  periodToggle.addEventListener('click', () => {
    isYearly = !isYearly;
    periodToggle.setAttribute('aria-checked', isYearly);
    document.querySelectorAll('[data-period-label]').forEach(el => {
      el.style.color = (el.dataset.periodLabel === (isYearly ? 'yearly' : 'quarterly')) ? 'var(--text)' : '';
    });
    document.querySelectorAll('.flow-price .amt').forEach(el => { el.textContent = isYearly ? el.dataset.y : el.dataset.q; });
    document.querySelectorAll('.flow-price .per').forEach(el => {
      if (el.textContent.includes('quarter') || el.textContent.includes('year')) el.textContent = isYearly ? '/year' : '/quarter';
    });
    document.querySelectorAll('.course-price .amt').forEach(el => { el.textContent = isYearly ? el.dataset.y : el.dataset.q; });
    document.querySelectorAll('.course-price .per').forEach(el => { el.textContent = isYearly ? el.dataset.perY : el.dataset.perQ; });
    document.querySelectorAll('.bundle-price').forEach(el => {
      el.style.display = (el.dataset.period === (isYearly ? 'yearly' : 'quarterly')) ? '' : 'none';
    });
  });
}

// ---------- NAV: scroll state (guarded) ----------
const nav = $('nav');
function onScroll() {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  const fill = $('progressFill');
  if (fill) {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navToggle = $('navToggle');
const navLinksEl = $('navLinks');
if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => {
    navLinksEl.style.display = navLinksEl.style.display === 'flex' ? 'none' : 'flex';
  });
}

// ---------- SCROLL REVEAL ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// chart / skill bar fill animation
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.chart-fill, .skill-fill');
      if (fill) fill.style.width = fill.dataset.width + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.chart-row, .skill-row').forEach(el => barObserver.observe(el));

// stagger hero title lines (guarded)
document.querySelectorAll('.hero-title .reveal').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
});

// ---------- ANIMATED COUNTERS ----------
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
document.querySelectorAll('.stat-num[data-count]').forEach(el => countObserver.observe(el));

// ---------- CONTACT FORM (guarded) ----------
const contactForm = $('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = $('formNote');
    const name = $('fName').value;
    const email = $('fEmail').value;
    const org = $('fOrg').value;
    const msg = $('fMsg').value;
    const subject = encodeURIComponent(`Cardinal Solutions inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${org}\n\n${msg}`);
    window.location.href = `mailto:cchcxvii@gmail.com?subject=${subject}&body=${body}`;
    if (note) note.textContent = 'Opening your email client\u2026';
  });
}
