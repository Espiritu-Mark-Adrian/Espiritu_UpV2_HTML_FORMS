// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsHtml = '';

    cart.forEach((item, index) => {
        cartItemsHtml += `
            <div class="cart-item-container">
                <input type="checkbox" id="item${index}" name="cartItem" value="${index}">
                <label for="item${index}">${item.name} - $${item.price}</label>
                <img class="cart-product-image" src="${item.image}" alt="Product Image">
            </div>
        `;
    });

    document.getElementById('cart-items').innerHTML = cartItemsHtml;
}

// Function to calculate and display total amount
function displayTotal(selectedItems) {
    let total = 0;

    selectedItems.forEach(index => {
        let item = JSON.parse(localStorage.getItem('cart'))[index];
        total += item.price;
    });

    alert(`Total amount to pay: $${total.toFixed(2)}`);
}

// Function to remove selected items from cart
function removeItems(selectedItems) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    selectedItems.forEach(index => {
        cart.splice(index, 1);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Function to handle checkout
function checkout() {
    let selectedItems = [];
    let checkboxes = document.getElementsByName('cartItem');

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedItems.push(parseInt(checkbox.value));
        }
    });

    if (selectedItems.length > 0) {
        displayTotal(selectedItems);
        removeItems(selectedItems);
    } else {
        alert('Please select at least one item to checkout.');
    }
}

// Call the displayCart function when the page loads
window.onload = () => {
    displayCart();
};