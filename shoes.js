const mensShoes = [
  { id: 1, name: "Sneakers", price: 60, image: "shoo/snicker.jpeg" },
  { id: 2, name: "Loafers", price: 80, image: "shoo/loafer.jpeg" },
  { id: 3, name: "Boots", price: 90, image: "shoo/boots.jpeg" },
  { id: 4, name: "Running Shoes", price: 75, image: "shoo/running shoes.jpeg" },
  { id: 5, name: "Sandals", price: 50, image: "shoo/sandle.jpeg" },
  { id: 6, name: "Funky shoes", price: 100, image: "shoo/funky shoes.jpeg" },
];

const womensShoes = [
  { id: 7, name: "Heels", price: 70, image: "shoo/heelas.jpeg" },
  { id: 8, name: "Flats", price: 50, image: "shoo/flats.png" },
  { id: 9, name: "Sandals", price: 40, image: "shoo/sandals.png" },
  { id: 10, name: "Ankle Boots", price: 85, image: "shoo/ankle boots.png" },
  { id: 11, name: "Wedge Shoes", price: 65, image: "shoo/wedge shoes.jpeg" },
  { id: 12, name: "Ballet Flats", price: 55, image: "shoo/Ballet flats.jpeg" },
];

function displayMensShoes() {
  const productList = document.getElementById("product-list-men");

  mensShoes.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
            <h5>${product.name}</h5>
           <div class="a"> <img src="${product.image}" alt="${product.name}" class="product-image" /></div>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function displayWomensShoes() {
  const productList = document.getElementById("product-list-women");

  womensShoes.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
            <h5>${product.name}</h5>
            <div class="a"> <img src="${product.image}" alt="${product.name}" class="product-image" />
            </div>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function addToCart(id) {
  // Combine both men's and women's shoes into one array for easy searching
  const allShoes = [...mensShoes, ...womensShoes];

  const product = allShoes.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItem = cart.find((item) => item.id === id);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Alert message when a product is added to the cart
  alert(`${product.name} has been added to your cart!`);
}

function viewCart() {
  window.location.href = "cart.html";
}

function goBack() {
  window.location.href = "categories.html";
}

// Initialize the shoe display
displayMensShoes();
displayWomensShoes();
