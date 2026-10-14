(function () {
  const config = typeof PORTAL_CONFIG !== "undefined" ? PORTAL_CONFIG : null;
  if (!config) return;

  const AVATAR_COLORS = [
    "#4f46e5", "#7c3aed", "#db2777", "#dc2626", "#ea580c",
    "#d97706", "#16a34a", "#0d9488", "#0284c7", "#2563eb"
  ];

  function colorFor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
    }
    return AVATAR_COLORS[hash % AVATAR_COLORS.length];
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  const els = {
    title: document.getElementById("portal-title"),
    subtitle: document.getElementById("portal-subtitle"),
    nav: document.getElementById("category-nav"),
    main: document.getElementById("main-content"),
    search: document.getElementById("search-input")
  };

  els.title.textContent = config.title || "导航门户";
  els.subtitle.textContent = config.subtitle || "";
  document.title = config.title || "导航门户";

  let activeCategory = "全部";
  let keyword = "";

  function renderNav() {
    const names = ["全部", ...config.categories.map(c => c.name)];
    els.nav.innerHTML = names.map(name =>
      `<button class="nav-btn${name === activeCategory ? " active" : ""}" data-category="${escapeHtml(name)}">${escapeHtml(name)}</button>`
    ).join("");
  }

  function siteMatches(site) {
    if (!keyword) return true;
    const kw = keyword.toLowerCase();
    return (site.name || "").toLowerCase().includes(kw) ||
           (site.desc || "").toLowerCase().includes(kw);
  }

  function renderCard(site) {
    const letter = escapeHtml((site.name || "?").trim().charAt(0).toUpperCase());
    const img = site.icon ? `<img src="${escapeHtml(site.icon)}" alt="" onerror="this.remove()">` : "";
    return `
      <a class="site-card" href="${escapeHtml(site.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(site.name)}">
        <span class="site-icon" style="background:${colorFor(site.name)}">${img}${letter}</span>
        <span class="site-info">
          <span class="site-name">${escapeHtml(site.name)}</span>
          <span class="site-desc">${escapeHtml(site.desc || "")}</span>
        </span>
      </a>`;
  }

  function renderMain() {
    const categories = config.categories.filter(c =>
      activeCategory === "全部" || c.name === activeCategory
    );

    let html = "";
    for (const cat of categories) {
      const sites = cat.sites.filter(siteMatches);
      if (sites.length === 0) continue;
      html += `
        <section class="category-section">
          <h2 class="category-title">${escapeHtml(cat.name)}</h2>
          <div class="site-grid">${sites.map(renderCard).join("")}</div>
        </section>`;
    }

    els.main.innerHTML = html ||
      `<div class="empty-state">没有找到匹配「${escapeHtml(keyword)}」的网站</div>`;
  }

  els.nav.addEventListener("click", e => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    renderNav();
    renderMain();
  });

  els.search.addEventListener("input", e => {
    keyword = e.target.value.trim();
    renderMain();
  });

  renderNav();
  renderMain();
})();
