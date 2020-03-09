let cart = [];
let add = document.getElementById('add');

function addToCart() {
  let cartCounter = document.getElementById('cart-items-counter');
  cart.push('apple');
  cartCounter.textContent = parseInt(cartCounter.textContent) + 1;
  console.log(cart)
}

add.addEventListener('click', addToCart)