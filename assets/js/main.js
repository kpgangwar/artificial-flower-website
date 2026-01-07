// function toggleMenu() {
//   const nav = document.getElementById("navMenu");
//   nav.classList.toggle("active");
// }

// // Load Header Component
// fetch("/components/header.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("header").innerHTML = data;
//     setActiveMenu();
//   });

// // Mobile menu toggle
// function toggleMenu() {
//   const nav = document.getElementById("navMenu");
//   nav.classList.toggle("active");
// }

// // Active menu highlight
// function setActiveMenu() {
//   const page = document.body.getAttribute("data-page");
//   const links = document.querySelectorAll(".nav a");

//   links.forEach(link => {
//     if (link.dataset.page === page) {
//       link.classList.add("active");
//     }
//   });
// }

// // Load Footer Component
// fetch("/components/footer.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("footer").innerHTML = data;
//   });




// // Load Header Component
// fetch("/components/header.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("header").innerHTML = data;

//     // ✅ Header load hone ke BAAD menu bind karo
//     const menuBtn = document.getElementById("menuBtn");
//     const navMenu = document.getElementById("navMenu");

//     if (menuBtn && navMenu) {
//       menuBtn.addEventListener("click", () => {
//         navMenu.classList.toggle("active");
//       });
//     }
    

//     setActiveMenu();
//   });

// // Active menu highlight
// function setActiveMenu() {
//   const page = document.body.getAttribute("data-page");
//   const links = document.querySelectorAll(".nav a");

//   links.forEach(link => {
//     if (link.dataset.page === page) {
//       link.classList.add("active");
//     }
//   });
// }

// // Load Footer Component
// fetch("/components/footer.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("footer").innerHTML = data;
//   });




document.addEventListener("DOMContentLoaded", () => {

  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

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
// Load Footer Component
fetch("/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });