// Initialize an empty array to hold cart items
let cart = [];

// Function to display items in the cart
function displayCart() {
    // Select the container where cart items will be displayed
    const cartItemsContainer = document.querySelector(".cart-items");
    
    // Retrieve the cart from local storage or initialize as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Initialize total price to zero
    let totalPrice = 0;

    // Clear previous cart items displayed
    cartItemsContainer.innerHTML = "";

    // Loop through each item in the cart
    cart.forEach(item => {
        // Calculate total price for the current item
        totalPrice += item.price * item.quantity;

        // Create a new table row for each item
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td> <!-- Call remove function with item's ID -->
        `;
        // Append the row to the cart items container
        cartItemsContainer.appendChild(row);
    });

    // Update total price display in designated element
    document.querySelector(".total").innerText = `$${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart by its ID
function removeFromCart(productId) {
    // Filter out the item with the specified ID from the cart array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId); // Remove only this item
    
    // Update local storage with new cart data
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh displayed cart items
    displayCart();
}

// Function to clear all items from the cart
function clearCart() {
    // Remove 'cart' from local storage completely
    localStorage.removeItem('cart');
    
    // Clear displayed cart items in HTML table
    document.querySelector(".cart-items").innerHTML = "";
    
    // Reset total price display to $0.00
    document.querySelector(".total").innerText = "$0.00";
}

// Function to navigate back to main categories page
function goBack() {
    window.location.href = 'categories.html'; // Redirects user to index.html page
}
function shop()
{
    if(document.querySelector(".cart-items").innerHTML !="")
    {
        alert("Thanks For Shop With US");
        window.location.href = 'index.html';
        // Remove 'cart' from local storage completely
        localStorage.removeItem('cart');
        // Clear displayed cart items in HTML table
        document.querySelector(".cart-items").innerHTML = "";
        // Reset total price display to $0.00
        document.querySelector(".total").innerText = "$0.00";
    }
    else{
        alert("Choose a product before click Shop now");
        window.location.href = 'categories.html';
    }
    


}

// Initialize the cart display when this script is loaded
displayCart();