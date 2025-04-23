// Evidenzia il menu quando si scrolla
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
  
  // Animazione degli elementi quando appaiono
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  
  document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
// Menu mobile toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
  });
// Mostra il bottone solo quando si scrolla in basso
window.onscroll = function () {
  const btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Quando si clicca sul bottone, torna in cima
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
    