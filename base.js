// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all theme toggle options
    const themeOptions = document.querySelectorAll('.theme-option');
    const body = document.body;

    // Get saved theme from localStorage or set default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    body.setAttribute('data-theme', savedTheme);
    
    // Remove active class from all options
    themeOptions.forEach(opt => opt.classList.remove('active'));
    
    // Add active class to saved theme option
    document.querySelector(`[data-theme="${savedTheme}"]`).classList.add('active');

    // Add click event listeners to theme options
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Get new theme
            const newTheme = option.dataset.theme;
            
            // Remove active class from all options
            themeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Set new theme
            body.setAttribute('data-theme', newTheme);
            
            // Save theme to localStorage
            localStorage.setItem('theme', newTheme);
        });
    });
});
