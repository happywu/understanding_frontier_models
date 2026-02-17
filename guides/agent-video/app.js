// ===================== Hash-based Routing =====================
function navigateTo(sectionId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById(sectionId);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  }

  const link = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  if (link) link.classList.add('active');

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

function handleHash() {
  const hash = window.location.hash.slice(1) || 'overview';
  navigateTo(hash);
}

window.addEventListener('hashchange', handleHash);
window.addEventListener('load', () => {
  handleHash();
  renderMath();
});

// Navigation click handlers
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    window.location.hash = section;
  });
});

// Mobile menu
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Close sidebar on overlay click (mobile)
document.getElementById('sidebar').addEventListener('click', (e) => {
  if (e.target === document.getElementById('sidebar') && window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
});

// ===================== Theme Toggle =====================
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('av-theme', theme);
  const isLight = theme === 'light';
  const icon = isLight ? '\u2600' : '\u263E';  // sun or moon
  const label = isLight ? 'Dark Mode' : 'Light Mode';
  document.getElementById('theme-icon').textContent = icon;
  document.getElementById('theme-label').textContent = label;
  document.getElementById('theme-icon-mobile').textContent = icon;
}

// Initialize theme from localStorage or system preference
(function initTheme() {
  const saved = localStorage.getItem('av-theme');
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme('light');
  }
})();

document.getElementById('theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});
document.getElementById('theme-toggle-mobile').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});

// ===================== Advanced Math Toggle =====================
const mathToggle = document.getElementById('math-toggle');
const mathToggleMobile = document.getElementById('math-toggle-mobile');

function setAdvancedMath(show) {
  document.body.classList.toggle('show-advanced', show);
  mathToggle.checked = show;
  mathToggleMobile.checked = show;
}

mathToggle.addEventListener('change', () => setAdvancedMath(mathToggle.checked));
mathToggleMobile.addEventListener('change', () => setAdvancedMath(mathToggleMobile.checked));

// ===================== KaTeX Math Rendering =====================
function renderMath() {
  if (typeof katex === 'undefined') {
    setTimeout(renderMath, 100);
    return;
  }

  document.querySelectorAll('.math-block[data-math]').forEach(el => {
    try {
      katex.render(el.getAttribute('data-math'), el, {
        displayMode: true,
        throwOnError: false,
        output: 'html'
      });
    } catch (err) {
      el.textContent = el.getAttribute('data-math');
    }
  });
}

// ===================== Intersection Observer for Animations =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '-50px' });

document.querySelectorAll('.diagram-card, .step-card, .model-card, .card, .callout, .intuition-box, .advanced-math, .problem-card, .frontier-item, .train-stage').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(15px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

// Add visible style
const visibleStyle = document.createElement('style');
visibleStyle.textContent = `.visible { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(visibleStyle);

// Re-observe elements when navigating to a new page
const origNavigate = navigateTo;
window.navigateTo = function(sectionId) {
  origNavigate(sectionId);
  setTimeout(() => {
    document.querySelectorAll('.page.active .diagram-card, .page.active .step-card, .page.active .model-card, .page.active .card, .page.active .callout, .page.active .intuition-box, .page.active .advanced-math, .page.active .problem-card, .page.active .frontier-item, .page.active .train-stage').forEach(el => {
      observer.unobserve(el);
      el.classList.remove('visible');
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
      observer.observe(el);
    });
    renderMath();
  }, 50);
};

// Override the hash handler to use the enhanced navigate
function handleHashEnhanced() {
  const hash = window.location.hash.slice(1) || 'overview';
  window.navigateTo(hash);
}
window.removeEventListener('hashchange', handleHash);
window.addEventListener('hashchange', handleHashEnhanced);
