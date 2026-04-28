/* ============================================================
   LOOPIA — app.js
   Lógica de filtros, render y stats.
   ============================================================ */

// ── Distancias que se consideran "ultra" ──────────────────────
const ULTRA_DIST  = ["50K", "60K", "100K+", "37K", "70K", "110K"];
const MILLAS_DIST = ["100MI", "100M"];

// ── Distancias que muestran pill verde (trail/ultra) ──────────
const ULTRA_PILL  = [...ULTRA_DIST, ...MILLAS_DIST];

// ── Fecha de hoy para marcar "pasadas" ────────────────────────
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

// ── Estado de filtros ─────────────────────────────────────────
let activeTipo = "todas";
let activeDist = "todas";
let activeProv = "todas";

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

function isPast(dateStr) {
  return new Date(dateStr) < TODAY;
}

function distanceMatches(race, filter) {
  if (filter === "todas") return true;
  if (filter === "ultra")  return race.dist.some(d => ULTRA_DIST.includes(d));
  if (filter === "100M")   return race.dist.some(d => MILLAS_DIST.includes(d));
  return race.dist.includes(filter);
}

function dateBlockClass(race) {
  if (isPast(race.d))     return "date-block past";
  if (race.org === "utmb") return "date-block utmb";
  if (race.org === "cada") return "date-block cada";
  return `date-block ${race.tipo}`;
}

function buttonClass(race) {
  if (isPast(race.d))     return "btn-inscribite btn-past";
  if (race.org === "utmb") return "btn-inscribite btn-utmb";
  if (race.org === "cada") return "btn-inscribite btn-cada";
  return race.tipo === "trail" ? "btn-inscribite btn-trail" : "btn-inscribite btn-calle";
}

function pillClass(dist) {
  return ULTRA_PILL.includes(dist) ? "dist-pill ultra" : "dist-pill";
}

function getSectionKey(race) {
  if (race.d >= "2027-01-01") return "2027";
  if (race.org === "utmb")    return "utmb";
  if (race.org === "cada")    return "cada";
  return "";
}

function sectionDividerHTML(key) {
  const labels = {
    utmb: "🌐 UTMB World Series",
    cada: "🏅 Circuito Nacional CADA — Trail y Montaña 2026",
    "2027": "📅 2027 — inscripción ya abierta",
  };
  return `<div class="section-divider">${labels[key]}</div>`;
}

// ─────────────────────────────────────────────────────────────
// Stats en el header
// ─────────────────────────────────────────────────────────────

function updateStats() {
  const total  = RACES.length;
  const trails = RACES.filter(r => r.tipo === "trail").length;
  const prox   = RACES
    .filter(r => !isPast(r.d))
    .sort((a, b) => a.d.localeCompare(b.d))[0];

  document.getElementById("stat-total").textContent  = total;
  document.getElementById("stat-trail").textContent  = trails;
  document.getElementById("stat-proxima").textContent =
    prox ? (prox.dy === "—" ? "pronto" : `${prox.dy} ${prox.mo}`) : "—";
}

// ─────────────────────────────────────────────────────────────
// Render de cards
// ─────────────────────────────────────────────────────────────

function buildCardHTML(race) {
  const past   = isPast(race.d);
  const org    = ORG_CONFIG[race.org] || { label: race.org, badgeClass: "" };
  const pills  = race.dist.map(d => `<span class="${pillClass(d)}">${d}</span>`).join("");
  const dayTxt = race.dy === "—" ? "?" : race.dy;

  // Imagen: si tiene img y no está vacía, la mostramos con fallback
  const imgHTML = race.img
    ? `<div class="card-img-wrap">
         <img
           class="card-img"
           src="${race.img}"
           alt="${race.n}"
           loading="lazy"
           onerror="this.parentElement.style.display='none'"
         />
         ${past ? '<div class="card-img-overlay">Finalizada</div>' : ""}
       </div>`
    : "";

  return `
    <div class="race-card${past ? " past-card" : ""}">

      ${imgHTML}

      <div class="card-main">
        <div class="${dateBlockClass(race)}">
          <div class="date-day">${dayTxt}</div>
          <div class="date-month">${race.mo}</div>
        </div>

        <div class="card-body">
          <div class="card-name">${race.n}</div>
          <div class="card-meta">${race.city}</div>
          <div class="distances">${pills}</div>
        </div>

        <div class="card-right">
          <span class="org-badge ${org.badgeClass}">${org.label}</span>
          <a href="${race.link}" class="${buttonClass(race)}" target="_blank" rel="noopener">
            ${past ? "Finalizada" : "Inscribite"}
          </a>
        </div>
      </div>

    </div>`;
}

function render() {
  // Filtrar
  const filtered = RACES
    .filter(race => {
      const tipoOk = activeTipo === "todas" || race.tipo === activeTipo;
      const provOk = activeProv === "todas" || race.prov === activeProv;
      const distOk = distanceMatches(race, activeDist);
      return tipoOk && provOk && distOk;
    })
    .sort((a, b) => a.d.localeCompare(b.d));

  // Actualizar contador
  const count = filtered.length;
  document.getElementById("results-count").textContent =
    `${count} carrera${count !== 1 ? "s" : ""} encontrada${count !== 1 ? "s" : ""}`;

  // Construir HTML
  const container = document.getElementById("cards-container");

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state">No hay carreras con esos filtros 😕</div>';
    return;
  }

  let html = "";
  let lastSection = "";

  filtered.forEach(race => {
    const sec = getSectionKey(race);
    if (sec && sec !== lastSection) {
      html += sectionDividerHTML(sec);
      lastSection = sec;
    }
    html += buildCardHTML(race);
  });

  container.innerHTML = html;
}

// ─────────────────────────────────────────────────────────────
// Event listeners — Tabs (tipo)
// ─────────────────────────────────────────────────────────────

document.getElementById("tabs-tipo").addEventListener("click", e => {
  const btn = e.target.closest("[data-tipo]");
  if (!btn) return;
  document.querySelectorAll("#tabs-tipo .tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeTipo = btn.dataset.tipo;
  render();
});

// ─────────────────────────────────────────────────────────────
// Event listeners — Filtro distancias
// ─────────────────────────────────────────────────────────────

document.getElementById("filter-dist").addEventListener("click", e => {
  const btn = e.target.closest("[data-d]");
  if (!btn) return;
  document.querySelectorAll("#filter-dist .chip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeDist = btn.dataset.d;
  render();
});

// ─────────────────────────────────────────────────────────────
// Event listeners — Filtro provincias
// ─────────────────────────────────────────────────────────────

document.getElementById("filter-prov").addEventListener("click", e => {
  const btn = e.target.closest("[data-p]");
  if (!btn) return;
  document.querySelectorAll("#filter-prov .chip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeProv = btn.dataset.p;
  render();
});

// ─────────────────────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────────────────────

updateStats();
render();