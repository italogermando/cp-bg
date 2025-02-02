(function() {
    // Função para aplicar o tema
    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        document.body.dataset.theme = theme;
        
        // Atualiza os botões
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.theme === theme);
        });
    }

    // Aplica o tema inicial imediatamente
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Adiciona os event listeners após o DOM carregar
    document.addEventListener('DOMContentLoaded', () => {
        // Re-aplica o tema para garantir
        applyTheme(savedTheme);

        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const newTheme = option.dataset.theme;
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        });
    });

    // Se o DOM já estiver carregado, aplica imediatamente
    if (document.readyState !== 'loading') {
        applyTheme(savedTheme);
    }
})();
