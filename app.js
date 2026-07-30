/* ============================================================
   Island Boy Homes — shared UI behaviour
   ============================================================ */

const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';
const BOOK = 'https://book.islandboyhomes.com/';
const WA_GENERAL = 'https://wa.me/6285921090468?utm_source=islandboyhomes&utm_medium=website&utm_campaign=general_inquiry&utm_content=footer_button';
const IG = 'https://www.instagram.com/islandboy.homes';

/* ---------- Header ---------- */
function buildHeader(active) {
  const link = (href, label, key) =>
    `<a href="${href}" class="${active === key ? 'active' : ''}">${label}</a>`;
  return `
  <header class="site-header" id="siteHeader">
    <div class="nav-inner">
      <nav class="nav-links">
        ${link('index.html', 'Home', 'home')}
        ${link('our-homes.html', 'Our Homes', 'homes')}
        ${link('contact.html', 'Contact', 'contact')}
      </nav>
      <a href="index.html" class="brand">
        <img src="assets/logo-brown.png" alt="Island Boy Homes" class="brand-logo">
      </a>
      <div class="nav-right">
        <a href="${BOOK}" target="_blank" rel="noopener" class="btn">
          <span class="bk-full">Book Your Stay</span><span class="bk-short">Book</span>
          <span class="ic">${ARROW}</span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html">Home</a>
    <a href="our-homes.html">Our Homes</a>
    <a href="contact.html">Contact</a>
    <a href="${BOOK}" target="_blank" rel="noopener" class="btn"><span>Book Your Stay</span><span class="ic">${ARROW}</span></a>
  </div>`;
}

/* ---------- Footer ---------- */
function buildFooter() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/logo-white.png" alt="Island Boy Homes" class="footer-logo">
          <p>A boutique property management platform offering a curated portfolio of villas and guesthouses across Bali — your home away from home.</p>
          <a href="${BOOK}" target="_blank" rel="noopener" class="btn light" style="margin-top:26px"><span>Book Your Stay</span><span class="ic">${ARROW}</span></a>
        </div>
        <div class="footer-col">
          <h5>Explore</h5>
          <a href="index.html">Home</a>
          <a href="our-homes.html">Our Homes</a>
          <a href="contact.html">Contact</a>
          <a href="terms.html">Terms &amp; Conditions</a>
        </div>
        <div class="footer-col">
          <h5>Connect</h5>
          <a href="${WA_GENERAL}" target="_blank" rel="noopener">WhatsApp · +62 859 2109 0468</a>
          <a href="${IG}" target="_blank" rel="noopener">Instagram · @islandboy.homes</a>
          <a href="${BOOK}" target="_blank" rel="noopener">Booking Portal</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Island Boy Homes. Canggu, Bali.</span>
        <span>Curated stays across Canggu, Pererenan, Jimbaran &amp; beyond.</span>
      </div>
    </div>
  </footer>`;
}

/* ---------- Property card ---------- */
function propertyCard(p, i) {
  const isActive = ACTIVE_STATUSES.includes(p.status);
  const badgeClass = p.status === 'available' ? 'live' : p.status === 'leasehold' ? 'lease' : 'muted';
  const href = `property.html?home=${p.slug}`;
  return `
  <article class="card reveal" data-delay="${(i % 3) + 1}">
    <div class="card-media ${isActive ? '' : 'past'}">
      <span class="badge ${badgeClass}"><span class="dot"></span>${p.statusLabel}</span>
      <img src="${p.thumb}" alt="${p.name} — ${p.location}" loading="lazy">
    </div>
    <div class="card-body">
      <div class="card-region">${p.region}</div>
      <h3 class="card-title">${p.name}</h3>
      <div class="card-sub">${p.sub}</div>
      <div class="card-meta">
        ${p.specs.split(' · ').map(s => `<span class="chip">${s}</span>`).join('')}
      </div>
      <div class="card-foot">
        <span class="tenure">${p.tenure.join(' · ')}</span>
        <span class="card-arrow">${ARROW}</span>
      </div>
    </div>
    <a class="card-link" href="${href}" aria-label="View ${p.name}"></a>
  </article>`;
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
}

/* ---------- Header shrink + mobile menu ---------- */
function initHeader() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open'); toggle.classList.remove('open'); document.body.style.overflow = '';
    }));
  }
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ---------- Mount ---------- */
function mountChrome(active) {
  const h = document.getElementById('header-slot');
  const f = document.getElementById('footer-slot');
  if (h) h.innerHTML = buildHeader(active);
  if (f) f.innerHTML = buildFooter();
  initHeader();
}
