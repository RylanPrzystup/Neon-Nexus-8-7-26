let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
const taxRate = 0.056;

//updates left display
function updateLeftDisplay() {
  const leftDisplay = document.getElementById("display");
  
  leftDisplay.innerHTML = cart.map((item, index) => {
    return `
      <div class="cart-item">
        <div class="item-details">
          <h3>${item.itemTitle}</h3>
          <p class="description">${item.itemDescription}</p>
          <p class="price">Price: $${(item.itemPrice).toFixed(2)}</p>
          <button onclick="deleteItem(${index})">Delete</button>
        </div>
        <img src="${item.imgPath}" alt="${item.itemTitle}" width="150">
      </div>
      <hr>
    `;
  }).join("");
}


//updates left displays
function updateRightDisplay() {
    const rightDisplay = document.getElementById("display2");

    const subtotal = cart.reduce((sum, item) => {
        return sum + (item.itemPrice || 0);
    }, 0);

    const taxTotal = subtotal * taxRate;
    const finalTotal = subtotal + taxTotal;

    rightDisplay.innerHTML = `
        <h3>Order Summary</h3>

        <p>Subtotal: $${subtotal.toFixed(2)}</p>

        <p>Tax (5.6%): $${taxTotal.toFixed(2)}</p>

        <h3>Total: $${finalTotal.toFixed(2)}</h3>
    `;
}

function deleteItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    updateLeftDisplay();
    updateRightDisplay();
}


updateLeftDisplay();
updateRightDisplay();