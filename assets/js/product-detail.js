// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Fetch products data
fetch("/data/products.json")
  .then(res => res.json())
  .then(products => {

    // 1️⃣ Find current product
    const product = products.find(p => p.id === productId);

    // Safety check
    if (!product) {
      document.getElementById("productDetail").innerHTML =
        "<p>Product not found</p>";
      return;
    }

    // 2️⃣ Product images
    const images = product.detailImages || [product.image];
    const productDetailEl = document.getElementById("productDetail");

    // ✅ WhatsApp link (JS LOGIC – OUTSIDE HTML)
    
 


    // 3️⃣ PRODUCT DETAIL HTML
    productDetailEl.innerHTML = `
      <div class="product-wrapper">

        <div class="product-image">
          <img src="${images[0]}" alt="Artificial ${product.name} Flower for Home Decoration" id="mainImage">

          <div class="thumbs">
            ${images.map(img => `
              <img src="${img}"
                   onclick="document.getElementById('mainImage').src='${img}'">
            `).join("")}
          </div>
        </div>

        <div class="product-info">
          <h1>${product.name}</h1>
          <p class="tagline">${product.description}</p>

          <ul class="features">
            <li>🌸 Realistic artificial flower</li>
            <li>🪴 Long lasting & washable</li>
            <li>🏠 Perfect for home & office décor</li>
            <li>🚚 All India delivery available</li>
          </ul>

          <!-- ✅ FINAL WHATSAPP BUTTON -->
          <button class="btn primary"
        onclick="orderOnWhatsApp(
          '${product.name}',
          window.location.href
        )">
        Order on WhatsApp
      </button>
        </div>

      </div>
    `;

    // 4️⃣ RELATED PRODUCTS
    const related = products.filter(
      p => p.category === product.category && p.id !== product.id
    );

    const relatedContainer = document.getElementById("relatedProducts");
    if (!relatedContainer) return;

    relatedContainer.innerHTML = "";

    related.forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <div class="rp-image-box">
          <img src="${item.image}" alt="Artificial ${item.name} Rose Flower for Office Decor">
        </div>

        <h3>${item.name}</h3>

        <a href="product-details.html?id=${item.id}" class="btn small">
          View Details
        </a>
      `;

      relatedContainer.appendChild(card);
    });

  })
  .catch(err => {
    console.error("Error loading product detail:", err);
  });
