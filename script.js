let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("show");
}

function addToCart(name, price){
    let existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.quantity += 1;
    } else {
        cart.push({
            name:name,
            price:price,
            quantity:1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart 🛒");
}

function updateCartCount(){
    const count = document.getElementById("cartCount");
    if(count){
        count.innerText = cart.length;
    }
}

function changeQty(index, change){
    cart[index].quantity += change;

    if(cart[index].quantity <= 0){
        cart.splice(index,1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function placeOrder(){
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    if(cartData.length === 0){
        alert("🛒 Your cart is empty!");
        return;
    }

    document.getElementById("orderModal").style.display = "flex";

    localStorage.removeItem("cart");
}

function closeModal(){
    document.getElementById("orderModal").style.display = "none";
    location.reload();
}

window.onload = function(){
    updateCartCount();
}
