

document.addEventListener("DOMContentLoaded", () => {

  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      setActiveMenu();
      const menuBtn = document.getElementById("menuBtn");
      const navMenu = document.getElementById("navMenu");

      if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
          navMenu.classList.toggle("active");
          console.log("Menu toggled"); // test
        });
      }
    });

});

function setActiveMenu() {
  const currentPage = document.body.getAttribute("data-page");
  const menuLinks = document.querySelectorAll(".nav a");

  menuLinks.forEach(link => {
    // pehle sabse active hatao
    link.classList.remove("active");

    // jo page match kare, usko active karo
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
}


// Load Footer Component
fetch("/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

  console.log("MAIN JS LOADED - HOME PAGE");
