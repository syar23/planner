(function () {
  "use strict";

  const STORAGE_KEY = "careerRebuild.v1.checks";
  const NOTES_KEY = "careerRebuild.v1.notes";
  const START_KEY = "careerRebuild.v1.startDate";

  const checks = loadJSON(STORAGE_KEY, {});
  let openWeek = null;

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

  function taskId(weekIdx, dayIdx, taskIdx) {
    return `w${weekIdx}-d${dayIdx}-t${taskIdx}`;
  }

  function countTasks() {
    let total = 0;
    PLAN.forEach((w) => w.days.forEach((d) => (total += d.tasks.length)));
    return total;
  }
  function countDone() {
    return Object.values(checks).filter(Boolean).length;
  }
  function weekTotals(weekIdx) {
    const w = PLAN[weekIdx];
    let total = 0, done = 0;
    w.days.forEach((d, di) => d.tasks.forEach((t, ti) => {
      total++;
      if (checks[taskId(weekIdx, di, ti)]) done++;
    }));
    return { total, done };
  }

  function renderHeroStats() {
    const el = document.getElementById("hero-stats");
    const start = localStorage.getItem(START_KEY);
    let dayInfo = "Not started yet";
    if (start) {
      const started = new Date(start);
      const diffDays = Math.floor((Date.now() - started.getTime()) / 86400000) + 1;
      const week = Math.min(12, Math.max(1, Math.ceil(diffDays / 7)));
      dayInfo = diffDays > 0 ? `Day ${diffDays} · Week ${week} of 12` : "Starts today";
    }
    const total = countTasks(), done = countDone();
    el.innerHTML = `
      <span class="stat-pill"><strong>${dayInfo}</strong></span>
      <span class="stat-pill"><strong>${done}/${total}</strong> tasks done</span>
    `;
  }

  function renderOverview() {
    const total = countTasks(), done = countDone();
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("overall-fill").style.width = pct + "%";
    document.getElementById("overall-pct").textContent = pct + "%";

    const dotsEl = document.getElementById("week-dots");
    dotsEl.innerHTML = "";
    PLAN.forEach((w, wi) => {
      const { total: wt, done: wd } = weekTotals(wi);
      const dot = document.createElement("div");
      dot.className = "week-dot" + (wt > 0 && wd === wt ? " done" : "");
      dot.textContent = w.week;
      dot.title = `Week ${w.week}: ${w.theme} (${wd}/${wt})`;
      dot.addEventListener("click", () => {
        openWeek = wi;
        render();
        document.getElementById("week-" + wi).scrollIntoView({ behavior: "smooth", block: "start" });
      });
      dotsEl.appendChild(dot);
    });
  }

  function renderWeeks() {
    const container = document.getElementById("weeks-container");
    container.innerHTML = "";
    PLAN.forEach((w, wi) => {
      const { total: wt, done: wd } = weekTotals(wi);
      const card = document.createElement("div");
      card.className = "week-card" + (openWeek === wi ? " open" : "");
      card.id = "week-" + wi;

      const header = document.createElement("div");
      header.className = "week-header";
      header.innerHTML = `
        <div class="week-num">W${w.week}</div>
        <div class="week-header-text">
          <h3>${w.theme}</h3>
          <div class="week-meta">${w.hoursPerDay}</div>
        </div>
        <div class="week-progress-mini">${wd}/${wt}</div>
        <svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;
      header.addEventListener("click", () => {
        openWeek = openWeek === wi ? null : wi;
        render();
        if (openWeek === wi) {
          document.getElementById("week-" + wi).scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      const body = document.createElement("div");
      body.className = "week-body";
      const why = document.createElement("p");
      why.className = "week-why";
      why.textContent = w.why;
      body.appendChild(why);

      w.days.forEach((d, di) => {
        const block = document.createElement("div");
        block.className = "day-block";
        const label = document.createElement("p");
        label.className = "day-label";
        label.textContent = d.label;
        block.appendChild(label);

        d.tasks.forEach((t, ti) => {
          const id = taskId(wi, di, ti);
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
            updateWeekMini(wi);
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

  function updateWeekMini(wi) {
    const { total, done } = weekTotals(wi);
    const card = document.getElementById("week-" + wi);
    if (!card) return;
    const mini = card.querySelector(".week-progress-mini");
    if (mini) mini.textContent = `${done}/${total}`;
    if (total > 0 && done === total) {
      document.querySelectorAll(".week-dot")[wi]?.classList.add("done");
    } else {
      document.querySelectorAll(".week-dot")[wi]?.classList.remove("done");
    }
  }

  function render() {
    renderHeroStats();
    renderOverview();
    renderWeeks();
  }

  document.getElementById("start-btn").addEventListener("click", () => {
    localStorage.setItem(START_KEY, new Date().toISOString());
    renderHeroStats();
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (!confirm("Reset all checked tasks and notes on this device? This can't be undone.")) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(START_KEY);
    localStorage.removeItem(NOTES_KEY);
    Object.keys(checks).forEach((k) => delete checks[k]);
    document.getElementById("notes-area").value = "";
    render();
  });

  const notesArea = document.getElementById("notes-area");
  notesArea.value = localStorage.getItem(NOTES_KEY) || "";
  notesArea.addEventListener("input", () => {
    localStorage.setItem(NOTES_KEY, notesArea.value);
  });

  render();
})();
