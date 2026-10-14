
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});
