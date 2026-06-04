/* ---------------- MOBILE MENU ---------------- */

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* ---------------- SCROLL ANIMATIONS ---------------- */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const trigger = window.innerHeight * 0.85;

        if (element.getBoundingClientRect().top < trigger) {
            element.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ---------------- NAVBAR SCROLL EFFECT ---------------- */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background = "rgba(78,58,45,0.9)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.backdropFilter = "blur(8px)";
        navbar.style.boxShadow = "none";

    }

});

/* ---------------- INTERACTIVE MENU ---------------- */

const options = document.querySelectorAll(".option");

const productImage = document.getElementById("productImage");
const productTitle = document.getElementById("productTitle");
const productDesc = document.getElementById("productDesc");
const productPrice = document.getElementById("productPrice");

options.forEach(option => {

    option.addEventListener("click", () => {

        options.forEach(btn => {
            btn.classList.remove("active");
        });

        option.classList.add("active");

        productImage.style.opacity = 0;
        productTitle.style.opacity = 0;
        productDesc.style.opacity = 0;
        productPrice.style.opacity = 0;

        setTimeout(() => {

            productImage.src = option.dataset.image;

            productTitle.textContent =
                option.dataset.title;

            productDesc.textContent =
                option.dataset.desc;

            productPrice.textContent =
                option.dataset.price;

            productImage.style.opacity = 1;
            productTitle.style.opacity = 1;
            productDesc.style.opacity = 1;
            productPrice.style.opacity = 1;

        }, 250);

    });

});

/* ---------------- GALLERY LIGHTBOX ---------------- */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img =
        document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* ---------------- SMOOTH SCROLL ---------------- */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

        navLinks.classList.remove("show");

    });

});