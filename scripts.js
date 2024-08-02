document.addEventListener('DOMContentLoaded', () => {
    function showSection(id) {
        // Hide all main sections
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected main section
        const selectedSection = document.getElementById(id);
        if (selectedSection) {
            selectedSection.style.display = 'block';

            // Show all nested boxes within the selected section
            const nestedBoxes = selectedSection.querySelectorAll('.floating-box');
            nestedBoxes.forEach(box => {
                box.style.display = 'block';
            });
        }
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
