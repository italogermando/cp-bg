(function() {
    // Carrega CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/italogermando/cp-bg@main/base.css';
    document.head.appendChild(link);

    // Carrega HTML
    fetch('https://cdn.jsdelivr.net/gh/italogermando/cp-bg@main/base.html')
        .then(r => r.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });

    // Carrega JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/italogermando/cp-bg@main/base.js';
    document.body.appendChild(script);
})();
