(function() {
    // Set initial theme from localStorage
    document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    
    // Function to load resources in sequence
    function loadResources() {
        // Load CSS first
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/italogermando/cp-bg@main/base.css';
        document.head.appendChild(link);

        // Load HTML and then JS
        fetch('https://cdn.jsdelivr.net/gh/italogermando/cp-bg@main/base.html')
            .then(response => response.text())
            .then(html => {
                // Insert HTML
                document.body.insertAdjacentHTML('afterbegin', html);
                
                // After HTML is loaded, load JS
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/gh/italogermando/cp-bg@main/base.js';
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error loading background theme:', error));
    }

    // Initialize loader
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadResources);
    } else {
        loadResources();
    }
})();
