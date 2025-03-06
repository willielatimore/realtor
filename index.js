document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Back to top button functionality
    let backToTopBtn = document.createElement("button");
    backToTopBtn.innerText = "↑";
    backToTopBtn.id = "backToTop";
    document.body.appendChild(backToTopBtn);

    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.backgroundColor = "#333";
    backToTopBtn.style.color = "#fff";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "50%";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.fontSize = "20px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";
    backToTopBtn.style.transition = "opacity 0.3s ease-in-out";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
            backToTopBtn.style.opacity = "1";
        } else {
            backToTopBtn.style.opacity = "0";
            setTimeout(() => {
                if (window.scrollY < 300) {
                    backToTopBtn.style.display = "none";
                }
            }, 300);
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function (e) {
        let inputs = this.querySelectorAll("input, textarea");
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
        });
        if (!isValid) e.preventDefault();
    });
});
