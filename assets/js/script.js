// Types the terminal session line by line; any key, click or tap shows it all at once.
(() => {
  const YOUTUBE = "https://www.youtube.com/channel/UC9sBM8rceAKacjTyjvFkeUQ";
  const GALLERY = "https://sunkpoet-lang.github.io/RetroFightersTV/";
  const WIKI = "https://github.com/onlyfights420/onlyfights420.github.io/wiki";

  // Each line: a command (typed) or output (shown at once). Output may contain trusted inline HTML.
  const SESSION = [
    { cmd: "whoami" },
    { out: '<span class="hl">4-20 Systems</span>: código abierto para la comunidad de juegos de pelea.' },
    { gap: true },
    { cmd: "ls proyectos/" },
    { out: `<a href="${YOUTUBE}">RetroFightersTV</a>  retas de Fightcade grabadas, editadas y subidas solas a YouTube` },
    { out: `<a href="${GALLERY}">galeria</a>          todas las retas del canal, con buscador` },
    { out: "RetaBot          pide tu reta desde Discord o Telegram" },
    { gap: true },
    { cmd: "cat stack.txt" },
    { out: "OpenTofu · Ansible · Podman · OpenBao · Python · FFmpeg" },
    { out: '<span class="pink">100%</span> código abierto.' },
    { gap: true },
    { cmd: "echo $MISION" },
    { out: "Que cada reta de la comunidad tenga su video, sin que nadie edite a mano." },
    { gap: true },
    { cmd: "cat CONTRIBUTING.md" },
    { out: `Abiertos a colaborar: empieza por las <a href="${WIKI}">guías</a>.` },
    { gap: true },
    { cmd: "insert-coin", final: true },
  ];

  const term = document.getElementById("terminal");
  const hint = document.getElementById("skip-hint");
  if (!term) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let skipped = reduced;

  const sleep = (ms) => new Promise((r) => setTimeout(r, skipped ? 0 : ms));

  const cursor = document.createElement("span");
  cursor.className = "cursor";

  function line() {
    const p = document.createElement("p");
    term.appendChild(p);
    return p;
  }

  async function typeCommand(text) {
    const p = line();
    p.innerHTML = '<span class="prompt">&gt;</span> <span class="cmd"></span>';
    const cmd = p.querySelector(".cmd");
    p.appendChild(cursor);
    for (const ch of text) {
      cmd.textContent += ch;
      await sleep(45 + Math.random() * 55);
    }
    await sleep(260);
  }

  async function run() {
    for (const item of SESSION) {
      if (item.gap) {
        const g = document.createElement("div");
        g.className = "gap";
        term.appendChild(g);
      } else if (item.cmd !== undefined) {
        await typeCommand(item.cmd);
        if (item.final) break;
      } else {
        const p = line();
        p.className = "out";
        p.innerHTML = item.out;
        await sleep(120);
      }
    }
    term.lastElementChild.appendChild(cursor);
    if (hint) hint.classList.add("done");
  }

  const skip = () => { skipped = true; };
  window.addEventListener("keydown", skip, { once: true });
  window.addEventListener("pointerdown", skip, { once: true });

  run();
})();
