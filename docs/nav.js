/* nav.js — injecte la nav et le footer dans chaque page */

const currentPage = location.pathname.split('/').pop() || 'index.html';

const navHTML = `
<nav id="main-nav">
  <a href="index.html" class="nav-logo">L'Hypnose</a>
  <ul class="nav-links">
    <li><a href="types.html" ${currentPage==='types.html'?'class="active"':''}>Types</a></li>
    <li><a href="transe.html" ${currentPage==='transe.html'?'class="active"':''}>Transe</a></li>
    <li><a href="autohypnose.html" ${currentPage==='autohypnose.html'?'class="active"':''}>Autohypnose</a></li>
    <li><a href="induction.html" ${currentPage==='induction.html'?'class="active"':''}>Induction</a></li>
    <li><a href="rupture.html" ${currentPage==='rupture.html'?'class="active"':''}>Rupture de pattern</a></li>
    <li><a href="mythes.html" ${currentPage==='mythes.html'?'class="active"':''}>Mythes & FAQ</a></li>
  </ul>
  <a href="types.html" class="nav-btn">Commencer</a>
  <div class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>
<div id="mobile-menu" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(13,11,9,.97);z-index:490;flex-direction:column;align-items:center;justify-content:center;gap:2rem">
  <a href="index.html" class="nav-logo" style="font-size:2.2rem">L'Hypnose</a>
  <a href="types.html" style="color:var(--texte-sec);text-decoration:none;font-size:.9rem;letter-spacing:.15em;text-transform:uppercase" onclick="toggleMenu()">Types d'hypnose</a>
  <a href="transe.html" style="color:var(--texte-sec);text-decoration:none;font-size:.9rem;letter-spacing:.15em;text-transform:uppercase" onclick="toggleMenu()">Entrer en transe</a>
  <a href="autohypnose.html" style="color:var(--texte-sec);text-decoration:none;font-size:.9rem;letter-spacing:.15em;text-transform:uppercase" onclick="toggleMenu()">Autohypnose</a>
  <a href="induction.html" style="color:var(--texte-sec);text-decoration:none;font-size:.9rem;letter-spacing:.15em;text-transform:uppercase" onclick="toggleMenu()">Induction</a>
  <a href="rupture.html" style="color:var(--texte-sec);text-decoration:none;font-size:.9rem;letter-spacing:.15em;text-transform:uppercase" onclick="toggleMenu()">Rupture de pattern</a>
  <a href="mythes.html" style="color:var(--texte-sec);text-decoration:none;font-size:.9rem;letter-spacing:.15em;text-transform:uppercase" onclick="toggleMenu()">Mythes & FAQ</a>
</div>`;

const footerHTML = `
<footer>
  <div class="footer-grid">
    <div>
      <span class="footer-brand-logo">L'Hypnose</span>
      <p class="footer-desc">Un espace de connaissance dédié à l'exploration sérieuse et éthique de l'hypnose — ses types, ses mécanismes et ses applications.</p>
    </div>
    <div>
      <div class="footer-col-title">Apprendre</div>
      <ul class="footer-links">
        <li><a href="types.html">Types d'hypnose</a></li>
        <li><a href="transe.html">Entrer en transe</a></li>
        <li><a href="autohypnose.html">Autohypnose</a></li>
        <li><a href="induction.html">Induction d'autrui</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Maîtriser</div>
      <ul class="footer-links">
        <li><a href="rupture.html">Rupture de pattern</a></li>
        <li><a href="mythes.html">Mythes & Réalités</a></li>
        <li><a href="mythes.html#faq">FAQ</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">À propos</div>
      <ul class="footer-links">
        <li><a href="index.html">Accueil</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2025 L'Hypnose — Tous droits réservés</span>
    <span class="footer-copy">Contenu à visée éducative uniquement</span>
  </div>
</footer>`;

document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
window.toggleMenu = function() {
  const m = document.getElementById('mobile-menu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
};

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
