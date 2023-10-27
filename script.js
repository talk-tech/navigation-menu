// Change the navigation menu's background and font color when scrolled
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
        navbar.style.color = "#00bcd4";
        navbar.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
        navbar.style.color = "#fff";
        navbar.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    }
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
