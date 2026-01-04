let allProducts = [];

fetch("/data/products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayProducts(allProducts);
  });

function displayProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt=Artificial"${product.name} 
      lily for office decor">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a href="product-details.html?id=${product.id}" class="btn small">
  View Details
</a>

    `;

    grid.appendChild(card);
  });
}

function filterProducts(category) {
  // button active state
  document.querySelectorAll(".filter-buttons button")
    .forEach(btn => btn.classList.remove("active"));

  event.target.classList.add("active");

  if (category === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter(
      p => p.category === category
    );
    displayProducts(filtered);
  }
}
