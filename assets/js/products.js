// let allProducts = [];

// fetch("/data/products.json")
//   .then(res => res.json())
//   .then(data => {
//     allProducts = data;
//     displayProducts(allProducts);
//   });

// function displayProducts(products) {
//   const grid = document.getElementById("productGrid");
//   grid.innerHTML = "";

//   products.forEach(product => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     card.innerHTML = `
//       <img src="${product.image}" alt="Artificial ${product.name} for home decor">

//       <h3>${product.name}</h3>
//       <p>${product.description}</p>
//       <a href="product-details.html?id=${product.id}" class="btn small">
//   View Details
// </a>

//     `;

//     grid.appendChild(card);
//   });
// }
// function filterProducts(category, btn) {
//   document.querySelectorAll(".filter-buttons button")
//     .forEach(b => b.classList.remove("active"));

//   btn.classList.add("active");

//   if (category === "all") {
//     displayProducts(allProducts);
//   } else {
//     displayProducts(allProducts.filter(p => p.category === category));
//   }
// }



let allProducts = [];
let cardTemplate = "";

fetch("components/product-card.html")
  .then(res => res.text())
  .then(template => {
    cardTemplate = template;

    fetch("data/products.json")
      .then(res => res.json())
      .then(data => {
        allProducts = data;
        displayProducts(allProducts);
      });
  });

function displayProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products.forEach(product => {
    let card = cardTemplate
      .replace(/{{image}}/g, product.image)
      .replace(/{{name}}/g, product.name)
      .replace(/{{description}}/g, product.description)
      .replace(/{{id}}/g, product.id);

    grid.innerHTML += card;
  });
}

function filterProducts(category, btn) {
  document.querySelectorAll(".filter-buttons button")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");

  if (category === "all") {
    displayProducts(allProducts);
  } else {
    displayProducts(allProducts.filter(p => p.category === category));
  }
}
