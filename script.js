const particlesConfig = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: { value: "#878787" },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#878787",
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
};

// Wait for both DOM and particles.js to load
window.addEventListener('load', () => {
    particlesJS("particles-js", particlesConfig);
});

// Handle dropdown selection and animations
const handleNavigation = () => {
    const dropdown = document.querySelector('.styled-dropdown');
    const dropdownContainer = document.querySelector('.dropdown-container');

    // Function to calculate optimal shift distance
    const calculateShiftDistance = (section) => {
        const baseShift = 10;  // minimum shift
        const padding = 25;     // padding between dropdown and content

        // Different shifts based on section
        switch(section.id) {
            case 'about':
                return -(baseShift + padding);
            case 'projects':
                return -(baseShift + padding);
            case 'contact':
                return -(baseShift + padding);
            default:
                return -200; // default fallback
        }
    };

    dropdown.addEventListener('change', function(e) {
        const selectedSection = document.querySelector(this.value);

        // First display the section but keep it invisible
        selectedSection.style.display = 'block';
        selectedSection.style.opacity = '0';

        // Calculate the shift distance based on the selected section
        const shiftDistance = calculateShiftDistance(selectedSection);

        // Hide all sections except the selected one
        document.querySelectorAll('.section-content').forEach(section => {
            if (section !== selectedSection) {
                section.style.opacity = '0';
                section.style.display = 'none';
            }
        });

        // Add transition class for smooth animation
        dropdownContainer.style.transform = `translateY(${shiftDistance}px)`;

        // Show selected section after the dropdown moves
        setTimeout(() => {
            selectedSection.style.opacity = '1';
        }, 500);
    });
};

// Add resize handler to recalculate positions if window is resized
const handleResize = () => {
    window.addEventListener('resize', () => {
        const currentSection = document.querySelector('.section-content[style*="display: block"]');
        if (currentSection) {
            const dropdownContainer = document.querySelector('.dropdown-container');
            const shiftDistance = calculateShiftDistance(currentSection);
            dropdownContainer.style.transform = `translateY(${shiftDistance}px)`;
        }
    });
};

// Initialize all event listeners
const initializeEventListeners = () => {
    handleNavigation();
    handleResize();
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeEventListeners);


function openProjectDetail(projectId) {
    const projectDetails = {
        "data-analytics": {
            title: "Data Analytics",
            description: "An advanced data analytics project involving predictive modeling.",
            images: ["analytics1.jpg", "analytics2.jpg"]
        },
        "research-paper": {
            title: "Research Paper",
            description: "A comparative study of Canny and Marr-Hildreth edge detection algorithms.",
            images: ["paper1.jpg", "paper2.jpg"]
        },
        "data-viz": {
            title: "Data Visualization and Sonification",
            description: "A project integrating visual and auditory representation of data using D3.js and Tone.js.",
            images: ["viz1.jpg", "viz2.jpg"]
        },
        "personal-website": {
            title: "Personal Website",
            description: "My portfolio website showcasing my work in software engineering.",
            images: ["website1.jpg", "website2.jpg"]
        }
    };

    const project = projectDetails[projectId];
    if (project) {
        let newWindow = window.open("", "_blank", "width=800,height=600");
        newWindow.document.write(`
            <html>
            <head>
                <title>${project.title}</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #111; color: white; }
                    img { max-width: 80%; margin: 10px; border-radius: 8px; }
                    h2 { color: #ffffff; }
                    p { font-size: 1.2em; }
                </style>
            </head>
            <body>
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
            </body>
            </html>
        `);
    }
}
