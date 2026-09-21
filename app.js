(async () => {
  const res = await fetch('data.json');
  const d = await res.json();

  // --- NAV + BRAND ---
  document.getElementById('brand').textContent = d.profile.name;
  document.title = `${d.profile.name} — ${d.profile.title}`;

  // --- HERO ---
  document.getElementById('heroEyebrow').textContent =
    `${d.profile.title} @ ${d.profile.company}`;
  document.getElementById('heroTitle').textContent = d.profile.name;
  document.getElementById('heroBio').textContent = d.profile.bio;

  const actions = document.getElementById('heroActions');
  actions.innerHTML = `
    <a class="btn primary" href="#projects">View projects</a>
    <a class="btn" href="mailto:${d.profile.email}">Email me</a>
  `;

  const socials = document.getElementById('heroSocials');
  socials.innerHTML = d.profile.socials.map(s =>
    `<a class="social-chip" href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`
  ).join('');

  // --- ABOUT ---
  document.getElementById('avatar').src = d.profile.avatar;
  document.getElementById('avatar').alt = d.profile.name;
  document.getElementById('aboutText').innerHTML =
    d.about.paragraphs.map(p => `<p>${p}</p>`).join('');

  // --- SKILLS ---
  document.getElementById('skills').innerHTML = d.skills.map(s => `
    <li>
      <div class="skill-head">
        <span>${s.name}</span>
        <span class="skill-level">${s.level}</span>
      </div>
      <div class="skill-bar"><span style="width:${s.level}%"></span></div>
    </li>
  `).join('');

  // --- EXPERIENCE ---
  document.getElementById('timeline').innerHTML = d.experience.map(e => `
    <div class="tl-item">
      <div class="tl-period">${e.period}</div>
      <div>
        <div class="tl-role">
          ${e.role}
          ${e.companyUrl
            ? `· <a href="${e.companyUrl}" target="_blank" rel="noopener">${e.company}</a>`
            : `· ${e.company}`}
        </div>
        <div class="tl-desc">${e.description}</div>
        <div class="tl-stack">${e.stack.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  // --- PROJECTS ---
  document.getElementById('projects-list').innerHTML = d.projects.map(p => {
    const tag = p.link ? 'a' : 'div';
    const attrs = p.link
      ? `href="${p.link}" target="_blank" rel="noopener"`
      : '';
    return `
      <${tag} class="project" ${attrs}>
        <div class="project-head">
          <span class="project-title">${p.title}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-stack">
          ${p.stack.map(t => `<span>${t}</span>`).join('')}
        </div>
      </${tag}>
    `;
  }).join('');

  // --- CONTACT ---
  document.getElementById('contactHeading').textContent = d.contact.heading;
  document.getElementById('contactText').textContent = d.contact.text;
  const btn = document.getElementById('contactBtn');
  btn.href = `mailto:${d.contact.email}`;
  btn.textContent = `→ ${d.contact.email}`;

  // --- FOOTER ---
  document.getElementById('footerNote').textContent = d.footer.note;
  document.getElementById('footerYear').textContent =
    `© ${new Date().getFullYear()} ${d.profile.name}`;
})();
