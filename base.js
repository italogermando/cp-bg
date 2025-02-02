document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.theme-option');

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newTheme = option.dataset.theme;
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            document.body.setAttribute('data-theme', newTheme);
        });
    });
});
