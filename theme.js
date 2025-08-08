document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'theme';

    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode', 'dark');
            toggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode', 'dark');
            toggle.textContent = '🌙';
        }
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    applyTheme(saved === 'dark' ? 'dark' : 'light');

    toggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    });
});
