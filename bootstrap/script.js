// ===== 1. Dark mode: Bootstrap-ийн data-bs-theme =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    const dark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', dark);
    themeLabel.textContent = dark ? 'Өдөр' : 'Шөнө';
}

applyTheme(root.getAttribute('data-bs-theme')); // <head> дахь скрипт тохируулсан утгыг авна

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme-bs', next); } catch (e) {}
});

// ===== 2. Form validation: Bootstrap-ийн .needs-validation + .was-validated =====
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        success.classList.add('d-none');
        form.querySelector(':invalid').focus();
        return;
    }
    // Зөв бол (энд сервер рүү илгээх код орно)
    form.reset();
    form.classList.remove('was-validated');
    success.classList.remove('d-none');
});
