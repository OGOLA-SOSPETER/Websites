const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll("div");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        pages.forEach(page => {
            if (page.getAttribute("id") === id) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
    });
});