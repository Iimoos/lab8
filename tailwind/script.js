// ===== 1. Hamburger цэс =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('hidden') === false;
    menuToggle.setAttribute('aria-expanded', open);
});

// ===== 2. Dark mode: <html data-theme="dark"> (@custom-variant dark-тай холбогдоно) =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const dark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', dark);
    themeLabel.textContent = dark ? 'Өдөр' : 'Шөнө';
}

applyTheme(root.getAttribute('data-theme')); // <head> дахь скрипт тохируулсан утгыг авна

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme-tw', next); } catch (e) {}
});

// ===== 3. Form validation: data-validated атрибут + Tailwind-ийн invalid:/peer-invalid: =====
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
        form.setAttribute('data-validated', '');
        success.classList.add('hidden');
        form.querySelector(':invalid').focus();
        return;
    }
    // Зөв бол (энд сервер рүү илгээх код орно)
    form.reset();
    form.removeAttribute('data-validated');
    success.classList.remove('hidden');
});
