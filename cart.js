// Sample data for cart items (you can replace this with your actual data)
const cartItems = [];

const cartItemsContainer = document.querySelector('.cart-items');
const totalItemsSpan = document.getElementById('total-items');
const cartTotalSpan = document.getElementById('cart-total');

function updateCart() {
    cartItemsContainer.innerHTML = '';

    let totalItems = 0;
    let cartTotal = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const image = document.createElement('img');
        image.src = item.image;
        cartItem.appendChild(image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const name = document.createElement('h3');
        name.textContent = item.name;
        productInfo.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `$${item.price.toFixed(2)}`;
        productInfo.appendChild(price);

        const quantity = document.createElement('div');
        quantity.classList.add('quantity');
        quantity.innerHTML = `
            <input type="number" value="${item.quantity}" min="1">
            <span class="remove-button" data-index="${index}">Remove</span>
        `;
        productInfo.appendChild(quantity);

        cartItem.appendChild(productInfo);
        cartItemsContainer.appendChild(cartItem);

        totalItems += item.quantity;
        cartTotal += item.price * item.quantity;
    });

    totalItemsSpan.textContent = totalItems;
    cartTotalSpan.textContent = `${cartTotal.toFixed(2)}`;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
        button.addEventListener('click', removeCartItem);
    });
}

function removeCartItem(event) {
    const index = event.target.getAttribute('data-index');
    cartItems.splice(index, 1);
    updateCart();
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".cart-btn");

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const product = event.target.getAttribute("data-product");
        const size = event.target.getAttribute("data-size");

        // Here you can add the selected product to the cartItems array
        // Replace this with your actual product data
        const cartItem = {
            image: `product_images/${product}.jpg`,
            name: `Product ${product}`,
            price: 20.0,
            quantity: 1,
        };

        // Add the item to the cartItems array
        cartItems.push(cartItem);

        // Update the cart
        updateCart();
    }
});

updateCart();
