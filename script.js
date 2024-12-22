// CLI functionality and scrolling interaction
const commands = {
    help: `Available commands:<br>
    - <span class='command'>about</span>: Learn about me<br>
    - <span class='command'>skills</span>: List my skills<br>
    - <span class='command'>work</span>: Show my work experience<br>
    - <span class='command'>education</span>: View my education<br>
    - <span class='command'>contact</span>: Get my contact info<br>
    - <span class='command'>clear</span>: Clear the terminal<br>
    - <span class='command'>exit</span>: Exit the CLI and return to the main page`,
    about: "I am a Senior Product Manager with expertise in Generative AI and digital growth strategies.",
    clear: "",
    exit: "Exiting CLI mode... Redirecting to the main page.",
};

// Scroll-triggered animations
document.addEventListener("scroll", () => {
    const panels = document.querySelectorAll(".panel");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    panels.forEach((panel) => {
        const panelTop = panel.offsetTop;
        const panelHeight = panel.offsetHeight;

        if (scrollPosition + windowHeight / 2 > panelTop && scrollPosition < panelTop + panelHeight) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
});

// CLI functionality
const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");
const cliMode = document.getElementById("cli-mode");
const cliModeBtn = document.getElementById("cli-mode-btn");

cliModeBtn.addEventListener("click", () => {
    cliMode.style.display = "block";
});

inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const input = inputField.value.trim();
        const commandOutput = commands[input] || `Command not found: ${input}`;
        if (input === "clear") {
            outputDiv.innerHTML = "";
        } else if (input === "exit") {
            outputDiv.innerHTML += `
                <div class="line"><span class="command">&gt; ${input}</span></div>
                <div class="line output">${commandOutput}</div>
            `;
            setTimeout(() => {
                cliMode.style.display = "none";
            }, 1000);
        } else {
            outputDiv.innerHTML += `
                <div class="line"><span class="command">&gt; ${input}</span></div>
                <div class="line output">${commandOutput}</div>
            `;
        }
        inputField.value = "";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});
