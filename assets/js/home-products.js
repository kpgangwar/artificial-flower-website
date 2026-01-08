fetch("/data/products.json")
  .then(res => res.json())
  .then(products => {

    // Top 5 products for home page
    const popularProducts = products.slice(0, 5);

    const grid = document.getElementById("homeProductGrid");
    if (!grid) return;

    grid.innerHTML = "";

    popularProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name} Artificial Flower">
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <a href="product-details.html?id=${product.id}" class="btn small">
          View Details
        </a>
      `;

      grid.appendChild(card);
    });

  })
  .catch(err => {
    console.error("Home products load error:", err);
  });
