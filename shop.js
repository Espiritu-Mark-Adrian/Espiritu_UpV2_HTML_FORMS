
 function addToCart(productName, price, imageUrl) {
    let cartItem = { name: productName, price: price, image: imageUrl };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}