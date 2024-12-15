document.querySelector('.mode-toggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('light-mode');
    document.documentElement.classList.toggle('dark-mode');
    
    // Toggle moon/sun icon
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});