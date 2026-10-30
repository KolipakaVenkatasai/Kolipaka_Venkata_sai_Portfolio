(() => {
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const colors = ['#00e5ff', '#2f6bff', '#7c3aed'];

  /* Mobile menu */
  const burger = $('.burger'), links = $('.nav-links');
  burger.onclick = () => { links.classList.toggle('nav-active'); burger.classList.toggle('toggle'); };
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => { links.classList.remove('nav-active'); burger.classList.remove('toggle'); }));

  /* Typing roles */
  const roles = PROFILE.roles;
  const typed = $('#typed'); let r = 0, c = 0, del = false;
  (function type() {
    const word = roles[r];
    typed.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(type, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
    c += del ? -1 : 1;
    setTimeout(type, del ? 40 : 80);
  })();

  /* Particle network that reacts to the mouse */
  const cv = $('#bg'), ctx = cv.getContext('2d'); let W, H, pts = [];
  const mouse = { x: -999, y: -999 };
  const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight;
    pts = Array.from({ length: Math.min(90, Math.floor(W * H / 16000)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 })); };
  size(); addEventListener('resize', size);
  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  if (!calm) (function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 130) { p.x += dx / d * 1.6; p.y += dy / d * 1.6; }
      ctx.fillStyle = 'rgba(0,229,255,.7)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], l = Math.hypot(p.x - q.x, p.y - q.y);
        if (l < 120) { ctx.strokeStyle = `rgba(47,107,255,${.28 * (1 - l / 120)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
    });
    requestAnimationFrame(draw);
  })();

  /* Cursor glow */
  const glow = $('#glow');
  addEventListener('mousemove', e => glow.style.transform = `translate(${e.clientX}px,${e.clientY}px)`);

  /* Scroll: progress bar, back-to-top, active nav */
  const bar = $('#progress'), top = $('#toTop'), secs = $$('main section[id]'), navA = $$('.nav-links a');
  const onScroll = () => {
    const h = document.documentElement; bar.style.width = (scrollY / (h.scrollHeight - innerHeight) * 100) + '%';
    top.classList.toggle('show', scrollY > 600);
    let cur = secs[0].id; secs.forEach(s => { if (scrollY >= s.offsetTop - 160) cur = s.id; });
    navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

  /* Reveal on scroll (staggered) + count-up numbers */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, sibs = $$('.reveal', el.parentElement);
    setTimeout(() => el.classList.add('in'), sibs.indexOf(el) * 110);
    io.unobserve(el);
  }), { threshold: .15 });
  $$('.reveal').forEach(el => io.observe(el));

  const countIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.count, dec = +el.dataset.dec || 0, suf = el.dataset.suffix || '', t0 = performance.now();
    (function step(t) {
      const k = Math.min((t - t0) / 1400, 1), v = to * (1 - Math.pow(1 - k, 3));
      el.textContent = v.toFixed(dec) + suf; if (k < 1) requestAnimationFrame(step);
    })(t0);
    countIO.unobserve(el);
  }), { threshold: .6 });
  $$('[data-count]').forEach(el => countIO.observe(el));

  /* 3D tilt + spotlight following the cursor */
  if (!calm && matchMedia('(hover:hover)').matches) {
    $$('.tilt').forEach(el => {
      el.addEventListener('mousemove', e => {
        const b = el.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
        el.style.setProperty('--mx', x + 'px'); el.style.setProperty('--my', y + 'px');
        el.style.transform = `perspective(800px) rotateX(${(.5 - y / b.height) * 9}deg) rotateY(${(x / b.width - .5) * 9}deg) translateY(-6px)`;
      });
      el.addEventListener('mouseleave', () => el.style.transform = '');
    });
    /* Magnetic buttons */
    $$('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => { const b = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .18}px,${(e.clientY - b.top - b.height / 2) * .3}px)`; });
      el.addEventListener('mouseleave', () => el.style.transform = '');
    });
  }

  /* Click effects: ripple on buttons, colour burst everywhere */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if (btn) { const b = btn.getBoundingClientRect(), s = Math.max(b.width, b.height), rp = document.createElement('span');
      rp.className = 'ripple'; rp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - b.left - s / 2}px;top:${e.clientY - b.top - s / 2}px`;
      btn.appendChild(rp); setTimeout(() => rp.remove(), 650); }
    if (calm) return;
    for (let i = 0; i < 14; i++) {
      const d = document.createElement('div'), a = Math.random() * 6.28, dist = 40 + Math.random() * 70;
      d.className = 'burst'; d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px'; d.style.background = colors[i % 3];
      document.body.appendChild(d);
      d.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(a) * dist}px,${Math.sin(a) * dist}px) scale(0)`, opacity: 0 }],
        { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => d.remove();
    }
  });
})();
