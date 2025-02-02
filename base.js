// base.js
(function() {
    // Função para aplicar o tema
    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        const allOptions = document.querySelectorAll('.theme-option');
        allOptions.forEach(opt => opt.classList.remove('active'));
        const activeOption = document.querySelector(`[data-theme="${theme}"]`);
        if (activeOption) activeOption.classList.add('active');
    }

    // Aplica o tema imediatamente
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Configura os listeners após o DOM carregar
    document.addEventListener('DOMContentLoaded', () => {
        // Garante que o tema está aplicado mesmo após o DOM carregar
        applyTheme(savedTheme);

        // Adiciona os event listeners
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const newTheme = option.dataset.theme;
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        });
    });

    // Garante que o tema está aplicado mesmo se o script carregar depois do DOM
    if (document.readyState === 'complete') {
        applyTheme(savedTheme);
    }
})();
