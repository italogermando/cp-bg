(function() {
    // Insere o HTML base já com light ativo
    const baseHTML = `
        <div class="background-wrapper"></div>
        <div class="gradient-overlay"></div>
        <div class="theme-toggle-wrapper">
            <div class="theme-option active" data-theme="light">
                <span class="theme-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </span>
                Light
            </div>
            <div class="theme-option" data-theme="dark">
                <span class="theme-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                </span>
                Dark
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', baseHTML);
})();
