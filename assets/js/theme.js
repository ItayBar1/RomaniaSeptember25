// Handle light/dark/system theme selection and persist user preference
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const select = document.getElementById('theme-select');
    const STORAGE_KEY = 'theme';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Apply chosen theme classes based on mode
    function applyTheme(mode) {
        const theme = mode === 'system' ? (prefersDark.matches ? 'dark' : 'light') : mode;
        if (theme === 'dark') {
            body.classList.add('dark-mode', 'dark');
        } else {
            body.classList.remove('dark-mode', 'dark');
        }
        // Sync Leaflet map tiles if map page is open
        if (typeof window.applyMapTheme === 'function') {
            window.applyMapTheme();
        }
    }

    // Initialize theme from localStorage or default to system
    const saved = localStorage.getItem(STORAGE_KEY) || 'system';
    if (select) select.value = saved;
    applyTheme(saved);

    // Change theme on selection and store preference
    select?.addEventListener('change', (e) => {
        const mode = e.target.value;
        localStorage.setItem(STORAGE_KEY, mode);
        applyTheme(mode);
    });

    // React to system preference changes when using system mode
    prefersDark.addEventListener('change', () => {
        const current = localStorage.getItem(STORAGE_KEY) || 'system';
        if (current === 'system') {
            applyTheme('system');
        }
    });
});
