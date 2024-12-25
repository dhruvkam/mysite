const commands = {
    help: `Available commands:\n
    - about: Learn about me\n
    - skills: List my skills\n
    - work: Show my work experience\n
    - education: View my education\n
    - contact: Get my contact info\n
    - clear: Clear the terminal\n
    - exit: Exit the CLI and return to the main page`,
    about: "I am a Senior Product Manager with expertise in Generative AI and digital growth strategies.",
    skills: `
Technical Skills:\n
- Python, JavaScript, HTML, CSS, SQL, R\n
- Data Tools: Tableau, JIRA\n
- Design Tools: Figma\n
- Specialized: Generative AI and Machine Learning`,
    work: `Work Experience:\n
- Walmart: Senior Product Manager (2023-Present)\n
- Sandbox AQ: Technical Product Manager (2022-2023)\n
- Cuemath: Product Manager, Growth and Monetization (2020-2021)\n
- CentralSquare: Program Manager (2018-2020)\n
- Teach for India: High School Teacher (2016-2018)`,
    education: `Education:\n
- MBA - University of Chicago Booth School of Business (2023)\n
- B.Tech - National Institute of Technology, Trichy (2016)`,
    contact: `Contact Info:\n
- Email: example@domain.com\n
- Phone: 123-456-7890`,
    clear: "",
    exit: "Exiting CLI mode... Redirecting to the main page.",
};

// DOM Elements
const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");

// CLI Command Handling
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const input = inputField.value.trim().toLowerCase();
        const commandOutput = commands[input] || `Command not found: ${input}`;
        if (input === "clear") {
            outputDiv.innerHTML = "";
        } else if (input === "exit") {
            outputDiv.innerHTML += `> ${input}\n${commandOutput}\n`;
            setTimeout(() => alert("Exiting CLI..."), 1000);
        } else {
            outputDiv.innerHTML += `> ${input}\n${commandOutput}\n\n`;
        }
        inputField.value = "";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});
