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

function openModal(projectId) {
    const projectDetails = {
        "data-analytics": {
            title: "Data Analytics",
            description: "• Utilized Python for data preprocessing, sentiment analysis, and report generation.\n" +
                "• Applied natural language processing (NLP) techniques to analyse email text and\n" +
                "extract sentiment and behavioural insights.\n" +
                "• Generated visual summaries and  insights regarding employee\n" +
                "communication patterns.\n" +
                "• Demonstrated the ability to utilise large datasets and perform meaningful analysis\n" +
                "to support decision-making.",
            images: ["analytics1.jpg", "analytics2.jpg"],
            technologies: ["Python", "Pandas", "NumPy", "NLP", "SQL"],
            features: ["Data cleaning", "Visualisation", "Data insights"]
        },
        "research-paper": {
            title: "Research Paper",
            description: "• Created a custom dataset of 125 images, adjusting contrast and noise levels to test the robustness of both algorithms.\n" +
                "• Evaluated the algorithms using 3 key metrics: Mean Squared Error (MSE), Structural Similarity Index (SSIM), and Peak Signal-to-Noise Ratio (PSNR).\n" +
                "• Assessed the accuracy, computational efficiency, and resilience of each algorithm under varying conditions.\n" +
                "• Highlighted strengths and weaknesses of each algorithm in real-world image processing applications",
            images: ["paper1.jpg", "paper2.jpg"],
            technologies: ["Python", "OpenCV", "Excel"],
            features: ["Edge detection", "Performance evaluation", "Algorithm comparison"]
        },
        "data-viz": {
            title: "Data Visualization and Sonification (Team Development)",
            description: "I'm contributing to our team project by focusing on NASA’s meteor landing dataset." +
                " My work involves crafting interactive visualizations and sonification components that highlight the data's impact events." +
                " Meanwhile, my teammates are integrating their respective modules so that, together, we create a comprehensive sonic and visual dashboard. " +
                "This platform will empower users to build and customize their own models, offering a unique, multi-sensory data exploration experience.",
            images: ["viz1.jpg", "viz2.jpg"],
            technologies: ["Plotly", "Dash", "Python", "javascript", "D3.js"],
            features: ["Interactive charts", "Real-time sonification", "Responsive design"]
        },
        "personal-website": {
            title: "Personal Website",
            description: "My portfolio website showcasing my work in software engineering.",
            images: ["website1.jpg", "website2.jpg"],
            technologies: ["HTML", "CSS", "JavaScript"],
            features: ["Responsive layout", "Animated effects", "Interactive elements"]
        }
    };

    const project = projectDetails[projectId];
    if (project) {
        document.getElementById('modal-title').innerText = project.title;

        const imagesContainer = document.getElementById('modal-images');
        imagesContainer.innerHTML = project.images.map(img =>
            `<img src="${img}" alt="${project.title}" class="modal-image">`
        ).join('');

        document.getElementById('modal-description').innerText = project.description;

        const techContainer = document.getElementById('modal-technologies');
        techContainer.innerHTML = project.technologies.map(tech =>
            `<span class="tech-bubble">${tech}</span>`
        ).join(' ');

        const featuresContainer = document.getElementById('modal-key-features');
        featuresContainer.innerHTML = project.features.map(feature =>
            `<li>${feature}</li>`
        ).join('');

        document.getElementById('modal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            console.log("Clicked project id:", projectId);
            openModal(projectId);
        });
    });

    document.querySelector('.close-button').addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });
});