document.addEventListener("DOMContentLoaded", onContentLoad);

function onContentLoad() {
    let burgerBtn = document.getElementById("hamburger");
    let mobileMenu = document.getElementById("mobile-menu");
    burgerBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}
