// Handle navigation between sections
const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".content-section");

// Add click event listener for navigation links
links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const sectionId = link.dataset.section;

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Show the selected section
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add("active");
    });
});

// Default Section
document.getElementById("about").classList.add("active");
