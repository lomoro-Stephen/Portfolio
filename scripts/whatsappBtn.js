document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.getElementById('whatsappButton');
    const sections = document.querySelectorAll('section'); // Query all sections

    // Function to update button position
    const updateButtonPosition = () => {
        const viewportHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();

            // Check if the section is in the viewport
            if (rect.top <= viewportHeight && rect.bottom >= 0) {
                const progress = Math.min(1, Math.max(0, (viewportHeight - rect.bottom) / rect.height));

                // Update button's top position based on the section's position
                const newTop = rect.top + rect.height * progress;
                whatsappButton.style.top = `${newTop}px`;
            }
        });
    };

    // Update position on scroll and resize
    window.addEventListener('scroll', updateButtonPosition);
    window.addEventListener('resize', updateButtonPosition);

    // Initial position update
    updateButtonPosition();
});