function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Load Header Component
fetch("/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    setActiveMenu();
  });

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Active menu highlight
function setActiveMenu() {
  const page = document.body.getAttribute("data-page");
  const links = document.querySelectorAll(".nav a");

  links.forEach(link => {
    if (link.dataset.page === page) {
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
