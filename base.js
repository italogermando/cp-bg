// base.js
(function() {
    // Define o tema inicial imediatamente antes de qualquer coisa
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    document.addEventListener('DOMContentLoaded', () => {
        const themeOptions = document.querySelectorAll('.theme-option');
        
        // Remove active de todas as opções
        themeOptions.forEach(opt => opt.classList.remove('active'));
        
        // Adiciona active na opção correta
        document.querySelector(`[data-theme="${savedTheme}"]`)?.classList.add('active');

        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const newTheme = option.dataset.theme;
                themeOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                document.body.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });
        });
    });
})();
