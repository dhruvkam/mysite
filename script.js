// Command Definitions
const commands = {
    help: `
    Available commands:<br>
    <ul>
        <li><span class='command' data-command="about">about</span>: Learn about me</li>
        <li><span class='command' data-command="skills">skills</span>: List my skills</li>
        <li><span class='command' data-command="work">work</span>: Show my work experience</li>
        <li><span class='command' data-command="education">education</span>: View my education</li>
        <li><span class='command' data-command="contact">contact</span>: Get my contact info</li>
        <li><span class='command' data-command="clear">clear</span>: Clear the terminal</li>
        <li><span class='command' data-command="exit">exit</span>: Refresh the page</li>
    </ul>`,
    about: "I am a Senior Product Manager passionate about solving complex problems with first principles and collaborating with diverse teams.",
    skills: "Skills: Python, JavaScript, CSS, HTML, SQL, R, Generative AI, Machine Learning, Data Analysis.",
    work: "Work Experience: Click a specific company to learn more.",
    education: "Education: MBA - University of Chicago Booth School of Business; B.Tech - NIT Trichy.",
    contact: "Contact Info: Email - example@domain.com, Phone - 123-456-7890.",
    clear: "",
    exit: "Refreshing the page...",
};

// DOM Elements
const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");

// Handle Typing and Clickable Commands
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command = inputField.value.trim().toLowerCase();
        processCommand(command);
        inputField.value = ""; // Clear input
    }
});

outputDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("command")) {
        const command = event.target.dataset.command;
        processCommand(command);
    }
});

// Process Command Function
function processCommand(command) {
    const commandOutput = commands[command] || `Command not found: ${command}`;
    if (command === "clear") {
        outputDiv.innerHTML = ""; // Clear the terminal
    } else if (command === "exit") {
        outputDiv.innerHTML += `
            <div class="line">&gt; ${command}</div>
            <div class="line">${commandOutput}</div>`;
        setTimeout(() => location.reload(), 1000); // Refresh page
    } else {
        outputDiv.innerHTML += `
            <div class="line">&gt; ${command}</div>
            <div class="line">${commandOutput}</div>`;
    }
    outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll to bottom
}
