const temaConfig = {
  verde: {
    '--green':        '#1B7B3A',
    '--green-light':  '#34A85A',
    '--green-dark':   '#155c2c',
    '--green-glow':   'rgba(27,123,58,0.14)',
    '--blue':         '#1253A4',
    '--blue-light':   '#3B82F6',
    '--bg-light':     '#F4F6F9',
    '--bg-section':   '#EEF2F8',
    '--bg-dark':      '#0C1520',
    '--bg-card':      '#FFFFFF',
    '--text-dark':    '#1A2332',
    '--text-mid':     '#4A5568',
    '--accent-theme': '#1B7B3A',
  },
  azul: {
    '--green':        '#1253A4',
    '--green-light':  '#3B82F6',
    '--green-dark':   '#0D47A1',
    '--green-glow':   'rgba(18,83,164,0.14)',
    '--blue':         '#0D47A1',
    '--blue-light':   '#60A5FA',
    '--bg-light':     '#EEF4FF',
    '--bg-section':   '#E3EDFF',
    '--bg-dark':      '#07102A',
    '--bg-card':      '#FFFFFF',
    '--text-dark':    '#0A1628',
    '--text-mid':     '#334E7A',
    '--accent-theme': '#1253A4',
  },
  escuro: {
    '--green':        '#34A85A',
    '--green-light':  '#5CDD82',
    '--green-dark':   '#1B7B3A',
    '--green-glow':   'rgba(52,168,90,0.18)',
    '--blue':         '#3B82F6',
    '--blue-light':   '#60A5FA',
    '--bg-light':     '#0D1117',
    '--bg-section':   '#161B22',
    '--bg-dark':      '#010409',
    '--bg-card':      '#1C2128',
    '--text-dark':    '#E6EDF3',
    '--text-mid':     '#8B949E',
    '--accent-theme': '#34A85A',
  }
};

function aplicarTema(nome) {
  const root = document.documentElement;
  const vars = temaConfig[nome];
  if (!vars) return;
  Object.entries(vars).forEach(([prop, val]) => root.style.setProperty(prop, val));

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tema === nome);
  });

  localStorage.setItem('so-tema', nome);
}

let slideAtual = 0;
let slideshowTimer = null;

function iniciarSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.slide-dot');
  if (!slides.length) return;

  function mostrarSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i)   => d.classList.toggle('active', i === idx));
    slideAtual = idx;
  }

  function proximo() {
    mostrarSlide((slideAtual + 1) % slides.length);
  }

  function anterior() {
    mostrarSlide((slideAtual - 1 + slides.length) % slides.length);
  }

  function reiniciarTimer() {
    clearInterval(slideshowTimer);
    slideshowTimer = setInterval(proximo, 3000);
  }

  document.getElementById('slide-next')?.addEventListener('click', () => { proximo(); reiniciarTimer(); });
  document.getElementById('slide-prev')?.addEventListener('click', () => { anterior(); reiniciarTimer(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { mostrarSlide(i); reiniciarTimer(); });
  });

  mostrarSlide(0);
  reiniciarTimer();
}

function iniciarFormulario() {
  const form = document.getElementById("contato-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("campo-nome").value;
    const email = document.getElementById("campo-email").value;
    const mensagem = document.getElementById("campo-mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}
