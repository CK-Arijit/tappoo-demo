(function () {
  const data = window.PROTOTYPE_DATA;
  const byId = Object.fromEntries(data.screens.map((s) => [s.id, s]));
  const ordered = data.screens;

  const screenTitle = document.getElementById("screenTitle");
  const screenId = document.getElementById("screenId");
  const screenImage = document.getElementById("screenImage");
  const flowButtons = document.getElementById("flowButtons");
  const screenList = document.getElementById("screenList");
  const search = document.getElementById("search");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let current = getScreenFromUrl() || data.start;

  function getScreenFromUrl() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return null;
    const params = new URLSearchParams(hash);
    const id = params.get("screen");
    return byId[id] ? id : null;
  }

  function setScreen(id, updateHash = true) {
    if (!byId[id]) return;
    current = id;

    const screen = byId[id];
    screenTitle.textContent = screen.name;
    screenId.textContent = `ID: ${screen.id}`;
    screenImage.src = `assets/${screen.id}.png`;
    screenImage.alt = screen.name;

    if (updateHash) {
      location.hash = `screen=${encodeURIComponent(id)}`;
    }

    renderFlowButtons();
    highlightCurrent();
  }

  function renderFlowButtons() {
    flowButtons.innerHTML = "";
    const transitions = data.transitions[current] || [];

    if (transitions.length === 0) {
      const end = document.createElement("span");
      end.textContent = "No mapped actions on this screen.";
      end.style.color = "#5a7593";
      end.style.fontSize = "14px";
      flowButtons.appendChild(end);
      return;
    }

    transitions.forEach((t) => {
      const btn = document.createElement("button");
      btn.textContent = t.label;
      btn.addEventListener("click", () => setScreen(t.to));
      flowButtons.appendChild(btn);
    });
  }

  function highlightCurrent() {
    const buttons = screenList.querySelectorAll("button[data-id]");
    buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.id === current));
  }

  function renderScreenList(filter = "") {
    const q = filter.trim().toLowerCase();
    screenList.innerHTML = "";

    ordered
      .filter((s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q))
      .forEach((s) => {
        const btn = document.createElement("button");
        btn.className = "screen-item";
        btn.dataset.id = s.id;
        btn.innerHTML = `<strong>${s.name}</strong><span>${s.id}</span>`;
        btn.addEventListener("click", () => setScreen(s.id));
        screenList.appendChild(btn);
      });

    highlightCurrent();
  }

  function move(step) {
    const i = ordered.findIndex((s) => s.id === current);
    const next = i + step;
    if (next >= 0 && next < ordered.length) {
      setScreen(ordered[next].id);
    }
  }

  prevBtn.addEventListener("click", () => move(-1));
  nextBtn.addEventListener("click", () => move(1));

  search.addEventListener("input", (e) => renderScreenList(e.target.value));

  window.addEventListener("hashchange", () => {
    const id = getScreenFromUrl();
    if (id && id !== current) setScreen(id, false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === "ArrowRight") move(1);
  });

  renderScreenList();
  setScreen(current, false);
})();
