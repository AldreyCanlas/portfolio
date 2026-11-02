const params = new URLSearchParams(location.search);
const name = params.get("name");
const repo = REPOS.find((item) => item.name === name);
const page = (typeof PAGES === "object" && PAGES[name]) || {};
const title = document.querySelector("#title");
const eyebrow = document.querySelector("#eyebrow");
const overview = document.querySelector("#overview");
const links = document.querySelector("#links");

if (!repo) {
  title.textContent = "Project not on this page";
  eyebrow.textContent = "";
  const missing = document.createElement("p");
  missing.className = "overview";
  missing.textContent = "That name is not in the repository list.";
  overview.append(missing);
} else {
  document.title = repo.name + " · Aldrey Canlas";
  title.textContent = repo.name;
  const labels = repo.tags.map((tag) => (tag === "app" ? "App" : tag === "ai" ? "AI" : "Fork"));
  if (repo.lang) labels.push(repo.lang);
  eyebrow.textContent = labels.join(" · ");
  for (const paragraph of page.overview || [repo.blurb]) {
    const block = document.createElement("p");
    block.className = "overview";
    block.textContent = paragraph;
    overview.append(block);
  }
  const ship = (typeof SHIP === "object" && SHIP[name]) || {};
  const facts = [
    ["Development", ship.develop],
    ["Deployment", ship.deploy]
  ];
  for (const [label, text] of facts) {
    if (!text) continue;
    const block = document.createElement("section");
    block.className = "ship";
    const heading = document.createElement("h2");
    heading.textContent = label;
    const body = document.createElement("p");
    body.textContent = text;
    block.append(heading, body);
    overview.append(block);
  }
  const code = document.createElement("a");
  code.href = "https://github.com/glowsenior/" + repo.name;
  code.target = "_blank";
  code.rel = "noreferrer";
  code.textContent = "Code";
  links.append(code);
  if (page.site) {
    const site = document.createElement("a");
    site.href = page.site;
    site.target = "_blank";
    site.rel = "noreferrer";
    site.textContent = "Website";
    links.append(site);
  }
}
