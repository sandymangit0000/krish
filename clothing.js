const menClothing = [
  { id: 1, name: "T-Shirt", price: 20, img: "clothing/t shirt.jpeg" },
  { id: 2, name: "Jeans", price: 40, img: "clothing/jeans pant.jpeg" },
  { id: 3, name: "Jacket", price: 60, img: "clothing/jacket.png" },
  { id: 4, name: "Sneakers", price: 50, img: "clothing/snicker.png" },
  { id: 5, name: "Cap", price: 15, img: "clothing/cap.jpeg" },
  { id: 6, name: "Watch", price: 15, img: "clothing/watch.png" },
];

const womenClothing = [
  { id: 7, name: "Dress", price: 50, img: "clothing/women dress.jpeg" },
  { id: 8, name: "Skirt", price: 30, img: "clothing/skirt.jpeg" },
  { id: 9, name: "Blouse", price: 25, img: "clothing/blouse.jpeg" },
  { id: 10, name: "Heels", price: 60, img: "clothing/heels.jpeg" },
  { id: 11, name: "Scarf", price: 20, img: "clothing/scarf.png" },
  { id: 12, name: "Cap", price: 15, img: "clothing/women hat.png" },
];

function displayMenClothing() {
  const productList = document.getElementById("product-list-men");

  menClothing.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
             <div class="a"><img src="${product.img}" alt="${product.name}" class="product-image" /></div>
            <h5>${product.name}</h5>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function displayWomenClothing() {
  const productList = document.getElementById("product-list-women");

  womenClothing.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
           <div class="a"> <img src="${product.img}" alt="${product.name}" class="product-image" /></div>
            <h5>${product.name}</h5>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function addToCart(id) {
  // Determine which clothing array to search
  const allClothing = [...menClothing, ...womenClothing];

  const product = allClothing.find((p) => p.id === id);

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

// Initialize the clothing display
displayMenClothing();
displayWomenClothing();
