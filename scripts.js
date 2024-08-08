// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Toggle Dark Mode';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            toggleButton.textContent = 'Toggle Dark Mode';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            toggleButton.textContent = 'Toggle Light Mode';
        }
    });
});
