(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const themeOptions = document.querySelectorAll('.theme-option');

        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const newTheme = option.dataset.theme;
                
                // Remove active de todas as opções
                themeOptions.forEach(opt => opt.classList.remove('active'));
                
                // Adiciona active na opção clicada
                option.classList.add('active');
                
                // Aplica o tema
                document.body.setAttribute('data-theme', newTheme);
            });
        });
    });
})();
