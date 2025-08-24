/* script.js - simple cart (client-only demo) */
const cart = [];

function addToCart(name, price) {
  const numericPrice = Number(price);
  if (Number.isNaN(numericPrice)) {
    console.warn('Invalid price passed to addToCart:', price);
    return;
  }
  cart.push({ name, price: numericPrice });
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById('cartItems');
  if (!cartEl) return;
  cartEl.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.padding = '8px 0';
    row.innerHTML = `<div>${item.name}</div><div>$${item.price.toFixed(2)} <button onclick="removeFromCart(${i})" style="margin-left:8px;background:none;border:none;color:#ff7b00;cursor:pointer">Remove</button></div>`;
    cartEl.appendChild(row);
    total += item.price;
  });
  const totalRow = document.createElement('div');
  totalRow.style.display = 'flex';
  totalRow.style.justifyContent = 'space-between';
  totalRow.style.fontWeight = '700';
  totalRow.style.paddingTop = '12px';
  totalRow.innerHTML = `<div>Total</div><div>$${total.toFixed(2)}</div>`;
  cartEl.appendChild(totalRow);
}

function removeFromCart(index) {
  cart.splice(index,1);
  renderCart();
}

function checkout() {
  if (cart.length === 0) { alert('Your cart is empty.'); return; }
  alert('This is a demo checkout. Integrate Stripe/PayPal for real payments.');
  cart.length = 0;
  renderCart();
}

/* On page load, attach any needed handlers */
document.addEventListener('DOMContentLoaded', function(){
  renderCart();
});
