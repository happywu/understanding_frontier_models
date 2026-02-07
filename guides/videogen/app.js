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
  renderFlowPaths();
  renderPatchGrids();
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
  localStorage.setItem('vg-theme', theme);
  const isLight = theme === 'light';
  // Update icons and labels
  const icon = isLight ? '\u2600' : '\u263E';  // ☀ or ☾
  const label = isLight ? 'Dark Mode' : 'Light Mode';
  document.getElementById('theme-icon').textContent = icon;
  document.getElementById('theme-label').textContent = label;
  document.getElementById('theme-icon-mobile').textContent = icon;
  // Re-render flow paths with new theme colors
  renderFlowPaths();
}

// Initialize theme from localStorage or system preference
(function initTheme() {
  const saved = localStorage.getItem('vg-theme');
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
  // Wait for KaTeX to load
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

// ===================== Flow Paths SVG Visualization =====================
function renderFlowPaths() {
  const noisePoints = [
    {x: 30, y: 25}, {x: 70, y: 18}, {x: 110, y: 30}, {x: 150, y: 15},
    {x: 185, y: 28}, {x: 220, y: 12}, {x: 255, y: 32}
  ];
  const dataPoints = [
    {x: 40, y: 170}, {x: 80, y: 175}, {x: 120, y: 168}, {x: 155, y: 172},
    {x: 195, y: 176}, {x: 225, y: 165}, {x: 255, y: 171}
  ];

  function createSVGContent(svgEl, paths, color, noiseColor) {
    let html = '';
    // Labels
    html += '<text x="140" y="12" text-anchor="middle" fill="var(--fg-muted)" font-size="9">noise distribution</text>';
    html += '<text x="140" y="196" text-anchor="middle" fill="var(--fg-muted)" font-size="9">data distribution</text>';

    // Noise dots
    noisePoints.forEach(p => {
      html += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${noiseColor}" opacity="0.5"/>`;
    });
    // Data dots
    dataPoints.forEach(p => {
      html += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" opacity="0.7"/>`;
    });
    // Paths
    paths.forEach((d, i) => {
      const delay = i * 0.15;
      html += `<path d="${d}" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.6"
        stroke-dasharray="200" stroke-dashoffset="200" class="animated-path" style="animation-delay:${delay}s"/>`;
    });
    // Arrow tips
    dataPoints.forEach(p => {
      html += `<polygon points="${p.x},${p.y} ${p.x-3},${p.y-7} ${p.x+3},${p.y-7}" fill="${color}" opacity="0.6"/>`;
    });

    svgEl.innerHTML = html;
  }

  // DDPM: curved paths
  const ddpmPaths = noisePoints.map((n, i) => {
    const d = dataPoints[i];
    const midY = (n.y + d.y) / 2;
    const ox1 = (i % 2 === 0 ? 1 : -1) * (25 + (i * 7) % 20);
    const ox2 = (i % 2 === 0 ? -1 : 1) * (20 + (i * 5) % 15);
    return `M ${n.x} ${n.y} C ${n.x+ox1} ${midY-30}, ${d.x+ox2} ${midY+30}, ${d.x} ${d.y}`;
  });

  // Flow matching: straight paths
  const fmPaths = noisePoints.map((n, i) => {
    const d = dataPoints[i];
    return `M ${n.x} ${n.y} L ${d.x} ${d.y}`;
  });

  const ddpmSvg = document.getElementById('ddpm-paths');
  const fmSvg = document.getElementById('fm-paths');

  const style = getComputedStyle(document.documentElement);
  const muted = style.getPropertyValue('--muted').trim() || '#64748b';
  const fgMuted = style.getPropertyValue('--fg-muted').trim() || '#94a3b8';
  if (ddpmSvg) createSVGContent(ddpmSvg, ddpmPaths, fgMuted, muted);
  if (fmSvg) createSVGContent(fmSvg, fmPaths, '#10b981', muted);
}

// ===================== Patch Grid Visualization =====================
function renderPatchGrids() {
  const grid2d = document.getElementById('patch-2d');
  const grid3d = document.getElementById('patch-3d');

  if (grid2d) {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'patch-cell';
      grid2d.appendChild(cell);
    }
  }

  if (grid3d) {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = i < 12 ? 'patch-cell' : 'patch-cell-back';
      grid3d.appendChild(cell);
    }
  }
}

// ===================== CSS Animation for Flow Paths =====================
const style = document.createElement('style');
style.textContent = `
  @keyframes drawPath {
    to { stroke-dashoffset: 0; }
  }
  .animated-path {
    animation: drawPath 1.2s ease forwards;
  }
`;
document.head.appendChild(style);

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
  // Re-trigger observations after page switch
  setTimeout(() => {
    document.querySelectorAll('.page.active .diagram-card, .page.active .step-card, .page.active .model-card, .page.active .card, .page.active .callout, .page.active .intuition-box, .page.active .advanced-math, .page.active .problem-card, .page.active .frontier-item, .page.active .train-stage').forEach(el => {
      observer.unobserve(el);
      el.classList.remove('visible');
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
      observer.observe(el);
    });
    // Re-render flow paths SVG animation
    if (sectionId === 'flow-matching') {
      renderFlowPaths();
    }
    // Re-render math for newly visible sections
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
