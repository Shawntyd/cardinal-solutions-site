#!/usr/bin/env python3
"""Generates the multi-page Cardinal Solutions static site."""

NAV_ITEMS = [
    ("index.html", "Home"),
    ("experience.html", "Experience"),
    ("consulting.html", "Consulting"),
    ("training.html", "Training"),
    ("credentials.html", "Credentials"),
    ("contact.html", "Contact"),
]

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — Cardinal Solutions</title>
<meta name="description" content="{desc}">
<link rel="icon" href="assets/brand/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div style="position:fixed;top:0;left:0;width:100%;height:2px;z-index:1000;"><div id="progressFill" style="height:100%;width:0%;background:linear-gradient(90deg,var(--redline),var(--gold));transition:width .1s linear;"></div></div>
"""

def nav_html(active_file):
    links = "\n    ".join(
        f'<a href="{href}" data-nav{" class=\"active\"" if href == active_file else ""}>{label}</a>'
        for href, label in NAV_ITEMS
    )
    return f"""<header class="nav" id="nav">
  <a href="index.html" class="nav-brand">
    <img src="assets/brand/logo.png" alt="Cardinal Solutions" class="nav-logo">
    <span>Cardinal Solutions</span>
  </a>
  <nav class="nav-links" id="navLinks">
    {links}
  </nav>
  <a href="contact.html" class="nav-cta">Book Consultation</a>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
</header>
"""

FOOTER = """<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand"><img src="assets/brand/logo.png" alt="Cardinal Solutions"><span>Cardinal Solutions</span></div>
    <p class="footer-note">A Cardinal Group company \u00b7 The Woodlands, TX \u00b7 \u00a9 2026 Cardinal Solutions. Instruction and consulting services are not a substitute for professional judgement or licensed pharmacist oversight.</p>
  </div>
</footer>
<script src="script.js"></script>
</body>
</html>
"""

def page_hero(dwg, eyebrow, title_html, lede):
    return f"""<section class="page-hero">
  <div class="page-hero-inner">
    <p class="eyebrow reveal">SOP No. {dwg} \u00b7 {eyebrow}</p>
    <h1 class="section-title reveal">{title_html}</h1>
    <p class="section-lede reveal">{lede}</p>
  </div>
</section>
"""

def write(path, content):
    with open(path, "w") as f:
        f.write(content)
    print(f"wrote {path} ({len(content)} bytes)")

# =====================================================
# HOME
# =====================================================
def build_home():
    head = HEAD.format(
        title="Pharmacy Regulatory, Quality & Operations Consulting",
        desc="Cardinal Solutions provides regulatory compliance, quality assurance, and operations consulting for compounding pharmacies, led by Board Certified Pharmacy Technician Taiyon Davis."
    )
    body = f"""{nav_html("index.html")}
<section class="hero" id="top">
  <div class="hero-inner">
    <img src="assets/brand/logo.png" alt="Cardinal Solutions" class="hero-logo reveal">
    <p class="hero-dwgnum reveal">Cardinal Solutions <b>\u00b7</b> SOP No. CS&#8209;01 <b>\u00b7</b> Rev 2026.1</p>
    <h1 class="hero-title">
      <span class="line reveal">Precision, designed</span>
      <span class="line reveal">into every</span>
      <span class="line reveal hero-accent">pharmacy operation.</span>
    </h1>
    <p class="hero-sub reveal">
      Cardinal Solutions is a pharmacy regulatory, quality assurance, and operations
      consultancy led by Board Certified Pharmacy Technician Taiyon Davis \u2014 for
      compounding pharmacies and pharmaceutical organizations that can't afford to
      leave compliance to chance.
    </p>
    <div class="hero-actions reveal">
      <a href="contact.html" class="btn btn-primary"><span>Book a Consultation</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="consulting.html" class="btn btn-ghost">View Services</a>
    </div>
    <div class="hero-stats reveal">
      <div class="hero-stat"><span class="stat-num" data-count="2">0</span><span class="stat-label">Pharmacies built<br>from scratch</span></div>
      <div class="hero-stat"><span class="stat-num" data-count="53" data-suffix="%">0</span><span class="stat-label">Peak production<br>increase for clients</span></div>
      <div class="hero-stat"><span class="stat-num" data-count="80" data-suffix="%+">0</span><span class="stat-label">Error reduction<br>achieved for clients</span></div>
    </div>
  </div>
</section>

<section class="section" id="explore">
  <div class="section-inner">
    <p class="eyebrow reveal">SOP No. CS&#8209;00 \u00b7 Explore Cardinal Solutions</p>
    <h2 class="section-title reveal">Everything about how<br><em>Cardinal Solutions works.</em></h2>
    <p class="section-lede reveal">A closer look at experience, consulting programs, training, and credentials.</p>
    <div class="teaser-grid">
      <div class="teaser-card reveal">
        <span class="teaser-num">CS&#8209;02</span>
        <h3>Experience</h3>
        <p>Taiyon's full career timeline \u2014 11 roles, real dates, and the skills built along the way.</p>
        <a href="experience.html" class="link-arrow">View experience <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
      <div class="teaser-card reveal">
        <span class="teaser-num">CS&#8209;03</span>
        <h3>Consulting</h3>
        <p>Programs organized by stage \u2014 build, grow, or stay compliant \u2014 with full pricing.</p>
        <a href="consulting.html" class="link-arrow">View consulting <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
      <div class="teaser-card reveal">
        <span class="teaser-num">CS&#8209;04</span>
        <h3>Training</h3>
        <p>Seven instruction programs with full curriculum breakdowns and who each is for.</p>
        <a href="training.html" class="link-arrow">View training <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
      <div class="teaser-card reveal">
        <span class="teaser-num">CS&#8209;05</span>
        <h3>Credentials</h3>
        <p>Every license and certification, with issue/expiry dates and the original document.</p>
        <a href="credentials.html" class="link-arrow">View credentials <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </div>
  </div>
</section>

<section class="quote-break">
  <img class="quote-break-watermark" src="assets/brand/logo.png" alt="">
  <blockquote class="reveal">"A comfortable individual does not move forward quickly."</blockquote>
  <cite class="reveal">\u2014 Taiyon Davis, Founder &amp; Chief Consultant</cite>
</section>

<section class="section results" id="results">
  <div class="section-inner">
    <p class="eyebrow reveal">SOP No. CS&#8209;06 \u00b7 Track Record</p>
    <h2 class="section-title reveal">The numbers behind<br><em>the credentials.</em></h2>
    <div class="chart" id="resultsChart"></div>
  </div>
</section>
"""
    write("index.html", head + body + FOOTER)

# =====================================================
# EXPERIENCE
# =====================================================
def build_experience():
    head = HEAD.format(
        title="Experience",
        desc="Taiyon Davis's full career history in pharmacy operations, compliance, and sterile compounding."
    )
    body = f"""{nav_html("experience.html")}
{page_hero("CS-02", "Experience", "Eleven roles.<br><em>One throughline: building systems from scratch.</em>",
    "From certified pharmacy technician to founder \u2014 eleven roles building toward Cardinal Solutions.")}
<section class="section" style="padding-top:90px;">
  <div class="section-inner">
    <div class="flow" id="experienceTimeline"></div>
  </div>
</section>

<section class="section" style="border-top:1px solid var(--line);">
  <div class="section-inner">
    <p class="eyebrow reveal">SOP No. CS&#8209;02b \u00b7 Skills</p>
    <h2 class="section-title reveal">Years of hands-on<br><em>experience, by skill.</em></h2>
    <p class="section-lede reveal">Hands-on time across the skills that matter most in daily pharmacy operations.</p>
    <div class="skills-list" id="skillsList"></div>
  </div>
</section>
"""
    write("experience.html", head + body + FOOTER)

# =====================================================
# CONSULTING
# =====================================================
def build_consulting():
    head = HEAD.format(
        title="Consulting",
        desc="Regulatory compliance, quality assurance, and operations consulting programs for pharmacies at every stage."
    )
    stage_blocks = ""
    for i, (num, title, sub, desc) in enumerate([
        ("01", "Build", "Getting Licensed &amp; Operational", "For pharmacies standing up formulas and processes for the first time."),
        ("02", "Grow", "Scaling Your Operation", "For pharmacies expanding capacity, supply chains, and manufacturing practices."),
        ("03", "Sustain", "Staying Compliant", "For pharmacies that need ongoing audits, inspections, and quality assurance."),
    ], start=1):
        stage_blocks += f"""
    <div class="stage-group">
      <div class="stage-head reveal">
        <span class="stage-num">{num}</span>
        <div><h3>{title} \u2014 {sub}</h3><p>{desc}</p></div>
      </div>
      <div class="stage-flow flow" id="stageFlow{i}"></div>
    </div>"""
    body = f"""{nav_html("consulting.html")}
{page_hero("CS-03", "Consulting Programs", "Built to reduce risk and<br><em>raise the ceiling on performance.</em>",
    "Organized around where your pharmacy is today \u2014 not just a flat list of services. Every program is delivered by credentialed, trained personnel and can be engaged individually or bundled.")}
<section class="section" style="padding-top:90px;">
  <div class="section-inner">
    <div class="pricing-toggle reveal">
      <span class="toggle-label" data-period-label="quarterly">Quarterly</span>
      <button class="toggle-switch" id="periodToggle" role="switch" aria-checked="false" aria-label="Toggle between quarterly and yearly pricing"><span class="toggle-knob"></span></button>
      <span class="toggle-label" data-period-label="yearly">Yearly <em>\u2014 best value</em></span>
    </div>
    {stage_blocks}
    <div class="stage-group">
      <div class="stage-head reveal">
        <span class="stage-num">\u2014</span>
        <div><h3>Flexible \u2014 General Consultation</h3><p>Not sure where you fall? Ask specific questions about your workflow, billed by the session.</p></div>
      </div>
      <div class="stage-flow flow" id="flexFlow"></div>
    </div>

    <div class="bundle-card reveal">
      <span class="corner-tl"></span><span class="corner-tr"></span><span class="corner-bl"></span><span class="corner-br"></span>
      <div class="bundle-head"><p class="eyebrow" style="margin-bottom:6px">2026 Promotion</p><h3>503A Master Bundle \u2014 All Five Consulting Programs</h3></div>
      <div class="bundle-prices">
        <div class="bundle-price" data-period="quarterly"><span class="bundle-price-num">$36,400</span><span class="bundle-price-unit">/ quarter</span><span class="bundle-price-was">$45,500/quarter<span class="strike"></span></span></div>
        <div class="bundle-price" data-period="yearly" style="display:none"><span class="bundle-price-num">$122,590</span><span class="bundle-price-unit">/ year</span><span class="bundle-price-was">$149,500/year<span class="strike"></span></span></div>
        <p class="bundle-price-note">Cancellation fees waived on yearly terms</p>
      </div>
      <a href="contact.html" class="btn btn-primary">Inquire</a>
    </div>
  </div>
</section>
"""
    write("consulting.html", head + body + FOOTER)

# =====================================================
# TRAINING
# =====================================================
def build_training():
    head = HEAD.format(
        title="Training",
        desc="Seven hands-on instruction programs for pharmacy staff, from sterile compounding to supply chain management."
    )
    body = f"""{nav_html("training.html")}
{page_hero("CS-04", "Instruction Services", "Hands-on training for<br><em>staff at every level.</em>",
    "Seven instruction programs, each combining structured curriculum with on-hands training. Programs are not limited to practicing technicians \u2014 leadership is welcome, and encouraged, to learn the components they'll hold their staff accountable to.")}
<section class="section" style="padding-top:90px;">
  <div class="section-inner">
    <div class="pricing-toggle reveal">
      <span class="toggle-label" data-period-label="quarterly">Quarterly</span>
      <button class="toggle-switch" id="periodToggle" role="switch" aria-checked="false" aria-label="Toggle between quarterly and yearly pricing"><span class="toggle-knob"></span></button>
      <span class="toggle-label" data-period-label="yearly">Yearly <em>\u2014 best value</em></span>
    </div>
    <div class="course-list" id="courseList" data-deep="true"></div>
    <div class="bundle-card reveal">
      <span class="corner-tl"></span><span class="corner-tr"></span><span class="corner-bl"></span><span class="corner-br"></span>
      <div class="bundle-head"><p class="eyebrow" style="margin-bottom:6px">2026 Promotion</p><h3>503A Instruction Master Bundle \u2014 All Seven Programs</h3></div>
      <div class="bundle-prices">
        <div class="bundle-price" data-period="quarterly"><span class="bundle-price-num">$16,100</span><span class="bundle-price-unit">/ quarter</span><span class="bundle-price-was">$23,000/quarter<span class="strike"></span></span></div>
        <div class="bundle-price" data-period="yearly" style="display:none"><span class="bundle-price-num">$60,000</span><span class="bundle-price-unit">/ year</span><span class="bundle-price-was">$80,500/year<span class="strike"></span></span></div>
        <p class="bundle-price-note">Waives all "per additional person" costs</p>
      </div>
      <a href="contact.html" class="btn btn-primary">Inquire</a>
    </div>
  </div>
</section>
"""
    write("training.html", head + body + FOOTER)

# =====================================================
# CREDENTIALS
# =====================================================
def build_credentials():
    head = HEAD.format(
        title="Credentials",
        desc="Taiyon Davis's full licensure and certification record, with source documents available to view."
    )
    body = f"""{nav_html("credentials.html")}
{page_hero("CS-05", "Verified Credentials", "Every claim, backed<br><em>by documentation.</em>",
    "Licensure and certification documents are available to view directly \u2014 including issue and expiration dates \u2014 because in this industry, trust is earned with paperwork, not promises.")}
<section class="section" style="padding-top:90px;">
  <div class="section-inner">
    <div class="cred-ledger" id="certWall" data-deep="true"></div>
    <p class="reveal" style="font-family:var(--mono);font-size:12px;color:var(--text-faint);margin-top:24px;">
      Texas pharmacy technician license verification is always available directly from the
      <a href="https://www.pharmacy.texas.gov/" target="_blank" rel="noopener" style="color:var(--blue);">Texas State Board of Pharmacy</a>.
    </p>
  </div>
</section>
"""
    write("credentials.html", head + body + FOOTER)

# =====================================================
# CONTACT
# =====================================================
def build_contact():
    head = HEAD.format(
        title="Contact",
        desc="Get in touch with Cardinal Solutions to discuss a regulatory compliance, quality assurance, or operations consulting engagement."
    )
    body = f"""{nav_html("contact.html")}
{page_hero("CS-07", "Get in Touch", "Let's talk about<br><em>your operation.</em>",
    "Whether you need a single audit or a full regulatory program, Cardinal Solutions will scope an engagement around where your pharmacy is today.")}
<section class="section" style="padding-top:90px;">
  <div class="section-inner contact-grid">
    <div class="contact-copy">
      <div class="contact-details reveal">
        <a href="tel:+18327976504" class="contact-line">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 3h3l1.5 4L6.5 8.5a11 11 0 0 0 5 5L13 11.5l4 1.5v3c0 1-1 1.5-2 1.5C9.5 17.5 2.5 10.5 2.5 5c0-1 .5-2 1.5-2Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          (832) 797-6504
        </a>
        <div class="contact-line">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="8" r="2.2" stroke="currentColor" stroke-width="1.4"/></svg>
          The Woodlands, TX
        </div>
      </div>
    </div>
    <form class="contact-form reveal" id="contactForm">
      <div class="form-row"><label for="fName">Name</label><input type="text" id="fName" name="name" required></div>
      <div class="form-row"><label for="fEmail">Email</label><input type="email" id="fEmail" name="email" required></div>
      <div class="form-row"><label for="fOrg">Pharmacy / Organization</label><input type="text" id="fOrg" name="org"></div>
      <div class="form-row"><label for="fMsg">What do you need help with?</label><textarea id="fMsg" name="message" rows="4" required></textarea></div>
      <button type="submit" class="btn btn-primary btn-block"><span>Send Message</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <p class="form-note" id="formNote"></p>
    </form>
  </div>
</section>
"""
    write("contact.html", head + body + FOOTER)

if __name__ == "__main__":
    build_home()
    build_experience()
    build_consulting()
    build_training()
    build_credentials()
    build_contact()

