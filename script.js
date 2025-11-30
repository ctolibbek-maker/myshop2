// SAVAT MASSIVI
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SAVATGA QO‘SHISH FUNKSIYASI
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " savatga qo‘shildi!");
}

// SAVAT SAHIFASIDA KO‘RSATISH FUNKSIYASI
function loadCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = 0;

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        totalPrice += item.price;

        cartList.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>${item.price.toLocaleString()} so‘m</p>
                <button onclick="removeItem(${index})">O‘chirish</button>
            </div>
        `;
    });

    document.getElementById("total").innerHTML =
        totalPrice.toLocaleString() + " so‘m";
}

// SAVATDAN ELEMENT O‘CHIRISH
function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
