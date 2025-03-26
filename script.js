document.addEventListener("DOMContentLoaded", function () {
    const wishlistIcons = document.querySelectorAll(".wishlist-icon");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to update wishlist UI
    function updateWishlistUI() {
        wishlistIcons.forEach(icon => {
            const productId = icon.parentElement.getAttribute("data-id");
            if (wishlist.some(item => item.id === productId)) {
                icon.textContent = "♥"; // Filled heart for added items
                icon.classList.add("active");
            } else {
                icon.textContent = "♡"; // Empty heart for non-wishlisted items
                icon.classList.remove("active");
            }
        });
    }

    // Toggle Wishlist
    wishlistIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const productElement = this.parentElement;
            const productId = productElement.getAttribute("data-id");
            const productName = productElement.getAttribute("data-name");
            const productImage = productElement.getAttribute("data-image");

            let itemIndex = wishlist.findIndex(item => item.id === productId);
            if (itemIndex === -1) {
                wishlist.push({ id: productId, name: productName, image: productImage });
            } else {
                wishlist.splice(itemIndex, 1);
            }

            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            updateWishlistUI();
        });
    });

    // Render Wishlist on wishlist.html
    function renderWishlist() {
        if (document.getElementById("wishlist-items")) {
            let wishlistContainer = document.getElementById("wishlist-items");
            wishlistContainer.innerHTML = "";

            wishlist.forEach(item => {
                let div = document.createElement("div");
                div.classList.add("wishlist-item");
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <button onclick="removeFromWishlist('${item.id}')">Remove</button>
                `;
                wishlistContainer.appendChild(div);
            });
        }
    }

    // Remove from Wishlist
    window.removeFromWishlist = function (productId) {
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist(); // Update the UI dynamically
    };

    updateWishlistUI();
    renderWishlist(); // Ensure wishlist renders correctly on page load
});



/*categories*/
document.addEventListener("DOMContentLoaded", function () {
    const categoryBtn = document.getElementById("category-btn");
    const categoryMenu = document.getElementById("category-menu");

    categoryBtn.addEventListener("click", function (event) {
        event.preventDefault();
        categoryMenu.classList.toggle("show");
        arrow.classList.toggle("rotate");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!categoryBtn.contains(event.target) && !categoryMenu.contains(event.target)) {
            categoryMenu.classList.remove("show");
            
        }
    });
});






