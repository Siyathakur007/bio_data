// ===============================
// Typing Animation
// ===============================

const words = [
    "Technical Recruiter",
    "IT Recruiter",
    "MCA Graduate",
    "Talent Acquisition",
    "Web Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : speed);
}

typeEffect();


// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

let dark = true;

themeBtn.addEventListener("click", () => {

    dark = !dark;

    if (dark) {

        document.body.style.background =
            "linear-gradient(135deg,#0f172a,#1e293b,#2563eb)";

        document.body.style.color = "white";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    } else {

        document.body.style.background =
            "#f4f7fb";

        document.body.style.color =
            "#222";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});


// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px #38bdf8";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Animate Skill Bars
// ===============================

const bars = document.querySelectorAll(".bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.classList.contains("html") ? "95%" :
                entry.target.classList.contains("css") ? "90%" :
                entry.target.classList.contains("js") ? "88%" :
                "85%";

            entry.target.style.width = width;

        }

    });

}, {
    threshold: 0.5
});

bars.forEach(bar => {

    bar.style.width = "0";

    bar.style.transition = "2s";

    skillObserver.observe(bar);

});


// ===============================
// Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".card, .train-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// Console Welcome
// ===============================

console.log("Welcome to Siya Thakur Portfolio 🚀");