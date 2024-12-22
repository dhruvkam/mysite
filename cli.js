// CLI functionality with scrolling animations for main page
// This file manages the Command Line Interface (CLI) mode and adds interactivity to the webpage.
// It includes commands for viewing information about the user, navigating work experiences, and exiting the CLI mode.

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
    skills: `
Technical Skills:<br>
- Python, JavaScript, HTML, CSS, SQL, R<br>
- Data Tools: Tableau, JIRA<br>
- Design Tools: Figma<br>
- Specialized: Generative AI and Machine Learning
    `,
    work: `Work Experience:<br>
- <span class='command'>walmart</span>: Senior Product Manager (2023-Present)<br>
- <span class='command'>sandbox</span>: Technical Product Manager (2022-2023)<br>
- <span class='command'>cuemath</span>: Product Manager, Growth and Monetization (2020-2021)<br>
- <span class='command'>centralsquare</span>: Program Manager, Product Ops (2018-2020)<br>
- <span class='command'>teachforindia</span>: High School Teacher (2016-2018)`
    ,
    walmart: `Walmart Achievements:<br>
- Launched a Generative AI chatbot analyzing $130B in expenses.<br>
- Developed an AI-driven forecasting platform managing $10B+ in decisions.<br>
Skills: AI, Data Analysis, Generative AI, Leadership`,
    sandbox: `Sandbox AQ Achievements:<br>
- Led the GTM launch of a cryptographic platform.<br>
- Reduced lead time to deployment by 50% using streamlined processes.<br>
Skills: Cryptography, GTM, Customer Feedback, Agile Development`,
    cuemath: `Cuemath Achievements:<br>
- Executed a Product-Led growth strategy that increased Net Promoter Score (NPS) by 45% and monthly revenue by 50%. Led team of 4 engineers and 2 designers to take platform from MVP to public launch in 4 weeks and reach 100,000+ users.<br>
- Led the growth funnel, including acquisition and engagement by delivering an AI driven experimentation tool to enable the sales team to deliver a personalized pitch to each customer. Increased monthly subscribers by 50% and revenue by 35%.<br>
- Designed and executed A/B experiments and 30+ user interviews to improve gamification system resulting in 20% increase in module completion rate and 25% increase in Customer Satisfaction (CSAT).<br>
- Identified and solved 12 major technical debts in 5 weeks leading to 85% reduction in monthly customer complaints. Redesigned customer feedback process to provide live feedback to product owners, decreasing Time-To-Resolution (TTR) by 25%.<br>
Skills: Product-Led Growth, User Experience, AI Experimentation`,
    centralsquare: `Central Square Foundation Achievements:<br>
- Scoped, planned and executed $80M project to deploy EdTech software and hardware across 5,000 schools. Informed rollout through Human Centered Design study with 300 students resulting in average 1.5 grade level improvement in learning outcomes.<br>
- Executed randomized control A/B experiments across 500+ schools to optimize program delivery. Reduced program delivery cost by $1M and mean time-to-deployment by 10 days (or 33% of initial deployment time).<br>
- Launched the website IndiaEdTech.org from concept to roll-out in 14 days leading a team of 2 developers and 1 designer. Website enabled 4 Indian state governments and 1M+ users to access free EdTech services for school students.<br>
Skills: Program Management, EdTech Deployment, Human Centered Design`,
    teachforindia: `Teach for India Achievements:<br>
- Increased average math score of 57 high-school students from 12% to 65% in two years and achieved a 96% class pass rate.<br>
- Developed a python-based tool to automatically send text messages to parents communicating their child's performance on homework and exams, leading to 35% increase in student attendance and 70% increase in homework completion rates.<br>
Skills: Teaching, EdTech Tools, Data-Driven Improvement`,
    education: `Education:<br>
- MBA - University of Chicago Booth School of Business (2023)<br>
- B.Tech - National Institute of Technology, Trichy (2016)`,
    contact: `Contact Info:<br>
- Email: <a href='mailto:dkamath0@chicagobooth.edu' class='command'>dkamath0@chicagobooth.edu</a><br>
- Phone: (312) 479-4467`,
    clear: "",
    exit: "Exiting CLI mode... Redirecting to the main page."
};

// DOM Elements
const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");
const cliMode = document.getElementById("cli-mode");
const cliModeBtn = document.getElementById("cli-mode-btn");

// CLI Toggle Button
// Opens or closes the CLI mode when the button is clicked.
cliModeBtn.addEventListener("click", () => {
    cliMode.style.display = cliMode.style.display === "block" ? "none" : "block";
});

// CLI Command Handling
// Processes user commands entered in the input field.
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const input = inputField.value.trim();
        const commandOutput = commands[input] || `Command not found: ${input}`;
        if (input === "clear") {
            outputDiv.innerHTML = "";
        } else if (input === "exit") {
            // Exits CLI mode
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

// Scroll-triggered animations for large text effects
// Animates sections dynamically as they appear on the screen.
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
