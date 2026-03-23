const PRODUCTS = [
  {
    id: "1",
    name: "Solstice Layered Necklace",
    category: "Jewelry",
    price: 128,
    compareAt: 156,
    tag: "bestseller",
    color: "Gold",
    sizes: ["16 in", "18 in"],
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    description: "A polished layered necklace set designed to bring a refined statement to everyday and evening looks.",
    rating: 4.9
  },
  {
    id: "2",
    name: "Pearl Bloom Drop Earrings",
    category: "Jewelry",
    price: 92,
    compareAt: 114,
    tag: "new",
    color: "Ivory",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    description: "Soft pearl-inspired drops with a clean sculptural profile for weddings, dinners, and polished daywear.",
    rating: 4.8
  },
  {
    id: "3",
    name: "Meridian Cuff Bracelet",
    category: "Jewelry",
    price: 110,
    compareAt: 138,
    tag: "trending",
    color: "Silver",
    sizes: ["Adjustable"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    description: "An open cuff silhouette with modern shine, balanced weight, and easy stackability.",
    rating: 4.7
  },
  {
    id: "4",
    name: "Hudson Leather Tote",
    category: "Bags",
    price: 184,
    compareAt: 228,
    tag: "bestseller",
    color: "Chestnut",
    sizes: ["Medium", "Large"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "A structured carryall with a rich leather finish, generous interior, and understated luxury appeal.",
    rating: 4.9
  },
  {
    id: "5",
    name: "Riviera Oversized Sunglasses",
    category: "Sunglasses",
    price: 88,
    compareAt: 108,
    tag: "new",
    color: "Tortoise",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    description: "Bold oversized frames built for vacation edits, city weekends, and easy year-round styling.",
    rating: 4.8
  },
  {
    id: "6",
    name: "Nocturne Chain Watch",
    category: "Watches",
    price: 146,
    compareAt: 178,
    tag: "trending",
    color: "Black",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    description: "A minimalist watch with glossy face, chain-link bracelet, and versatile all-day finish.",
    rating: 4.7
  },
  {
    id: "7",
    name: "Lexington Card Holder",
    category: "Small Leather Goods",
    price: 64,
    compareAt: 82,
    tag: "new",
    color: "Emerald",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    description: "Compact card storage with contrast stitching and a luxury finish for handbags and travel.",
    rating: 4.6
  },
  {
    id: "8",
    name: "Silk Avenue Scarf",
    category: "Scarves",
    price: 72,
    compareAt: 90,
    tag: "trending",
    color: "Ivory",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    description: "A soft printed scarf that styles effortlessly on the neck, bag handle, or hair.",
    rating: 4.8
  },
  {
    id: "9",
    name: "Aurora Tennis Bracelet",
    category: "Jewelry",
    price: 118,
    compareAt: 144,
    tag: "bestseller",
    color: "Silver",
    sizes: ["Adjustable"],
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    description: "A light-catching bracelet with a clean tennis silhouette made for gifting and event dressing.",
    rating: 4.9
  },
  {
    id: "10",
    name: "Chelsea Mini Crossbody",
    category: "Bags",
    price: 156,
    compareAt: 188,
    tag: "new",
    color: "Black",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    description: "A compact crossbody with structured lines, polished hardware, and day-to-night versatility.",
    rating: 4.8
  },
  {
    id: "11",
    name: "Harbor Square Sunglasses",
    category: "Sunglasses",
    price: 94,
    compareAt: 116,
    tag: "trending",
    color: "Black",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80",
    description: "Sharp square frames with a bold profile that works across resort, city, and weekend looks.",
    rating: 4.7
  },
  {
    id: "12",
    name: "Regent Mesh Watch",
    category: "Watches",
    price: 134,
    compareAt: 162,
    tag: "new",
    color: "Gold",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=80",
    description: "A slim mesh-strap watch with minimal face design and an elegant warm-metal finish.",
    rating: 4.8
  },
  {
    id: "13",
    name: "Madison Passport Wallet",
    category: "Small Leather Goods",
    price: 78,
    compareAt: 96,
    tag: "trending",
    color: "Chestnut",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=80",
    description: "A travel-ready wallet with card slots, passport storage, and a refined leather exterior.",
    rating: 4.7
  },
  {
    id: "14",
    name: "Monroe Satin Headband",
    category: "Scarves",
    price: 42,
    compareAt: 54,
    tag: "new",
    color: "Ivory",
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=900&q=80",
    description: "A softly padded satin headband that brings a polished finish to daywear and occasion looks.",
    rating: 4.6
  }
];

const STORAGE_KEYS = {
  cart: "accoria-cart",
  wishlist: "accoria-wishlist",
  cookie: "accoria-cookie-consent"
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
  return readStorage(STORAGE_KEYS.cart, []);
}

function getWishlist() {
  return readStorage(STORAGE_KEYS.wishlist, []);
}

function saveCart(items) {
  writeStorage(STORAGE_KEYS.cart, items);
  updateGlobalCounts();
}

function saveWishlist(items) {
  writeStorage(STORAGE_KEYS.wishlist, items);
  updateGlobalCounts();
}

function updateGlobalCounts() {
  const cartCount = getCart().reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = getWishlist().length;

  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = cartCount;
  });

  document.querySelectorAll("[data-wishlist-count]").forEach((node) => {
    node.textContent = wishlistCount;
  });
}

function productById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const line = cart.find((item) => item.id === productId);
  if (line) {
    line.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  saveCart(cart);
}

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const next = wishlist.includes(productId)
    ? wishlist.filter((id) => id !== productId)
    : [...wishlist, productId];
  saveWishlist(next);
}

function cartSubtotal() {
  return getCart().reduce((sum, item) => {
    const product = productById(item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);
}

function updateCartQuantity(productId, delta) {
  const next = getCart()
    .map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + delta } : item
    )
    .filter((item) => item.quantity > 0);
  saveCart(next);
  renderCheckout();
}

function createProductCard(product) {
  const wishlist = getWishlist();
  const isFavorite = wishlist.includes(product.id);

  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-tags">
          <span class="chip">${product.category}</span>
          <span class="chip">${product.tag}</span>
        </div>
        <button class="wishlist-btn ${isFavorite ? "is-active" : ""}" type="button" data-wishlist-toggle="${product.id}" aria-label="Save ${product.name}">
          ${isFavorite ? "&#9829;" : "&#9825;"}
        </button>
      </div>
      <div class="product-body">
        <div class="product-meta">
          <div>
            <h3>${product.name}</h3>
            <small>${product.color} &middot; ${product.sizes.join(", ")}</small>
          </div>
          <span class="price">${currency.format(product.price)}</span>
        </div>
        <p>${product.description}</p>
        <div class="button-row">
          <a class="button secondary" href="product.html?id=${product.id}">View Product</a>
          <button class="button primary" type="button" data-add-cart="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function attachCatalogActions(scope = document) {
  scope.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.addCart, 1);
      alert("Added to your cart.");
      renderCheckout();
    });
  });

  scope.querySelectorAll("[data-wishlist-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleWishlist(button.dataset.wishlistToggle);
      rerenderVisibleCatalogs();
    });
  });
}

function rerenderVisibleCatalogs() {
  renderHomeProducts();
  renderShop();
  renderProductDetail();
  renderCheckout();
}

function renderHomeProducts() {
  const grid = document.querySelector("[data-home-products]");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.slice(0, 4).map(createProductCard).join("");
  attachCatalogActions(grid);
}

function readQuery() {
  return new URLSearchParams(window.location.search);
}

function filterProducts(products) {
  const params = readQuery();
  const form = document.querySelector("[data-filter-form]");
  const formData = form ? new FormData(form) : null;

  const search = (formData?.get("search") || params.get("q") || "").toString().trim().toLowerCase();
  const category = (formData?.get("category") || params.get("category") || "").toString();
  const tag = (formData?.get("tag") || params.get("tag") || "").toString();
  const color = (formData?.get("color") || params.get("color") || "").toString();
  const size = (formData?.get("size") || params.get("size") || "").toString();
  const price = (formData?.get("price") || params.get("price") || "").toString();

  return products.filter((product) => {
    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory = !category || product.category === category;
    const matchesTag = !tag || product.tag === tag;
    const matchesColor = !color || product.color === color;
    const matchesSize = !size || product.sizes.includes(size);

    let matchesPrice = true;
    if (price) {
      const [min, max] = price.split("-").map(Number);
      if (!Number.isNaN(min) && !Number.isNaN(max)) {
        matchesPrice = product.price >= min && product.price <= max;
      } else if (!Number.isNaN(min)) {
        matchesPrice = product.price >= min;
      }
    }

    return matchesSearch && matchesCategory && matchesTag && matchesColor && matchesSize && matchesPrice;
  });
}

function renderShop() {
  const grid = document.querySelector("[data-shop-grid]");
  const wishlistGrid = document.querySelector("[data-wishlist-grid]");
  if (!grid && !wishlistGrid) return;

  if (grid) {
    const products = filterProducts(PRODUCTS);
    const resultsNote = document.querySelector("[data-results-note]");
    if (resultsNote) {
      resultsNote.textContent = `${products.length} accessories available`;
    }
    grid.innerHTML = products.length
      ? products.map(createProductCard).join("")
      : '<div class="empty-state">No accessories match the current filters. Try another search, finish, or category.</div>';
    attachCatalogActions(grid);
  }

  if (wishlistGrid) {
    const favorites = PRODUCTS.filter((product) => getWishlist().includes(product.id));
    wishlistGrid.innerHTML = favorites.length
      ? favorites.map(createProductCard).join("")
      : '<div class="empty-state">Your liked Accoria pieces will appear here.</div>';
    attachCatalogActions(wishlistGrid);
  }
}

function productColorSwatch(product) {
  const value = product.color.toLowerCase();

  if (value === "gold") return "#c9a25d";
  if (value === "silver") return "#bfc4cf";
  if (value === "ivory") return "#f2eee6";
  if (value === "chestnut") return "#82563b";
  if (value === "tortoise") return "#6c4a37";
  if (value === "emerald") return "#2f6651";
  return "#222222";
}

function renderProductDetail() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;

  const id = readQuery().get("id") || PRODUCTS[0].id;
  const product = productById(id) || PRODUCTS[0];

  root.innerHTML = `
    <section class="product-detail">
      <div class="product-gallery">
        <div class="product-gallery-main">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="mini-grid">
          ${PRODUCTS.slice(0, 3)
            .map(
              (item) => `
                <a class="mini-card" href="product.html?id=${item.id}">
                  <img src="${item.image}" alt="${item.name}" style="border-radius: 18px; aspect-ratio: 1.1; object-fit: cover; margin-bottom: 0.9rem;">
                  <h3>${item.name}</h3>
                  <p>${currency.format(item.price)}</p>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="product-copy">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <div class="rating">
          <span>${"&#9733;".repeat(5)}</span>
          <span>${product.rating} rating &middot; 124 verified USA reviews</span>
        </div>
        <div class="summary-row">
          <span class="price">${currency.format(product.price)}</span>
          <span class="muted"><s>${currency.format(product.compareAt)}</s> launch pricing</span>
        </div>
        <p>${product.description}</p>
        <div>
          <strong>Color / Finish</strong>
          <div class="swatches" style="margin-top: 0.65rem;">
            <span class="swatch"><span class="swatch-dot" style="background:${productColorSwatch(product)};"></span>${product.color}</span>
          </div>
        </div>
        <div>
          <strong>Size / Length</strong>
          <div class="size-row" style="margin-top: 0.65rem;">
            ${product.sizes.map((size) => `<span class="size-pill">${size}</span>`).join("")}
          </div>
        </div>
        <div class="button-row">
          <button class="button primary" type="button" data-add-cart="${product.id}">Add to Cart</button>
          <button class="button secondary" type="button" data-wishlist-toggle="${product.id}">Like Item</button>
        </div>
        <div class="accordion">
          <details class="faq-item" open>
            <summary>Shipping for USA customers</summary>
            <p>Standard delivery is typically 3 to 6 business days across the continental United States, with express options available at checkout.</p>
          </details>
          <details class="faq-item">
            <summary>Returns and eligibility</summary>
            <p>Eligible unworn accessories may be returned within 14 days of delivery. Final sale, personalized, and hygiene-sensitive items may be excluded.</p>
          </details>
          <details class="faq-item">
            <summary>Payment options</summary>
            <p>Accoria supports Visa, Mastercard, Amex, Discover, PayPal, Apple Pay, Google Pay, Shop Pay, Klarna, Afterpay, and Cash on Delivery where available.</p>
          </details>
        </div>
      </div>
    </section>
  `;

  attachCatalogActions(root);
}

function renderCheckout() {
  const cartItems = document.querySelector("[data-cart-items]");
  const cartTotal = document.querySelector("[data-cart-total]");
  if (!cartItems || !cartTotal) return;

  const items = getCart();
  if (!items.length) {
    cartItems.innerHTML = '<div class="empty-state">Your cart is empty. Add pieces from the Accoria collection to continue.</div>';
    cartTotal.textContent = currency.format(0);
    return;
  }

  cartItems.innerHTML = items
    .map((item) => {
      const product = productById(item.id);
      if (!product) return "";

      return `
        <div class="cart-line">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <strong>${product.name}</strong>
            <div class="muted">${product.category} &middot; ${product.color}</div>
            <div class="qty-controls" style="margin-top:0.55rem;">
              <button type="button" data-qty-change="${product.id}" data-delta="-1">-</button>
              <span>${item.quantity}</span>
              <button type="button" data-qty-change="${product.id}" data-delta="1">+</button>
            </div>
          </div>
          <strong>${currency.format(product.price * item.quantity)}</strong>
        </div>
      `;
    })
    .join("");

  cartTotal.textContent = currency.format(cartSubtotal());

  cartItems.querySelectorAll("[data-qty-change]").forEach((button) => {
    button.addEventListener("click", () => {
      updateCartQuantity(button.dataset.qtyChange, Number(button.dataset.delta));
    });
  });
}

function bindSearchForms() {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("q")?.toString().trim() || "";
      window.location.href = query ? `shop.html?q=${encodeURIComponent(query)}` : "shop.html";
    });
  });
}

function bindFilterForm() {
  const form = document.querySelector("[data-filter-form]");
  if (!form) return;

  const params = readQuery();
  ["search", "category", "tag", "color", "size", "price"].forEach((name) => {
    const input = form.elements.namedItem(name);
    if (input && params.get(name === "search" ? "q" : name)) {
      input.value = params.get(name === "search" ? "q" : name);
    }
  });

  form.addEventListener("input", renderShop);
  form.addEventListener("change", renderShop);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderShop();
  });
}

function bindMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const wrap = document.querySelector("[data-nav-wrap]");
  if (!toggle || !wrap) return;

  toggle.addEventListener("click", () => {
    wrap.classList.toggle("is-open");
  });
}

function bindNewsletterAndForms() {
  document.querySelectorAll("[data-inline-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = form.nextElementSibling;

      if (message && message.classList.contains("form-message")) {
        message.textContent = "Thanks. Your request has been received by the Accoria customer care team.";
      } else {
        alert("Thanks. Your request has been received.");
      }

      form.reset();
    });
  });
}

function bindCheckoutForm() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!getCart().length) {
      alert("Add at least one item before placing an order.");
      return;
    }

    alert("Order submitted. This demo checkout does not process a real payment.");
    saveCart([]);
    form.reset();
    renderCheckout();
  });
}

function bindCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;
  if (localStorage.getItem(STORAGE_KEYS.cookie)) return;

  banner.classList.remove("hidden");
  banner.querySelectorAll("[data-cookie-action]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEYS.cookie, button.dataset.cookieAction);
      banner.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateGlobalCounts();
  bindMenu();
  bindSearchForms();
  bindFilterForm();
  bindNewsletterAndForms();
  bindCheckoutForm();
  bindCookieBanner();
  renderHomeProducts();
  renderShop();
  renderProductDetail();
  renderCheckout();
});
