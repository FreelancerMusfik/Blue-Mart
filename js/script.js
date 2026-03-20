// HTML Tegs accesesing 
const productGrid = document.querySelector("#productGrid");
const cartCount = document.querySelector(".cart-count");
const navItem = document.querySelector(".cart");
const cartSidebar = document.querySelector(".cart-sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const cartBody = document.querySelector(".cart-body");
const tt = document.querySelector("#Tp");
const qtyBtn = document.querySelector(".qty-btn");
const wish = document.querySelectorAll("#wish");
const searchBar = document.querySelector("#searchBar");
const SearchBtn = document.querySelector("#btn-search");
const categoryLink = document.querySelectorAll(".category-link");
const priceFilter = document.querySelector("#priceFilter");
const productModal = document.querySelector("#productModal");
const modalBody = document.querySelector("#modalBody");
const checkoutModal = document.querySelector("#checkoutModal");
const st = document.querySelector("#st");
const gt = document.querySelector("#gt");
const checkoutForm = document.querySelector("#checkoutForm");
const applyCouponBtn = document.querySelector("#applyCouponBtn");
const couponInput = document.querySelector("#couponInput");
const wishCount = document.querySelector(".wish-count");
const wishlistModal = document.querySelector("#wishlistModal");
const btnWishlist = document.querySelector("#mmm");





// Cart Functions
let cart = [];
const addToCart = (id) => {
    let selected = products.find(items => items.id === id);
    if (cart.find((items) => items.id === id)) {
        selected.quantity += 1;
    }
    else {
        cart.push(selected);
    }
    updateDisplay();
    let message = `আপানার ${selected.name}টি কার্ডে এড করা হয়েছে`;
    toastTonggle(message, "#2ecc71");
};
// Cart Display 
navItem.addEventListener("click", () => {
    cartSidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
});
closeBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
});
// cart Display end
// cart show function
const updateDisplay = () => {

    cartCount.innerHTML = cart.length
    if (cart.length === 0) {
        cartBody.innerHTML = `<div class="empty-msg">Your Cart is empty</div>`;
        tt.innerHTML = 0;
        if (st) st.innerHTML = 0;
        if (gt) gt.innerHTML = 0;
        discount = 0;
        return;
    }
    const cartHTML = cart.map((items, index) => {
        return `
        <div class="cart-item">
            <div class="item-img">
                <img src="${items.image}" alt="${items.name}">
            </div>
            <div class="item-details">
                <h4>${items.name}</h4>
                <p class="item-price">$${items.price}</p>
                <div class="item-quantity">
                    <button class="qty-btn" onclick="removeQuantity(${index})">-</button>
                    <input type="text" value="${items.quantity}" readonly>
                    <button class="qty-btn" onclick="addQuantity(${index})">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="deleteCart(${index})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        `;
    }).join("");
    let total = cart.reduce((sum, items) => sum + items.price * items.quantity, 0);
    tt.innerHTML = total;
    st.innerHTML = total;
    let final = total * discount;
    let finalTotal = total - final + 10;
    gt.innerHTML = finalTotal;

    cartBody.innerHTML = cartHTML;
};
const deleteCart = (index) => {
    cart.splice(index, 1);
    updateDisplay();

};
// sub quantity
const addQuantity = (index) => {
    cart[index].quantity += 1;

    updateDisplay();
}
const removeQuantity = (index) => {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    }
    else {
        deleteCart(cart[index]);
    }
    updateDisplay();

}
//Cart function End

// Wishlist add function
productGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("wishlist-btn")) {
        const heartIcon = e.target;


        if (heartIcon.style.color === "red") {
            heartIcon.style.color = "";
        } else {
            heartIcon.style.color = "red";
        }
    }
});
//WishList function end

// *****************************************search Bar Function *********************************

searchBar.addEventListener("input", () => {
    const searchImp = searchBar.value.toLowerCase().trim();
    const searchfun = products.filter(items => items.name.toLowerCase().trim().includes(searchImp));
    if (searchfun.length > 0) {
        displayProducts(searchfun);
    }
    else {
        productGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <h3>Oops! No products found</h3>
                <p>We couldn't find anything matching "${searchBar.value}".</p>
                <span class="retry-btn" onclick="location.reload()">Clear search and try again</span>
            </div>
        `
    }
});

// ****************************************Catagory Filter ***************************************
categoryLink.forEach(items => {
    items.addEventListener("click", (e) => {
        e.preventDefault();
        const selectCategory = e.currentTarget.textContent.toLowerCase().trim();
        categoryFilter = products.filter(items => items.category.toLowerCase().trim() === selectCategory);
        displayProducts(categoryFilter);
    });
});

//*****************************************Price Filter*******************************************
priceFilter.addEventListener("change", (e) => {
    const selectedVal = e.target.value;
    let shortProduct = [...products];
    if (selectedVal === "lowToHigh") {
        shortProduct.sort((a, b) => a.price - b.price);
    }
    else {
        shortProduct.sort((a, b) => b.price - a.price);
    }

    displayProducts(shortProduct);
});

//*****************************************Toast modal******************************************* */

const toastTonggle = (message, bgColor) => {
    const toastContainer = document.querySelector("#toast-container");
    const div = document.createElement("div");
    div.innerHTML = message;
    div.style.backgroundColor = bgColor;
    div.classList.add("toast-alert");
    toastContainer.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
};


//******************************************Chack Out Box ******************************************/

const chackOut = () => {
    if (cart.length === 0) {
        cartSidebar.classList.remove("active");
        overlay.classList.remove("active");
        let message = `আপনার কার্টটি খালি! কেনাকাটা করতে পণ্য যোগ করুন।`;
        toastTonggle(message, "#f73939");
        return;
    }
    if (checkoutModal.classList.contains("active")) {
        checkoutModal.classList.remove("active");
        document.body.style.overflow = "hidden";
    } else {
        checkoutModal.classList.add("active");
        document.body.style.overflow = "auto";
    }
}
const closePopup = () => {
    checkoutModal.classList.remove("active");
    document.body.style.overflow = "auto";
};
let num = 450;
checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    id = `BM-${num}`;
    let message = `ধন্যবাদ! আপনার <strong>${id}</strong> অর্ডারটি গ্রহণ করা হয়েছে।`;
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
    cart = [];
    num++;
    
    toastTonggle(message, "#2ecc71");
    cartBody.innerHTML = `Your Cart is empty`;
    updateDisplay();
    closePopup();
    checkoutForm.reset();
})

//******************************************Cupon system***********************************************/
let discount = 0;
applyCouponBtn.addEventListener("click", () => {
    const couponInput = document.querySelector("#couponInput");
    let copunInp = couponInput.value.trim();
    if (copunInp === "SAVE10") {
        discount = 0.09;
        let message = `কুপন সফল! ১০% ছাড় দেওয়া হয়েছে।`;

        toastTonggle(message, "#2ecc71");
        couponInput.value = "";
    }
    else if (copunInp === "") {
        let message = "কুপন কোডটি লিখুন";
        toastTonggle(message, "#f73939");
    }
    else {
        let message = `ভুল কুপন কোড!`;

        toastTonggle(message, "#f73939");
        couponInput.value = "";

    }
    updateDisplay();
});

//********************************************************WishList function******************************** */

let wishli = [];

const wishlistFunc = (id) => {
    if (wishli.find(items => items.id === id)) {
        toastTonggle("আপনি এটি আগেও এড করেছেন", "#f73939")
        wishli = wishli.filter(items => items.id !== id);
        wishDisplayshow();
        return;
    }
    else {
        const selected = products.find(items => items.id === id);
        wishli.push(selected);
        toastTonggle("উইশলিস্টে এড হয়েছে", "#2ecc71");
        wishDisplayshow();
    }
};

const wishDisplayshow = () => {
    wishCount.innerHTML = wishli.length;
};

