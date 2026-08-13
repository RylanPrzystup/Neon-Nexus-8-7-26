let cart = [];
const taxRate = 0.056;

let menuItems = [
{ id: 1, name: "Cheeseburger",
  category: "Main",
  price: 8.99, }
];

function addFood() {
  const itemToAdd = menuItems[0];

  cart.push(itemToAdd);
  updateLeftDisplay();
  updateRightDisplay();
  }

function updateLeftDisplay() {
  const leftDisplay = document.getElementById("display");
            
  leftDisplay.innerHTML = cart.map(item => {
   return `${item.name} - $${item.price}<br>`;
  }).join(""); 
  }

function updateRightDisplay() { 
  const rightDisplay = document.getElementById("display2"); 
  
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0); 
  
  const taxTotal = subtotal * taxRate;
  const finalTotal = subtotal + taxTotal;
 
  rightDisplay.innerHTML = `
    Subtotal: $${subtotal.toFixed(2)}<br>
    Tax (5.6%): $${taxTotal.toFixed(2)}<br>
    Total: $${finalTotal.toFixed(2)}
  `;
}