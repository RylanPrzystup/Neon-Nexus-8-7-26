document.querySelector("#aboutMeBio").style.display = "none";
document.querySelector(".hiddenByDefualt").style.display = "none";

function displayAboutMeBio(){

    let aboutMeBio = document.querySelector("#aboutMeBio");

    if (aboutMeBio.style.display == "none") {

        aboutMeBio.style.display = "block";

    } else {
    aboutMeBio.style.display = 'none'
    }
};

let promotionItems = [
    {
        menuType: "bundle",
        itemTitle: "Breakfast Bash",
        itemPrice: 32.29,
        itemDescription: "Fresh stack of pancakes, pixel waffles, cyber omelet and a RGB Energy Soda ",
        imgPath: "../../assets/Food/quantamPancakes1.jpg"
    },

    {
        menuType: "bundle",
        itemTitle: "The Stardust Spread",
        itemPrice: 24.99,
        itemDescription: "Four future fruit punches and two Glitch Burgers.",
        imgPath: "../../assets/Food/burger.png"
    },

    {
        menuType: "bundle",
        itemTitle: "The Neon Duet",
        itemPrice: 29.99,
        itemDescription: "Two cyber steaks, cyber rice plate, two Electric Espresso Martinis and two Galaxy Chocolate Cakes.",
        imgPath: "../../assets/Food/plasmaSteak.jpg"
    }
];

function displayPromotions(){

        const grid = document.getElementById("populatePromotionItems");

        if (!grid) return; 

        let html = ``;
            for(let i=0; i < promotionItems.length; i++){
                const product = promotionItems[i];
                console.log(product);
                html += `
                    <div class="product-card">
                        <img class="product-icon" src="${product.imgPath}" alt="bundle image">
                            <div class="product-catagory">${product.itemTitle}</div>
                            <div class="product-description">${product.itemDescription}</div>
            
                            <div class="product-footer">
                        <div class="product-price">${product.itemPrice}</div>
                        <button class="product-button" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</button>
                </div>

            </div>
        `;
    }
    grid.innerHTML = html;
    }

displayPromotions()

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    cart.push({
        imgPath: product.imgPath,
        itemTitle: product.itemTitle,
        itemDescription: product.itemDescription,
        itemPrice: product.itemPrice
    });

    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    console.log("Added to cart:", product);

    let carCount = document.getElementById("cartCount")

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}