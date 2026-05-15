/* Marat Gumarov — CV · theme toggle with persistence */
(function () {
    'use strict';

    var STORAGE_KEY = 'cv-theme';
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');

    function render(isDark) {
        if (!toggle) return;
        var icon = toggle.querySelector('i');
        var label = toggle.querySelector('.ghost-label');
        if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (label) label.textContent = isDark ? 'Light' : 'Dark';
    }

    function apply(theme, persist) {
        var isDark = theme === 'dark';
        if (isDark) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        render(isDark);
        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (e) {}
        }
    }

    // sync UI with the theme set by the inline pre-paint script
    render(root.getAttribute('data-theme') === 'dark');

    if (toggle) {
        toggle.addEventListener('click', function () {
            var isDark = root.getAttribute('data-theme') === 'dark';
            apply(isDark ? 'light' : 'dark', true);
        });
    }
})();
