const fashionAccessories = [
  { id: 1, name: "Sunglasses", price: 15, img: "accesories/sunglass.jpeg" },
  { id: 2, name: "Watch", price: 50, img: "accesories/watch.jpeg" },
  { id: 3, name: "Hat", price: 20, img: "accesories/hat.jpeg" },
  { id: 4, name: "Belt", price: 25, img: "accesories/belt.jpg" },
  { id: 5, name: "Scarf", price: 30, img: "accesories/scarf.jpg" },
  { id: 6, name: "Necklace", price: 45, img: "accesories/chain.jpeg" },
];

const techAccessories = [
  {
    id: 7,
    name: "Wireless Earbuds",
    price: 70,
    img: "accesories/wireless buds.jpeg",
  },
  {
    id: 8,
    name: "Portable Charger",
    price: 30,
    img: "accesories/portable charger.png",
  },
  { id: 9, name: "Smartwatch", price: 150, img: "accesories/smart watch.jpeg" },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 90,
    img: "accesories/bluetooth speaker.jpeg",
  },
  { id: 11, name: "VR Headset", price: 300, img: "accesories/vr headset.jpeg" },
  {
    id: 12,
    name: "Smartphone Stand",
    price: 25,
    img: "accesories/phone stand.jpeg",
  },
];

function displayFashionAccessories() {
  const productList = document.getElementById("product-list-fashion");

  fashionAccessories.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
          <div class="a">  <img src="${product.img}" alt="${product.name}" class="product-image" />
          </div> 
          <h5>${product.name}</h5>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function displayTechAccessories() {
  const productList = document.getElementById("product-list-tech");

  techAccessories.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.innerHTML = `
           <div class="a"> <img src="${product.img}" alt="${product.name}" class="product-image" />
            </div>
           <h5>${product.name}</h5>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });
}

function addToCart(id) {
  // Determine which accessory array to search
  const allAccessories = [...fashionAccessories, ...techAccessories];

  const product = allAccessories.find((p) => p.id === id);

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

// Initialize the accessory display
displayFashionAccessories();
displayTechAccessories();
