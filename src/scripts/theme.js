export function initThemeToggle() {
  const html = document.documentElement;
  const ball = document.getElementById('theme-toggle-ball');

  // Initialiser l'état au chargement
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    html.classList.add('dark');
    if (ball) ball.classList.add('translate-x-6');
  }

  // Ajoute l'événement sur le bouton
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (ball) ball.classList.toggle('translate-x-6');
    });
  }
}
