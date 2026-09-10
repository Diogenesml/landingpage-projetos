const toggleButton = document.getElementById('theme-toggle');
const THEME_KEY = 'theme';

const applyTheme = (theme) => {
  document.body.classList.toggle('light', theme === 'light');
  toggleButton?.setAttribute('aria-pressed', String(theme === 'light'));
};

// Usa o tema salvo; se não houver nenhum, respeita a preferência do sistema
const temaSalvo = localStorage.getItem(THEME_KEY);
const prefereClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
applyTheme(temaSalvo ?? (prefereClaro ? 'light' : 'dark'));

toggleButton?.addEventListener('click', () => {
  const novoTema = document.body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(novoTema);
  localStorage.setItem(THEME_KEY, novoTema);
});