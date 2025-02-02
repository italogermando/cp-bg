
        const themeOptions = document.querySelectorAll('.theme-option');
        const body = document.body;

        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const newTheme = option.dataset.theme;
                
                // Remove active class from all options
                themeOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                option.classList.add('active');
                
                // Set theme
                body.setAttribute('data-theme', newTheme);
            });
        });
