// init.js
(function() {
    // Insert CSS
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary-light: #6366f1;
            --primary-dark: #4f46e5;
            --bg-light: #f8fafc;
            --bg-dark: #0f172a;
            --text-light: #334155;
            --text-dark: #e2e8f0;
        }

        [data-theme="dark"] {
            --bg-main: var(--bg-dark);
            --text-main: var(--text-dark);
            --primary: var(--primary-light);
            --grid-color: rgba(226, 232, 240, 0.07);
            --gradient-start: var(--bg-dark);
            --gradient-end: rgba(99, 102, 241, 0.08);
            --toggle-bg: #1e293b;
            --toggle-border: rgba(226, 232, 240, 0.1);
            --toggle-pill: #0f172a;
            --toggle-text: #94a3b8;
            --toggle-active: #e2e8f0;
        }

        [data-theme="light"] {
            --bg-main: var(--bg-light);
            --text-main: var(--text-light);
            --primary: var(--primary-dark);
            --grid-color: rgba(51, 65, 85, 0.06);
            --gradient-start: var(--bg-light);
            --gradient-end: rgba(99, 102, 241, 0.05);
            --toggle-bg: #ffffff;
            --toggle-border: rgba(51, 65, 85, 0.1);
            --toggle-pill: #f1f5f9;
            --toggle-text: #64748b;
            --toggle-active: #334155;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            background: var(--bg-main);
            color: var(--text-main);
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .background-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(var(--grid-color) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
            background-size: 64px 64px;
            z-index: 0;
        }

        .gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, 
                var(--gradient-start) 0%,
                var(--gradient-end) 100%
            );
            z-index: 1;
        }

        .theme-toggle-wrapper {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 6px;
            background: var(--toggle-bg);
            border: 1px solid var(--toggle-border);
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
        }

        .theme-option {
            position: relative;
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            color: var(--toggle-text);
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            user-select: none;
        }

        .theme-option.active {
            color: var(--toggle-active);
            background: var(--toggle-pill);
        }

        .theme-option:not(.active):hover {
            color: var(--toggle-active);
            background: var(--toggle-pill);
            opacity: 0.7;
        }

        .theme-icon {
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }

        .theme-icon svg {
            width: 16px;
            height: 16px;
            stroke: currentColor;
        }

        .content {
            position: relative;
            z-index: 2;
        }
    `;
    document.head.appendChild(style);

    // Insert HTML
    const baseHTML = `
        <div class="background-wrapper"></div>
        <div class="gradient-overlay"></div>

        <div class="theme-toggle-wrapper">
            <div class="theme-option active" data-theme="light">
                <span class="theme-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
                Light
            </div>
            <div class="theme-option" data-theme="dark">
                <span class="theme-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </span>
                Dark
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', baseHTML);

    // Theme Toggle Logic
    document.addEventListener('DOMContentLoaded', () => {
        if (!document.body.hasAttribute('data-theme')) {
            document.body.setAttribute('data-theme', 'light');
        }
        
        const themeOptions = document.querySelectorAll('.theme-option');
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        document.body.setAttribute('data-theme', savedTheme);
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
