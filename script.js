// ===============================
// MENU MOBILE
// ===============================

function toggleMenu() {

    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("active");

}


// ===============================
// MENU TUTUP SETELAH DIKLIK
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-menu")
            .classList.remove("active");

    });

});


// ===============================
// ANIMASI SCROLL
// ===============================

const cards = document.querySelectorAll(
    ".about-card, .education-card, .skill-card, .contact-card"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});


// ===============================
// TAHUN FOOTER
// ===============================

console.log(
    "Portfolio Amel - XII RPL 2"
);