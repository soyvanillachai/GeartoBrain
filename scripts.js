function showSection(id) {
    // Hide all sections
    const sections = document.querySelectorAll('.floating-box');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(id);
    selectedSection.style.display = 'block';
}
