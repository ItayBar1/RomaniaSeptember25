// Handle light/dark theme switching and persist user preference
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'theme';

    // Apply chosen theme classes and update toggle icon
    function applyTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode', 'dark');
            toggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode', 'dark');
            toggle.textContent = '🌙';
        }
        // Sync Leaflet map tiles if map page is open
        if (typeof window.applyMapTheme === 'function') {
            window.applyMapTheme();
        }
    }

    // Initialize theme from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    applyTheme(saved === 'dark' ? 'dark' : 'light');

    // Toggle theme on button click and store preference
    toggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    });
});