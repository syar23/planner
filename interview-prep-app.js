(function () {
  "use strict";

  const STORAGE_KEY = "interviewPrep.v1.checks";
  const checks = loadJSON(STORAGE_KEY, {});
  let openSection = null;

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function saveChecks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
  }

  function taskId(si, gi, ti) {
    return `s${si}-g${gi}-t${ti}`;
  }

  function countTasks() {
    let total = 0;
    SECTIONS.forEach((s) => s.groups.forEach((g) => (total += g.tasks.length)));
    return total;
  }
  function countDone() {
    return Object.values(checks).filter(Boolean).length;
  }
  function sectionTotals(si) {
    const s = SECTIONS[si];
    let total = 0, done = 0;
    s.groups.forEach((g, gi) => g.tasks.forEach((t, ti) => {
      total++;
      if (checks[taskId(si, gi, ti)]) done++;
    }));
    return { total, done };
  }

  function renderHeroStats() {
    const el = document.getElementById("hero-stats");
    const total = countTasks(), done = countDone();
    el.innerHTML = `<span class="stat-pill"><strong>${done}/${total}</strong> tasks done</span>
      <span class="stat-pill"><strong>${SECTIONS.length}</strong> round types covered</span>`;
  }

  function renderOverview() {
    const total = countTasks(), done = countDone();
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("overall-fill").style.width = pct + "%";
    document.getElementById("overall-pct").textContent = pct + "%";
  }

  function renderSections() {
    const container = document.getElementById("sections-container");
    container.innerHTML = "";
    SECTIONS.forEach((s, si) => {
      const { total: st, done: sd } = sectionTotals(si);
      const card = document.createElement("div");
      card.className = "week-card" + (openSection === si ? " open" : "");
      card.id = "section-" + si;

      const header = document.createElement("div");
      header.className = "week-header";
      header.innerHTML = `
        <div class="week-num">${si + 1}</div>
        <div class="week-header-text">
          <h3>${s.title}</h3>
        </div>
        <div class="week-progress-mini">${sd}/${st}</div>
        <svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;
      header.addEventListener("click", () => {
        openSection = openSection === si ? null : si;
        render();
      });

      const body = document.createElement("div");
      body.className = "week-body";
      const why = document.createElement("p");
      why.className = "week-why";
      why.textContent = s.why;
      body.appendChild(why);

      s.groups.forEach((g, gi) => {
        const block = document.createElement("div");
        block.className = "day-block";
        const label = document.createElement("p");
        label.className = "day-label";
        label.textContent = g.label;
        block.appendChild(label);

        g.tasks.forEach((t, ti) => {
          const id = taskId(si, gi, ti);
          const row = document.createElement("div");
          row.className = "task" + (checks[id] ? " checked" : "");
          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.id = id;
          cb.checked = !!checks[id];
          cb.addEventListener("change", () => {
            checks[id] = cb.checked;
            saveChecks();
            row.classList.toggle("checked", cb.checked);
            renderOverview();
            renderHeroStats();
            updateSectionMini(si);
          });
          const lbl = document.createElement("label");
          lbl.setAttribute("for", id);
          lbl.textContent = t;
          row.appendChild(cb);
          row.appendChild(lbl);
          block.appendChild(row);
        });
        body.appendChild(block);
      });

      card.appendChild(header);
      card.appendChild(body);
      container.appendChild(card);
    });
  }

  function updateSectionMini(si) {
    const { total, done } = sectionTotals(si);
    const card = document.getElementById("section-" + si);
    if (!card) return;
    const mini = card.querySelector(".week-progress-mini");
    if (mini) mini.textContent = `${done}/${total}`;
  }

  function render() {
    renderHeroStats();
    renderOverview();
    renderSections();
  }

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (!confirm("Reset all checked tasks on this device? This can't be undone.")) return;
    localStorage.removeItem(STORAGE_KEY);
    Object.keys(checks).forEach((k) => delete checks[k]);
    render();
  });

  render();
})();
