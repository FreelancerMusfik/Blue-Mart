const products = [
    { id: 1, name: "Apple iPhone 15 Pro Max - Titanium Blue", category: "Electronics", price: 1099, oldPrice: 1199, rating: 4.9, reviews: 1250, image: "https://picsum.photos/300?1", badge: "Hot", stock: 15, quantity: 1 },
    { id: 2, name: "Sony WH-1000XM5 Wireless Headphones", category: "Accessories", price: 348, oldPrice: 399, rating: 4.8, reviews: 840, image: "https://picsum.photos/300?2", badge: "Sale", stock: 22, quantity: 1 },
    { id: 3, name: "Men's Premium Cotton Formal Shirt", category: "Fashion", price: 25.5, oldPrice: 45, rating: 4.5, reviews: 210, image: "https://picsum.photos/300?3", badge: "New", stock: 50, quantity: 1 },
    { id: 4, name: "Samsung 32\" Odyssey G5 Gaming Monitor", category: "Electronics", price: 299.9, oldPrice: 350, rating: 4.7, reviews: 430, image: "https://picsum.photos/300?4", badge: "", stock: 8, quantity: 1 },
    { id: 5, name: "Logitech G502 HERO Gaming Mouse", category: "Accessories", price: 49, oldPrice: 79, rating: 4.6, reviews: 1560, image: "https://picsum.photos/300?5", badge: "Best Seller", stock: 100, quantity: 1 },
    { id: 6, name: "Nike Air Max 270 React - Blue/White", category: "Footwear", price: 150, oldPrice: 180, rating: 4.4, reviews: 95, image: "https://picsum.photos/300?6", badge: "", stock: 12, quantity: 1 },
    { id: 7, name: "Mechanical Keyboard RGB - Blue Switch", category: "Accessories", price: 65, oldPrice: 85, rating: 4.3, reviews: 320, image: "https://picsum.photos/300?7", badge: "Limited", stock: 5, quantity: 1 },
    { id: 8, name: "Premium Leather Wallet - Navy Blue", category: "Fashion", price: 18, oldPrice: 22, rating: 4.7, reviews: 180, image: "https://picsum.photos/300?8", badge: "", stock: 45, quantity: 1 },
    { id: 9, name: "Smart Fitness Tracker with Heart Rate", category: "Gadgets", price: 35, oldPrice: 50, rating: 4.2, reviews: 540, image: "https://picsum.photos/300?9", badge: "Sale", stock: 30, quantity: 1 },
    { id: 10, name: "Dell XPS 13 Laptop - 12th Gen i7", category: "Electronics", price: 999, oldPrice: 1200, rating: 4.8, reviews: 110, image: "https://picsum.photos/300?10", badge: "Premium", stock: 7, quantity: 1 },
    { id: 11, name: "Apple MacBook Air M2 - Space Gray", category: "Electronics", price: 999, oldPrice: 1099, rating: 4.9, reviews: 850, image: "https://picsum.photos/300?11", badge: "Hot", stock: 10, quantity: 1 },
    { id: 12, name: "Adidas Ultraboost Running Shoes", category: "Footwear", price: 120, oldPrice: 160, rating: 4.7, reviews: 320, image: "https://picsum.photos/300?12", badge: "Sale", stock: 25, quantity: 1 },
    { id: 13, name: "Canon EOS R5 Mirrorless Camera", category: "Electronics", price: 3899, oldPrice: 4200, rating: 4.9, reviews: 150, image: "https://picsum.photos/300?13", badge: "Premium", stock: 5, quantity: 1 },
    { id: 14, name: "Men's Slim Fit Navy Blue Blazer", category: "Men's Fashion", price: 85, oldPrice: 120, rating: 4.6, reviews: 310, image: "https://picsum.photos/300?14", badge: "Sale", stock: 18, quantity: 1 },
    { id: 15, name: "Leather Chelsea Boots - Classic Brown", category: "Footwear", price: 110, oldPrice: 150, rating: 4.5, reviews: 85, image: "https://picsum.photos/300?15", badge: "New", stock: 20, quantity: 1 },
    { id: 16, name: "iPad Pro 12.9-inch M2 Chip 256GB", category: "Mobile & Tablets", price: 1099, oldPrice: 1199, rating: 4.9, reviews: 670, image: "https://picsum.photos/300?16", badge: "Hot", stock: 12, quantity: 1 },
    { id: 17, name: "Google Pixel 8 Pro - Obsidian Black", category: "Mobile & Tablets", price: 999, oldPrice: 1050, rating: 4.7, reviews: 420, image: "https://picsum.photos/300?17", badge: "", stock: 15, quantity: 1 },
    { id: 18, name: "Luxury Velvet Sofa - 3 Seater Grey", category: "Home & Living", price: 750, oldPrice: 950, rating: 4.8, reviews: 45, image: "https://picsum.photos/300?18", badge: "Limited", stock: 3, quantity: 1 },
    { id: 19, name: "Dimmable Smart Bedside Lamp", category: "Home & Living", price: 45, oldPrice: 65, rating: 4.4, reviews: 890, image: "https://picsum.photos/300?19", badge: "Best Seller", stock: 55, quantity: 1 },
    { id: 20, name: "Ray-Ban Aviator Classic Sunglasses", category: "Accessories", price: 160, oldPrice: 210, rating: 4.7, reviews: 1200, image: "https://picsum.photos/300?20", badge: "", stock: 30, quantity: 1 },
    { id: 21, name: "Men's Cargo Jogger Pants - Olive Green", category: "Men's Fashion", price: 35, oldPrice: 55, rating: 4.3, reviews: 540, image: "https://picsum.photos/300?21", badge: "Sale", stock: 40, quantity: 1 }
];


const displayProducts = (data) => {
    productGrid.innerHTML = data.map(items => {
        const { name, price, oldPrice, image, badge, id } = items;
        const showBadge = badge ? `<span class="badge">${badge}</span>` : '';
        return ` 
        <div class="product-card" >
            ${showBadge}
            <i id="wish" onclick="wishlistFunc(${id})" class="far fa-heart wishlist-btn"></i>
            <img onclick="openProductModal(${id})" src="${image}" alt="${name}" class="product-img">
            <div class="product-info">
                <h4 onclick="openProductModal(${id})">${name}</h4>
                <div class="rating">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price-box">
                    <span class="price">${price}</span>
                    <span class="old-price">${oldPrice}</span>
                </div>
                <button class="add-cart-btn" onclick="addToCart(${id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
        </div>
        `
    }).join("");
};
displayProducts(products);


const openProductModal = (id) => {
    const selectedProduct = products.find(items => items.id === id);
    modalBody.innerHTML = `
    <div class="product-details-container">
        <div class="p-image-section">
            <div class="p-badge">${selectedProduct.badge || 'New'}</div>
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="main-p-image">
        </div>

        <div class="p-info-section">
            <div class="p-header">
                <span class="p-category">${selectedProduct.category}</span>
                <h2 class="p-title">${selectedProduct.name}</h2>
                <div class="p-rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="reviews">(${selectedProduct.reviews} Verified Reviews)</span>
                </div>
            </div>

            <div class="p-price-card">
                <div class="price-wrapper">
                    <span class="current-price">$${selectedProduct.price}</span>
                    <span class="old-price">$${selectedProduct.oldPrice}</span>
                </div>
                <span class="save-tag">Save $${(selectedProduct.oldPrice - selectedProduct.price).toFixed(2)}</span>
            </div>

            <p class="p-description">
                Experience premium performance and sleek design with the ${selectedProduct.name}. 
                Perfectly crafted for those who value quality and durability.
            </p>

            <div class="p-stock-info">
                <div class="stock-status">
                    <span class="dot"></span> 
                    <b>${selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'} (${selectedProduct.stock} units left)</b>
                </div>
            </div>

            <div class="p-actions">
                <button class="btn-add-cart" onclick="addToCart(${selectedProduct.id})">
                    <i class="fas fa-shopping-basket"></i> Add to Cart
                </button>
                <button id="mmm" class="btn-wishlist" onclick="wishlistFunc(${selectedProduct.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    </div>
`;
    productModal.style.display = "block";
    document.body.style.overflow = "hidden";

};
const closeModal = () => {
    productModal.style.display = "none";
    document.body.style.overflow = "auto";
};

