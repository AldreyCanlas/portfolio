const cards = document.querySelector("#cards");
const empty = document.querySelector("#empty");
const question = document.querySelector("#question");
const send = document.querySelector("#send");
const answer = document.querySelector("#answer");
const form = document.querySelector("#ask");

const LINE = "M3 9 C 40 3, 78 13, 118 7 S 196 2, 238 8 S 286 5, 297 7";
const FIELDS = ["#A8C5A0", "#B8A9D4", "#D4C5A0", "#82FFF4", "#e08a8a"];

function svgLine(tilt) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "card-line");
  svg.setAttribute("viewBox", "0 0 300 14");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");
  svg.style.setProperty("--tilt", tilt);
  for (const echo of [false, true]) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("pathLength", "1");
    path.setAttribute("d", LINE);
    if (echo) path.setAttribute("class", "card-line-echo");
    svg.append(path);
  }
  return svg;
}

function kindLabel(repo) {
  if (repo.tags.includes("ai")) return "AI";
  if (repo.tags.includes("app")) return "App";
  return "Fork";
}

function render() {
  cards.replaceChildren();
  REPOS.forEach((repo, index) => {
    const page = PAGES[repo.name] || {};
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.tags = repo.tags.join(" ");
    article.style.setProperty("--work-field", FIELDS[index % FIELDS.length]);
    article.style.setProperty("--d", Math.min(index, 16) * 35 + "ms");

    const row = document.createElement("div");
    row.className = "card-row";

    const title = document.createElement("h3");
    title.className = "card-name";
    const name = document.createElement("a");
    name.className = "card-name-btn";
    name.href = "project.html?name=" + encodeURIComponent(repo.name);
    name.textContent = repo.name;
    const tilt = ((repo.name.length % 5) - 2) * 0.6 + "deg";
    title.append(name, svgLine(tilt));

    const body = document.createElement("div");
    body.className = "card-body";
    const blurb = document.createElement("p");
    blurb.className = "card-desc";
    blurb.textContent = repo.blurb;
    const actions = document.createElement("div");
    actions.className = "actions";
    const read = document.createElement("a");
    read.href = "project.html?name=" + encodeURIComponent(repo.name);
    read.textContent = "Read";
    actions.append(read);
    if (page.site) {
      const site = document.createElement("a");
      site.href = page.site;
      site.target = "_blank";
      site.rel = "noreferrer";
      site.textContent = "Website";
      actions.append(site);
    }
    const code = document.createElement("a");
    code.href = "https://github.com/glowsenior/" + repo.name;
    code.target = "_blank";
    code.rel = "noreferrer";
    code.textContent = "Code";
    actions.append(code);
    body.append(blurb, actions);

    const tag = document.createElement("span");
    tag.className = "card-tag";
    const kind = document.createElement("span");
    kind.className = "card-kind";
    kind.textContent = kindLabel(repo);
    tag.append(kind);
    if (repo.lang) {
      const field = document.createElement("span");
      field.className = "card-field";
      field.textContent = repo.lang;
      tag.append(field);
    }

    row.append(title, body, tag);
    article.append(row);
    cards.append(article);
  });
  requestAnimationFrame(() => {
    for (const article of cards.children) article.classList.add("is-visible");
  });
}

function apply(filter) {
  let shown = 0;
  for (const article of cards.children) {
    const on = filter === "all" || article.dataset.tags.split(" ").includes(filter);
    article.classList.toggle("is-filtered", !on);
    if (on) shown += 1;
  }
  empty.hidden = shown > 0;
}

function count(filter) {
  return filter === "all" ? REPOS.length : REPOS.filter((repo) => repo.tags.includes(filter)).length;
}

for (const node of document.querySelectorAll("[data-count]")) {
  node.textContent = String(count(node.dataset.count));
}

for (const chip of document.querySelectorAll(".chip")) {
  chip.addEventListener("click", () => {
    for (const other of document.querySelectorAll(".chip")) {
      other.classList.toggle("is-active", other === chip);
      other.setAttribute("aria-pressed", other === chip ? "true" : "false");
    }
    apply(chip.dataset.filter);
  });
}

question.addEventListener("input", () => {
  send.disabled = question.value.trim().length === 0;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = question.value.trim().toLowerCase();
  if (!query) return;
  const hit = FACTS.find((fact) => fact.keys.some((key) => query.includes(key)));
  const named = REPOS.find((repo) => query.includes(repo.name.toLowerCase()));
  if (named) {
    answer.textContent = named.name + ": " + named.blurb;
    return;
  }
  answer.textContent = hit
    ? hit.text
    : "I can answer from the roles, the NUS degree, and the repositories on this page. Try Cognizant, Dashlabs, NUS, or a repository name.";
});

const header = document.querySelector(".top");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!motion && "IntersectionObserver" in window) {
  const seen = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        seen.unobserve(entry.target);
      }
    }
  }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
  for (const block of document.querySelectorAll(".reveal")) seen.observe(block);
} else {
  for (const block of document.querySelectorAll(".reveal")) block.classList.add("is-in");
}

render();
apply("all");

const board = document.querySelector(".board");
const seed = board.querySelector(".cluster");
const pages = Math.ceil(document.documentElement.scrollHeight / window.innerHeight);
for (let page = 1; page < pages; page += 1) {
  const copy = seed.cloneNode(true);
  copy.style.top = page * 100 + "vh";
  board.append(copy);
}
