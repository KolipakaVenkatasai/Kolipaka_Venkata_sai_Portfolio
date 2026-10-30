(() => {
  const $ = id => document.getElementById(id);
  const tags = a => `<div class="tags">${(a || []).map(t => `<span>${t}</span>`).join("")}</div>`;
  const view = (txt, ic) => `<span class="view">${txt} <i class="${ic}"></i></span>`;

  $("heroName").innerHTML = `${PROFILE.firstName} <span class="grad">${PROFILE.lastName}</span>`;
  $("heroIntro").textContent = PROFILE.intro;
  $("heroPhoto").src = PROFILE.photo;
  $("aboutText").textContent = PROFILE.about;
  $("openText").textContent = PROFILE.openToWork;
  $("footerText").textContent = PROFILE.footer;
  $("socials").innerHTML =
    `<a href="mailto:${PROFILE.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>` +
    `<a href="${PROFILE.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>` +
    `<a href="${PROFILE.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`;

  $("stats").innerHTML = STATS.map(s => {
    const v = s.value === "projects" ? PROJECTS.length : s.value === "certs" ? CERTS.length : s.value;
    return `<div class="stat"><b data-count="${v}" data-dec="${s.decimals || 0}" data-suffix="${s.suffix || ""}">0</b><span>${s.label}</span></div>`;
  }).join("");

  $("aboutCards").innerHTML = ABOUT_CARDS.map(c =>
    `<div class="card tilt reveal"><i class="${c.icon}"></i><h3>${c.title}</h3><p>${c.text}</p></div>`).join("");
  $("skillsGrid").innerHTML = SKILLS.map(s =>
    `<div class="card tilt reveal left"><i class="${s.icon}"></i><h3>${s.title}</h3>${tags(s.tags)}</div>`).join("");

  const line = e => `<div class="t-item reveal"><div class="t-dot"><i class="${e.icon}"></i></div><div class="card tilt">
    <h3>${e.title}</h3><p class="meta">${e.where}${e.badge ? ` <em>${e.badge}</em>` : ""}</p>${e.text ? `<p>${e.text}</p>` : ""}${tags(e.tags)}</div></div>`;
  $("expList").innerHTML = EXPERIENCE.map(line).join("");
  $("eduList").innerHTML = EDUCATION.map(line).join("");

  $("projGrid").innerHTML = PROJECTS.map(p => {
    const inner = `<i class="${p.icon}"></i><h3>${p.title}</h3><p>${p.text}</p>${tags(p.tags)}${p.link ? view("Open live demo", "fas fa-arrow-up-right-from-square") : ""}`;
    return p.link ? `<a href="${p.link}" target="_blank" class="project tilt reveal">${inner}</a>` : `<div class="project tilt reveal">${inner}</div>`;
  }).join("");

  $("certGrid").innerHTML = CERTS.map(c =>
    `<a href="${c.file}" target="_blank" class="card tilt reveal cert"><i class="${c.icon}"></i><h3>${c.title}</h3><p>Issued by ${c.issuer}</p>${view("View certificate", "fas fa-external-link-alt")}</a>`).join("");

  const d = (ic, h, p) => `<div class="detail"><i class="${ic}"></i><div><h4>${h}</h4><p>${p}</p></div></div>`;
  $("contactList").innerHTML = d("fas fa-envelope", "Email", PROFILE.email) + d("fas fa-phone-alt", "Phone", PROFILE.phone) + d("fas fa-map-marker-alt", "Location", PROFILE.location);
  $("connectBtns").innerHTML =
    `<a href="mailto:${PROFILE.email}" class="btn primary-btn magnetic"><i class="fas fa-paper-plane"></i> Send Email</a>` +
    `<a href="${PROFILE.github}" target="_blank" class="btn secondary-btn magnetic"><i class="fab fa-github"></i> GitHub</a>` +
    `<a href="${PROFILE.linkedin}" target="_blank" class="btn secondary-btn magnetic"><i class="fab fa-linkedin"></i> LinkedIn</a>`;
})();
