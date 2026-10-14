const languageButton = document.getElementById("language-toggle");

const translations = {
    en: {
        siteTitle: "Dana Marouf",
        button: "العربية",

        aboutTitle: "About Me",
        aboutText: "I am a Software Engineering graduate from Jordan University of Science and Technology. I am interested in software development, web technologies, database management, and problem-solving. I enjoy learning new technologies and applying my knowledge through practical projects.",

        skillsTitle: "My Skills",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "Database Management",
            "Software Testing",
            "Mobile App Development",
            "UI/UX Principles",
            "Git and GitHub",
            "Flutter"
        ],

        projectsTitle: "My Projects",
        projectsText: "Web development projects and a Flutter-based university bus tracking application.",

        hobbiesTitle: "My Hobbies",
        hobbiesText: "Target Shooting, Swimming, and Bowling.",

        contactTitle: "Contact Me",
        contactText: "danamarouf915@gmail.com",

        footerText: "© 2026 Dana Rababah. All rights reserved."
    },

    ar: {
        siteTitle: "دانا ربابعه",
        button: "English",

        aboutTitle: "نبذة عني",
        aboutText: "أنا خريجة هندسة البرمجيات من جامعة العلوم والتكنولوجيا الأردنية. أهتم بتطوير البرمجيات وتقنيات الويب وإدارة قواعد البيانات وحل المشكلات. أستمتع بتعلم التقنيات الجديدة وتطبيق معرفتي من خلال المشاريع العملية.",

        skillsTitle: "مهاراتي",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "إدارة قواعد البيانات",
            "اختبار البرمجيات",
            "تطوير تطبيقات الهاتف",
            "مبادئ واجهة وتجربة المستخدم",
            "Git وGitHub",
            "Flutter"
        ],

        projectsTitle: "مشاريعي",
        projectsText: "مشاريع في تطوير الويب وتطبيق لتتبع الحافلات الجامعية باستخدام Flutter.",

        hobbiesTitle: "هواياتي",
        hobbiesText: "الرماية والسباحة والبولينغ.",

        contactTitle: "تواصل معي",
        contactText: "danamarouf915@gmail.com",

        footerText: "© 2026 دانا ربابعه. جميع الحقوق محفوظة."
    }
};

let currentLanguage = "en";

languageButton.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    const text = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.title = text.siteTitle;

    document.getElementById("site-title").textContent = text.siteTitle;
    languageButton.textContent = text.button;

    document.getElementById("about-title").textContent = text.aboutTitle;
    document.getElementById("about-text").textContent = text.aboutText;

    document.getElementById("skills-title").textContent = text.skillsTitle;

    text.skills.forEach(function (skill, index) {
        document.getElementById(`skill-${index + 1}`).textContent = skill;
    });

    document.getElementById("projects-title").textContent = text.projectsTitle;
    document.getElementById("projects-text").textContent = text.projectsText;

    document.getElementById("hobbies-title").textContent = text.hobbiesTitle;
    document.getElementById("hobbies-text").textContent = text.hobbiesText;

    document.getElementById("contact-title").textContent = text.contactTitle;
    document.getElementById("contact-text").textContent = text.contactText;

    document.getElementById("footer-text").textContent = text.footerText;
});