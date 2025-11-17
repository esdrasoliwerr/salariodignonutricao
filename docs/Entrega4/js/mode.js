
// Toggle de modo claro, escuro e alto contraste com acessibilidade
function setMode(mode) {
  document.body.classList.remove('dark-mode', 'high-contrast', 'light-mode');

  if (mode === 'dark') document.body.classList.add('dark-mode');
  if (mode === 'contrast') document.body.classList.add('high-contrast');
  if (mode === 'light') document.body.classList.add('light-mode');

  // Atualiza estado aria-pressed nos botões
  const buttons = document.querySelectorAll('.theme-btn');
  buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));

  const activeBtn = document.querySelector('.theme-btn.' + mode);
  if (activeBtn) {
    activeBtn.setAttribute('aria-pressed', 'true');
  }
}
