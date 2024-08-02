document.addEventListener('DOMContentLoaded', () => {
    function showSection(id) {
        // Hide all sections
        const sections = document.querySelectorAll('.floating-box');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const selectedSection = document.getElementById(id);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }

        // Show all boxes within the selected section
        const skillBoxes = selectedSection.querySelectorAll('.floating-box');
        skillBoxes.forEach(box => {
            box.style.display = 'block';
        });
    }

    function handleHashChange() {
        const hash = window.location.hash.substring(1); // Remove the '#' character
        showSection(hash);
    }

    // Check the initial hash and show the corresponding section
    handleHashChange();

    // Add event listener for hash change
    window.addEventListener('hashchange', handleHashChange);
});
