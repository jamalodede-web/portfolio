// =========================
// THEME BUTTON
// =========================

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
}


// =========================
// COLOR BUTTON
// =========================

const colorButton = document.getElementById("colorButton");

if (colorButton) {
    colorButton.addEventListener("click", function () {
        const colors = [
            "#0f766e",
            "#2563eb",
            "#7c3aed",
            "#db2777",
            "#ea580c"
        ];

        const randomColor =
            colors[Math.floor(Math.random() * colors.length)];

        document.querySelectorAll(
            "nav, button, .skill-progress, .progress-fill"
        ).forEach(function (element) {
            element.style.backgroundColor = randomColor;
        });

        document.querySelectorAll(
            "#home h1, section h2, .service-card h3"
        ).forEach(function (element) {
            element.style.color = randomColor;
        });
    });
}


// =========================
// DEVELOPER PROGRESS ANIMATION
// =========================

const progressBars = document.querySelectorAll(".progress-fill");

function animateProgressBars() {
    progressBars.forEach(function (bar) {
        const progress = bar.getAttribute("data-progress");

        if (progress) {
            bar.style.width = progress + "%";
        }
    });
}

window.addEventListener("load", function () {
    animateProgressBars();
});


// =========================
// SKILLS ANIMATION
// =========================

const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {
    skillBars.forEach(function (bar) {
        const skill = bar.getAttribute("data-skill");

        if (skill) {
            bar.style.width = skill + "%";
        }
    });
}

window.addEventListener("load", function () {
    animateSkills();
});


// =========================
// TASK TRACKER
// =========================

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

if (addTaskButton && taskInput && taskList) {

    addTaskButton.addEventListener("click", function () {

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const listItem = document.createElement("li");

        listItem.textContent = taskText;

        listItem.addEventListener("click", function () {
            listItem.style.textDecoration =
                listItem.style.textDecoration === "line-through"
                    ? "none"
                    : "line-through";
        });

        taskList.appendChild(listItem);

        taskInput.value = "";
    });

}


// =========================
// WELCOME MESSAGE
// =========================

const username = "Jamal";

console.log("Welcome, " + username + "!");


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}