function showProductDetails(productId) {
    const productDetails = {
      product1: {
        name: "Smartphone",
        img: "sa1.avif",
        description: "Latest model with all new features. Fast and powerful smartphone.",
        price: "$299.99"
      },
      product2: {
        name: "Laptop",
        img: "lp1.avif",
        description: "High performance laptop for work and entertainment.",
        price: "$799.99"
      },
      product3: {
        name: "Headphones",
        img: "wh.jfif",
        description: "Noise-cancelling over-ear headphones with premium sound quality.",
        price: "$149.99"
      },
      product4: {
        name: "Smartwatch",
        img: "w.jpg",
        description: "Stylish smartwatch with fitness tracking and notifications.",
        price: "$199.99"
      },
      product5: {
        name: "Tablet",
        img: "sa1.avif",
        description: "Portable tablet with a high-definition display and long battery life.",
        price: "$399.99"
      }
    };

    // Get the product details by the product ID
    const product = productDetails[productId];
    if (!product) {
        alert('Product not found');
        return;
    }

    // Create the modal content
    const modalContent = `
      <div class="modal">
        <div class="modal-content">
          <span class="close-btn" onclick="closeModal()">×</span>
          <img src="${product.img}" alt="${product.name}" class="product-img">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p><strong>Price: ${product.price}</strong></p>
        </div>
      </div>
    `;

    // Append modal content to the body
    document.body.insertAdjacentHTML('beforeend', modalContent);
    
    // Show the modal (you can customize the visibility with CSS)
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
        modal.remove();
    }
}

// Example usage (Call the function with the appropriate product ID)
// showProductDetails('product1');

  
