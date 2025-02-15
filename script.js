const particlesConfig = {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        color: { value: "#878787" },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#878787",
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 3
        }
    }
};

// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
    particlesJS("particles-js", particlesConfig);
});

// Handle dropdown selection and animations
const handleNavigation = () => {
    const dropdown = document.querySelector('.styled-dropdown');
    const dropdownContainer = document.querySelector('.dropdown-container');

    dropdown.addEventListener('change', function(e) {
        const selectedSection = document.querySelector(this.value);

        // Move dropdown up
        dropdownContainer.style.transform = 'translateY(-200px)';

        // Hide all sections
        document.querySelectorAll('.section-content').forEach(section => {
            section.style.opacity = '0';
            section.style.display = 'none';
        });

        // Show selected section after a small delay
        setTimeout(() => {
            selectedSection.style.display = 'block';
            selectedSection.style.opacity = '1';
        }, 500);
    });
};

// Initialize all event listeners
const initializeEventListeners = () => {
    handleNavigation();
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeEventListeners);