// CLI functionality for the terminal interface
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
    skills: `
Technical Skills:<br>
<ul>
    <li>Python, JavaScript, HTML, CSS, SQL, R</li>
    <li>Data Tools: Tableau, JIRA</li>
    <li>Design Tools: Figma</li>
    <li>Specialized: Generative AI and Machine Learning</li>
</ul>`,
    work: `
Work Experience:<br>
<ul>
    <li><span class='command' data-command="walmart">Walmart</span>: Senior Product Manager (2023-Present)</li>
    <li><span class='command' data-command="sandbox">Sandbox AQ</span>: Technical Product Manager (2022-2023)</li>
    <li><span class='command' data-command="cuemath">Cuemath</span>: Product Manager, Growth and Monetization (2020-2021)</li>
    <li><span class='command' data-command="centralsquare">Central Square Foundation</span>: Program Manager (Product Ops) (2018-2020)</li>
    <li><span class='command' data-command="teachforindia">Teach for India</span>: High School Teacher (2016-2018)</li>
</ul>`,
    walmart: `
<ul>
    <li>Launched a Generative AI chatbot analyzing $130B in expenses, projected to reduce discretionary spending by 5%.</li>
    <li>Developed an AI-driven forecasting platform managing $10B+ in decisions, improving forecast accuracy by 20%.</li>
    <li>Built a graph traversal tool that reduced lead times for scenario planning by 40%.</li>
</ul>`,
    sandbox: `
<ul>
    <li>Led the GTM launch of an open-source cryptographic library adopted by 500+ developers globally.</li>
    <li>Reduced lead time for product feature requests by 30% through a streamlined process you designed.</li>
    <li>Drove beta testing with 50+ clients, improving release quality and client satisfaction scores.</li>
</ul>`,
    cuemath: `
<ul>
    <li>Executed a Product-Led growth strategy, increasing Net Promoter Score (NPS) by 45% and monthly revenue by 50%.</li>
    <li>Designed gamification features after 30+ user interviews, resulting in a 20% increase in engagement and 25% boost in satisfaction scores.</li>
    <li>Built custom dashboards for the sales team to deliver personalized pitches, increasing monthly subscribers by 50%.</li>
</ul>`,
    centralsquare: `
<ul>
    <li>Scoped and executed a $80M project to deploy EdTech solutions across 5,000 schools, improving learning outcomes by 1.5 grade levels.</li>
    <li>Reduced program delivery costs by $1M by optimizing deployment workflows across 500+ schools.</li>
    <li>Conceptualized and launched IndiaEdTech.org in 14 days, enabling access to free EdTech services for over 1M+ users.</li>
</ul>`,
    teachforindia: `
<ul>
    <li>Improved math scores of 57 students from an average of 12% to 65% in two years, achieving a 96% class pass rate.</li>
    <li>Developed a Python-based tool to send personalized performance updates to parents, increasing attendance by 35% and homework completion by 70%.</li>
    <li>Mentored students on personal challenges, leading to improved classroom engagement and individual growth.</li>
</ul>`,
    education: `
Education:<br>
<ul>
    <li>MBA - University of Chicago Booth School of Business (2023)</li>
    <li>B.Tech - National Institute of Technology, Trichy (2016)</li>
</ul>`,
    contact: `
Contact Info:<br>
<ul>
    <li>Email: dkamath0@chicagobooth.edu</li>

</ul>`,
    clear: "",
    exit: "Refreshing the page..."
};

// DOM Elements
const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");

// CLI Command Handling
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        processCommand(inputField.value.trim().toLowerCase());
    }
});

// Handle Clickable Commands
outputDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("command")) {
        const command = event.target.dataset.command;
        if (commands[command]) {
            processCommand(command);
        }
    }
});

// Process Commands
function processCommand(command) {
    const commandOutput = commands[command] || `Command not found: ${command}`;
    if (command === "clear") {
        outputDiv.innerHTML = "";
    } else if (command === "exit") {
        outputDiv.innerHTML += `
            <div class="line"><span class="command">&gt; ${command}</span></div>
            <div class="line output">${commandOutput}</div>
        `;
        setTimeout(() => location.reload(), 1000);
    } else {
        outputDiv.innerHTML += `
            <div class="line"><span class="command">&gt; ${command}</span></div>
            <div class="line output">${commandOutput}</div>
        `;
    }
    inputField.value = "";
    scrollToBottom();
}

// Scroll to Bottom
function scrollToBottom() {
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
