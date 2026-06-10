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
