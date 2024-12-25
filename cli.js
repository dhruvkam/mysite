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
    about: "I am a Senior Product Manager with expertise in Generative AI and digital growth strategies.",
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
    <li>Launched a Generative AI chatbot analyzing $130B in expenses.</li>
    <li>Developed an AI-driven forecasting platform managing $10B+ in decisions.</li>
</ul>`,
    sandbox: `
<ul>
    <li>Led the GTM launch of a cryptographic platform.</li>
    <li>Reduced lead time to deployment by 50% using streamlined processes.</li>
</ul>`,
    cuemath: `
<ul>
    <li>Executed a Product-Led growth strategy that increased Net Promoter Score (NPS) by 45% and monthly revenue by 50%. Led team of 4 engineers and 2 designers to take platform from MVP to public launch in 4 weeks and reach 100,000+ users.</li>
    <li>Led the growth funnel, including acquisition and engagement by delivering an AI-driven experimentation tool to enable the sales team to deliver a personalized pitch to each customer. Increased monthly subscribers by 50% and revenue by 35%.</li>
    <li>Designed and executed A/B experiments and 30+ user interviews to improve gamification system resulting in 20% increase in module completion rate and 25% increase in Customer Satisfaction (CSAT).</li>
    <li>Identified and solved 12 major technical debts in 5 weeks leading to 85% reduction in monthly customer complaints. Redesigned customer feedback process to provide live feedback to product owners, decreasing Time-To-Resolution (TTR) by 25%.</li>
</ul>`,
    centralsquare: `
<ul>
    <li>Scoped, planned and executed $80M project to deploy EdTech software and hardware across 5,000 schools. Informed rollout through Human Centered Design study with 300 students resulting in average 1.5 grade level improvement in learning outcomes.</li>
    <li>Executed randomized control A/B experiments across 500+ schools to optimize program delivery. Reduced program delivery cost by $1M and mean time-to-deployment by 10 days (or 33% of initial deployment time).</li>
    <li>Launched the website IndiaEdTech.org from concept to roll-out in 14 days leading a team of 2 developers and 1 designer. Website enabled 4 Indian state governments and 1M+ users to access free EdTech services for school students.</li>
</ul>`,
    teachforindia: `
<ul>
    <li>Increased average math score of 57 high-school students from 12% to 65% in two years and achieved a 96% class pass rate.</li>
    <li>Developed a python-based tool to automatically send text messages to parents communicating their child's performance on homework and exams, leading to 35% increase in student attendance and 70% increase in homework completion rates.</li>
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
    <li>Email: example@domain.com</li>
    <li>Phone: 123-456-7890</li>
</ul>`,
    clear: "",
    exit: "Refreshing the page..."
};

// DOM Elements
const cliContainer = document.getElementById("cli-mode");
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
    cliContainer.scrollTop = cliContainer.scrollHeight;
}
