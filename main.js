// JavaScript for Mr Stepup.co Store
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Product Data (Retro Sneakers)
    const products = [
        {
            id: 'nike-air-max-1',
            name: 'Nike Jordan 4 Retro OG',
            price: 2499.00,
            image: 'assets/kicks/White J4 Both.jpg',
            description: 'The original Air Max, a timeless classic that started it all. Featuring visible Air cushioning and iconic design lines.',
            features: [
                'Visible Max Air unit in the heel for classic cushioning.',
                'Waffle outsole for durable traction.',
                'Padded, low-cut collar looks sleek and feels great.',
                'Original 1987 design elements.'
            ],
            otherImages: [
                'assets/kicks/White J4 Right.jpg',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Nike+Air+Max+1+Back',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Nike+Air+Max+1+Sole'
            ]
        },
        {
            id: 'adidas-superstar',
            name: 'Nike Air Force 1 Hightop Black',
            price: 1899.00,
            image: 'assets/kicks 2/Black AF1 High Both.jpg',
            description: 'The legendary shell-toe sneaker, a staple of street culture since the 80s. Premium leather and classic detailing.',
            features: [
                'Full-grain leather upper for comfort and soft feel.',
                'Classic rubber shell toe.',
                'Herringbone-pattern rubber cupsole.',
                'Authentic 80s silhouette.'
            ],
            otherImages: [
                'assets/kicks 2/Black AF1 High Right.jpg',
                'assets/kicks 2/Black AF1 High Back.jpg',
                'assets/kicks 2/Black AF1 High Front.jpg'
            ]
        },
        {
            id: 'puma-suede-classic',
            name: 'Puma Suede Classic',
            price: 1599.00,
            image: 'assets/kicks 2/Puma X LULU Black/Green Both.jpg',
            description: 'A true icon of sport and street style, the Puma Suede has been making waves since 1968. Timeless and versatile.',
            features: [
                'Full suede upper for a premium look and feel.',
                'Rubber outsole for grip.',
                'Gold foil PUMA Suede branding.',
                'Original 1968 design.'
            ],
            otherImages: [
                'assets/kicks 2/Puma X LULU Black/Green Right.jpg',
                'assets/kicks 2/Puma X LULU Black/Green Front.jpg',
                'assets/kicks 2/Puma X LULU Black/Green Back.jpg',
                'assets/kicks 2/Puma X LULU Black/Green Soul & Front.jpg',
                'assets/kicks 2/Puma X LULU Black/Green Fitted.jpg',
            ]
        },
        {
            id: 'new-balance-574',
            name: 'New Balance 574 Classic',
            price: 2199.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Balance+574+Front',
            description: 'The quintessential New Balance sneaker, known for its versatility, comfort, and understated style. A true retro runner.',
            features: [
                'ENCAP midsole cushioning combines soft foam with a durable polyurethane rim.',
                'Lightweight EVA foam cushioning in the midsole and heel.',
                'Suede and mesh upper.',
                'Classic 80s running silhouette.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Balance+574+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Balance+574+Heel',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=New+Balance+574+Toe'
            ]
        },
        {
            id: 'converse-chuck-70',
            name: 'Converse Chuck 70 High-Top',
            price: 1799.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Chuck+70+Front',
            description: 'The Chuck 70 brings back the original design from the 1970s, with premium materials and improved cushioning.',
            features: [
                'Heavier-grade canvas for durability.',
                'More cushioning and a slightly higher rubber foxing.',
                'Vintage license plate branding.',
                'Iconic 70s high-top design.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Chuck+70+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Chuck+70+Laces',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Chuck+70+Patch'
            ]
        },
        {
            id: 'vans-old-skool',
            name: 'Vans Old Skool OG',
            price: 1699.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Vans+Old+Skool+Front',
            description: 'The classic Vans skate shoe and the first to bear the iconic sidestripe. Durable and stylish for everyday wear.',
            features: [
                'Sturdy suede and canvas uppers.',
                'Re-enforced toe caps to withstand repeated wear.',
                'Padded collars for support and flexibility.',
                'Signature rubber waffle outsoles.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Vans+Old+Skool+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Vans+Old+Skool+Back',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Vans+Old+Skool+Stripe'
            ]
        },
        {
            id: 'reebok-classic-leather',
            name: 'Reebok Classic Leather',
            price: 1499.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Reebok+Classic+Front',
            description: 'A timeless silhouette, the Reebok Classic Leather offers comfort and style that never fades. Perfect for everyday wear.',
            features: [
                'Soft garment leather upper for instant comfort.',
                'Die-cut EVA midsole provides lightweight cushioning.',
                'High-abrasion rubber outsole for durability.',
                'Iconic side stripes.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Reebok+Classic+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Reebok+Classic+Top',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Reebok+Classic+Heel'
            ]
        },
        {
            id: 'asics-gel-lyte-iii',
            name: 'ASICS GEL-Lyte III',
            price: 2299.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=ASICS+Gel-Lyte+Front',
            description: 'Known for its split-tongue design and GEL cushioning, the GEL-Lyte III is a retro running favorite.',
            features: [
                'Split-tongue design eliminates tongue slippage.',
                'GEL technology cushioning for excellent shock absorption.',
                'Suede and mesh upper for breathability and comfort.',
                'Original 90s running aesthetic.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=ASICS+Gel-Lyte+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=ASICS+Gel-Lyte+Split',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=ASICS+Gel-Lyte+Sole'
            ]
        },
        {
            id: 'brooks-chariot',
            name: 'Brooks Chariot',
            price: 1699.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Front',
            description: 'Originally released in 1982, the Brooks Chariot offers classic running style with modern comfort.',
            features: [
                'Full-grain leather and suede overlays.',
                'Molded EVA midsole for cushioning.',
                'Rubber outsole for traction.',
                'Retro running silhouette.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Back',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Detail'
            ]
        },
        {
            id: 'saucony-jazz-original',
            name: 'Saucony Jazz Original',
            price: 1399.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Front',
            description: 'A true classic since 1981, the Jazz Original combines comfort, style, and a lightweight design.',
            features: [
                'Suede and nylon upper for long-lasting durability.',
                'Padded collar and tongue for a comfortable fit.',
                'Shock-absorbing EVA midsole.',
                'Durable rubber traction outsole.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Top',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Logo'
            ]
        },
        {
            id: 'saucony-jazz-original',
            name: 'Saucony Jazz Original',
            price: 1399.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Front',
            description: 'A true classic since 1981, the Jazz Original combines comfort, style, and a lightweight design.',
            features: [
                'Suede and nylon upper for long-lasting durability.',
                'Padded collar and tongue for a comfortable fit.',
                'Shock-absorbing EVA midsole.',
                'Durable rubber traction outsole.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Top',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Saucony+Jazz+Logo'
            ]
        },
        {
            id: 'brooks-chariot',
            name: 'Brooks Chariot',
            price: 1699.00,
            image: 'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Front',
            description: 'Originally released in 1982, the Brooks Chariot offers classic running style with modern comfort.',
            features: [
                'Full-grain leather and suede overlays.',
                'Molded EVA midsole for cushioning.',
                'Rubber outsole for traction.',
                'Retro running silhouette.'
            ],
            otherImages: [
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Side',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Back',
                'https://placehold.co/400x300/F3F4F6/6B7280?text=Brooks+Chariot+Detail'
            ]
        },
    ];

    let cart = []; // Array to hold cart items {id, name, price, quantity}

    const productListDiv = document.getElementById('product-list');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartCountSpan = document.getElementById('cart-count');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutSection = document.getElementById('checkout-section');
    const simulatePaymentButton = document.getElementById('simulate-payment-button');
    const orderConfirmationDiv = document.getElementById('order-confirmation');
    const confirmedDeliveryMethodSpan = document.getElementById('confirmed-delivery-method');
    const confirmedDeliveryAddressSpan = document.getElementById('confirmed-delivery-address'); // New span for delivery address
    const finalOrderTotalSpan = document.getElementById('final-order-total');
    const continueShoppingButton = document.getElementById('continue-shopping-button');
    const heroHeadline = document.getElementById('hero-headline');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    const productDetailModal = document.getElementById('product-detail-modal');
    const closeButton = productDetailModal.querySelector('.close-button');
    const modalContentBody = document.getElementById('modal-content-body');

    const deliveryRadios = document.querySelectorAll('input[name="delivery-method"]');
    let selectedDeliveryCost = 99.00; // Default to Courier Guy

    // --- Utility Functions ---

    // Function to format currency to ZAR
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            minimumFractionDigits: 2
        }).format(amount);
    };

    // Function to show a temporary message
    const showMessage = (message, type = 'success') => {
        const messageBox = document.getElementById('messageBox');
        messageBox.textContent = message;
        messageBox.className = 'rounded-lg show'; // Reset classes and add 'show'
        if (type === 'success') {
            messageBox.style.backgroundColor = '#10B981'; /* Emerald Green */
            } else if (type === 'error') {
                messageBox.style.backgroundColor = '#EF4444'; /* Red */
            } else if (type === 'info') {
                messageBox.style.backgroundColor = '#3B82F6'; /* Blue */
            }

            setTimeout(() => {
                messageBox.className = 'rounded-lg'; // Hide by removing 'show'
        }, 3000);
    };

    // --- Product Display ---

    const renderProducts = () => {
        productListDiv.innerHTML = ''; // Clear existing products
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl border border-gray-200';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-lg text-blue-600 font-bold mb-4">${formatCurrency(product.price)}</p>
                <button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 border border-blue-500" data-id="${product.id}">
                    Add to Cart
                </button>
            `;
            productListDiv.appendChild(productCard);

            // Trigger fade-in animation
            setTimeout(() => {
                productCard.classList.add('loaded');
            }, index * 100); // Stagger the animation
            
            // Add event listener for product detail modal
            productCard.querySelector('img').addEventListener('click', () => openProductDetailModal(product.id));
            productCard.querySelector('h3').addEventListener('click', () => openProductDetailModal(product.id));
        });

        // Add event listeners for "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent modal from opening when clicking add to cart
                const productId = event.target.dataset.id;
                addToCart(productId);
            });
        });
    };

    // --- Product Detail Modal ---

    const openProductDetailModal = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Build thumbnail images HTML
        let thumbnailsHtml = `<div class="flex flex-wrap gap-2 mt-4 justify-center">`;
        // Add the main image as the first thumbnail
        thumbnailsHtml += `<img src="${product.image}" alt="${product.name} - View 1" class="thumbnail-img w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-400 active" data-src="${product.image}">`;
        // Add other images as thumbnails
        if (product.otherImages && product.otherImages.length > 0) {
            product.otherImages.forEach((imgSrc, index) => {
                thumbnailsHtml += `<img src="${imgSrc}" alt="${product.name} - View ${index + 2}" class="thumbnail-img w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-400" data-src="${imgSrc}">`;
            });
        }
        thumbnailsHtml += `</div>`;


        modalContentBody.innerHTML = `
            <div class="md:col-span-1 flex flex-col items-center">
                <img id="main-product-image" src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-600 mb-4">
                ${thumbnailsHtml}
            </div>
            <div class="md:col-span-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-3">${product.name}</h2>
                <p class="text-2xl text-blue-600 font-extrabold mb-4">${formatCurrency(product.price)}</p>
                <p class="text-gray-700 mb-6">${product.description}</p>
                <h4 class="text-xl font-semibold text-gray-800 mb-2">Retro Features:</h4>
                <ul class="list-disc list-inside text-gray-700 mb-6 space-y-1">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 w-full mb-4 border border-blue-500" data-id="${product.id}">
                    Add to Cart
                </button>
                <button id="get-lore-button" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 w-full border border-purple-500">
                    ✨ Get Sneaker Lore
                    <span id="lore-loader" class="loader hidden"></span>
                </button>
                <div id="sneaker-lore-output" class="mt-4 p-4 bg-gray-100 rounded-lg text-gray-700 text-sm italic hidden"></div>
            </div>
        `;
        productDetailModal.style.display = 'flex'; // Show the modal

        // Add event listener for "Add to Cart" button inside modal
        modalContentBody.querySelector('.add-to-cart-btn').addEventListener('click', (event) => {
            const productId = event.target.dataset.id;
            addToCart(productId);
            closeProductDetailModal(); // Close modal after adding to cart
        });

        // Add event listeners for thumbnails
        const mainProductImage = document.getElementById('main-product-image');
        document.querySelectorAll('.thumbnail-img').forEach(thumbnail => {
            thumbnail.addEventListener('click', (event) => {
                // Change main image source
                mainProductImage.src = event.target.dataset.src;
                // Update active class for styling
                document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
                event.target.classList.add('active');
            });
        });

        // Add event listener for Get Sneaker Lore button
        document.getElementById('get-lore-button').addEventListener('click', () => getSneakerLore(product.name, product.description));
    };

    const closeProductDetailModal = () => {
        productDetailModal.style.display = 'none'; // Hide the modal
    };

    closeButton.addEventListener('click', closeProductDetailModal);
    window.addEventListener('click', (event) => {
        if (event.target === productDetailModal) {
            closeProductDetailModal();
        }
    });

    // --- Shopping Cart Functions ---

    const saveCart = () => {
        localStorage.setItem('mrStepupCart', JSON.stringify(cart));
    };

    const loadCart = () => {
        const savedCart = localStorage.getItem('mrStepupCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    };

    const addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
            showMessage(`${product.name} quantity updated in cart!`, 'info');
        } else {
            cart.push({ ...product, quantity: 1 });
            showMessage(`${product.name} added to cart!`, 'success');
        }
        saveCart();
        renderCart();
        animateCartCount(); // Trigger cart count animation
    };

    const updateCartQuantity = (productId, newQuantity) => {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (newQuantity > 0) {
                cart[itemIndex].quantity = newQuantity;
            } else {
                cart.splice(itemIndex, 1); // Remove if quantity is 0 or less
                showMessage('Item removed from cart.', 'info');
            }
            saveCart();
            renderCart();
        }
    };

    const removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart();
        showMessage('Item removed from cart.', 'info');
    };

    const calculateCartTotal = () => {
        let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return total;
    };

    const renderCart = () => {
        cartItemsDiv.innerHTML = ''; // Clear existing cart items
        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            checkoutButton.disabled = true;
        } else {
            emptyCartMessage.classList.add('hidden');
            checkoutButton.disabled = false;
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200';
                cartItemDiv.innerHTML = `
                    <div class="flex items-center flex-grow mb-4 sm:mb-0">
                        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md mr-4 border border-gray-200">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900">${item.name}</h4>
                            <p class="text-md text-gray-700">${formatCurrency(item.price)} each</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center border border-gray-300 rounded-md">
                            <button class="quantity-btn p-2 text-gray-700 hover:bg-gray-200 rounded-l-md transition duration-200" data-id="${item.id}" data-action="decrease">-</button>
                            <span class="px-3 text-lg font-medium text-gray-900">${item.quantity}</span>
                            <button class="quantity-btn p-2 text-gray-700 hover:bg-gray-200 rounded-r-md transition duration-200" data-id="${item.id}" data-action="increase">+</button>
                        </div>
                        <p class="text-lg font-bold text-blue-600 w-24 text-right">${formatCurrency(item.price * item.quantity)}</p>
                        <button class="remove-from-cart-btn text-red-500 hover:text-red-600 text-xl transition duration-200" data-id="${item.id}">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                `;
                cartItemsDiv.appendChild(cartItemDiv);
            });

            // Add event listeners for quantity buttons and remove buttons
            document.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.dataset.id;
                    const action = event.target.dataset.action;
                    const item = cart.find(i => i.id === productId);
                    if (item) {
                        let newQuantity = item.quantity;
                        if (action === 'increase') {
                            newQuantity++;
                        } else if (action === 'decrease') {
                            newQuantity--;
                        }
                        updateCartQuantity(productId, newQuantity);
                    }
                });
            });

            document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = event.target.closest('button').dataset.id;
                    removeFromCart(productId);
                });
            });
        }
        cartTotalSpan.textContent = formatCurrency(calculateCartTotal());
        cartCountSpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    // --- Checkout Process ---

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            showMessage('Your cart is empty. Please add items before checking out.', 'error');
            return;
        }
        // Scroll to checkout section and show it
        checkoutSection.classList.remove('hidden');
        orderConfirmationDiv.classList.add('hidden'); // Hide confirmation if visible
        // Ensure all checkout sub-sections are visible for a new checkout
        document.querySelector('#checkout-section > div:nth-child(2)').classList.remove('hidden'); // Billing Address
        document.querySelector('#checkout-section > div:nth-child(3)').classList.remove('hidden'); // Delivery Address
        document.querySelector('#checkout-section > div:nth-child(4)').classList.remove('hidden'); // Delivery Method
        document.querySelector('#checkout-section > div:nth-child(5)').classList.remove('hidden'); // Payment Details
        checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Update delivery cost when radio button changes
    deliveryRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target.value === 'courier-guy') {
                selectedDeliveryCost = 99.00;
            } else if (event.target.value === 'paxi') {
                selectedDeliveryCost = 59.00;
            }
            // No need to recalculate cart total here, it's done at final checkout
        });
    });

    simulatePaymentButton.addEventListener('click', () => {
        // Basic validation for demonstration
        const billingName = document.getElementById('billing-name').value.trim();
        const billingStreet = document.getElementById('billing-street').value.trim();
        const billingCity = document.getElementById('billing-city').value.trim();
        const billingPostalCode = document.getElementById('billing-postal-code').value.trim();

        const deliveryName = document.getElementById('delivery-name').value.trim();
        const deliveryStreet = document.getElementById('delivery-street').value.trim();
        const deliveryCity = document.getElementById('delivery-city').value.trim();
        const deliveryPostalCode = document.getElementById('delivery-postal-code').value.trim();
        
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiryDate = document.getElementById('expiry-date').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!billingName || !billingStreet || !billingCity || !billingPostalCode ||
            !deliveryName || !deliveryStreet || !deliveryCity || !deliveryPostalCode ||
            !cardNumber || !expiryDate || !cvv) {
            showMessage('Please fill in all required address and payment details.', 'error');
            return;
        }

        // Simulate payment success
        showMessage('Payment successful! Processing your order...', 'success');

        const finalTotal = calculateCartTotal() + selectedDeliveryCost;
        const deliveryMethodText = document.querySelector('input[name="delivery-method"]:checked').nextElementSibling.textContent;
        const deliveryAddress = `${document.getElementById('delivery-street').value}, ${document.getElementById('delivery-city').value}, ${document.getElementById('delivery-postal-code').value}, ${document.getElementById('delivery-country').value}`;

        confirmedDeliveryMethodSpan.textContent = deliveryMethodText;
        confirmedDeliveryAddressSpan.textContent = deliveryAddress; // Set the confirmed delivery address
        finalOrderTotalSpan.textContent = formatCurrency(finalTotal);

        // Show order confirmation and hide checkout steps
        orderConfirmationDiv.classList.remove('hidden');
        document.querySelector('#checkout-section > div:nth-child(2)').classList.add('hidden'); // Hide Billing
        document.querySelector('#checkout-section > div:nth-child(3)').classList.add('hidden'); // Hide Delivery
        document.querySelector('#checkout-section > div:nth-child(4)').classList.add('hidden'); // Hide Delivery Method
        document.querySelector('#checkout-section > div:nth-child(5)').classList.add('hidden'); // Hide Payment
        cart = []; // Clear cart after successful order
        saveCart();
        renderCart(); // Update cart display to empty
        triggerConfetti(); // Trigger confetti effect
    });

    continueShoppingButton.addEventListener('click', () => {
        checkoutSection.classList.add('hidden'); // Hide checkout section
        // Show all checkout sub-sections again for next potential checkout
        document.querySelector('#checkout-section > div:nth-child(2)').classList.remove('hidden');
        document.querySelector('#checkout-section > div:nth-child(3)').classList.remove('hidden');
        document.querySelector('#checkout-section > div:nth-child(4)').classList.remove('hidden');
        document.querySelector('#checkout-section > div:nth-child(5)').classList.remove('hidden');
        orderConfirmationDiv.classList.add('hidden'); // Hide confirmation
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    });

    // --- Exciting JavaScript Features ---

    // 1. Hero Headline Typing Effect
    const typeText = (element, text, delay = 100) => {
        let i = 0;
        element.textContent = ''; // Clear content first
        element.style.width = '0'; // Start with 0 width for typing effect
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                element.style.borderRight = 'none'; // Remove blinking cursor after typing
            }
        }, delay);
    };

    // 2. Cart Count Bounce Animation
    const animateCartCount = () => {
        cartCountSpan.classList.add('cart-count-bounce');
        setTimeout(() => {
            cartCountSpan.classList.remove('cart-count-bounce');
        }, 300); // Match animation duration
    };

    // 3. Confetti Effect on Order Confirmation
    const triggerConfetti = () => {
        const confettiContainer = orderConfirmationDiv; // Use the confirmation div as the container
        for (let i = 0; i < 50; i++) { // Generate 50 confetti pieces
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            // Randomize position within the confirmation div
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // Random color
            confetti.style.setProperty('--x', `${(Math.random() - 0.5) * 400}px`); // Random horizontal movement
            confetti.style.setProperty('--y', `${(Math.random() - 0.5) * 400}px`); // Random vertical movement
            confetti.style.setProperty('--deg', `${Math.random() * 720}deg`); // Random rotation
            confetti.style.animationDuration = `${1 + Math.random() * 1.5}s`; // Random duration
            confetti.style.animationDelay = `${Math.random() * 0.5}s`; // Random delay

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation to prevent DOM clutter
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    };

    // 4. Scroll to Top Button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
        checkSectionVisibility(); // Check section visibility on scroll
    }

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Slideshow for Sneaker Brands (now as hero background)
    let slideIndex = 0;
    const showSlides = () => {
        let i;
        let slides = document.querySelectorAll(".hero-slideshow-container .mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active'); // Remove active class
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add('active'); // Add active class for fade transition
        slideshowTimer = setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

    // Manual navigation for slideshow
    window.plusSlides = (n) => {
        clearTimeout(slideshowTimer); // Stop auto-play
        let slides = document.querySelectorAll(".hero-slideshow-container .mySlides");
        slides[slideIndex - 1].classList.remove('active'); // Remove active from current

        slideIndex += n; // Adjust slideIndex (no -1 here as n is already -1 or 1)
        if (slideIndex < 1) { slideIndex = slides.length; } // Loop back
        if (slideIndex > slides.length) { slideIndex = 1; } // Loop forward

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add('active'); // Add active for new slide

        // Restart auto-play timer after manual interaction
        slideshowTimer = setTimeout(showSlides, 4000);
    }

    let slideshowTimer; // To store the timeout ID for clearing

    // 6. Section Reveal on Scroll
    const sectionsToReveal = document.querySelectorAll('.section-reveal');

    const checkSectionVisibility = () => {
        sectionsToReveal.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // If the top of the section is within 80% of the viewport height
            if (sectionTop < viewportHeight * 0.8) {
                section.classList.add('is-visible');
            } else {
                // Optionally remove 'is-visible' if scrolling back up
                // section.classList.remove('is-visible');
            }
        });
    };

    // 7. Gemini API Integration for Sneaker Lore
    const getSneakerLore = async (sneakerName, sneakerDescription) => {
        const loreOutputDiv = document.getElementById('sneaker-lore-output');
        const loreLoader = document.getElementById('lore-loader');
        const getLoreButton = document.getElementById('get-lore-button');

        loreOutputDiv.classList.add('hidden'); // Hide previous lore
        loreOutputDiv.textContent = ''; // Clear previous lore
        loreLoader.classList.remove('hidden'); // Show loader
        getLoreButton.disabled = true; // Disable button during loading

        const prompt = `Provide a short, interesting historical fact or piece of trivia about the ${sneakerName} sneaker. Focus on its retro significance or unique story. Keep it concise, around 2-3 sentences.`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });

        const payload = { contents: chatHistory };
        const apiKey = ""; // Canvas will provide this at runtime
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                loreOutputDiv.textContent = text;
                loreOutputDiv.classList.remove('hidden');
            } else {
                loreOutputDiv.textContent = 'Could not retrieve sneaker lore at this time. Please try again.';
                loreOutputDiv.classList.remove('hidden');
                console.error('Gemini API response structure unexpected:', result);
            }
        } catch (error) {
            loreOutputDiv.textContent = 'Failed to fetch sneaker lore. Please check your connection or try again later.';
            loreOutputDiv.classList.remove('hidden');
            console.error('Error fetching sneaker lore:', error);
        } finally {
            loreLoader.classList.add('hidden'); // Hide loader
            getLoreButton.disabled = false; // Enable button
        }
    };


    // Initial load
    loadCart();
    renderProducts();
    renderCart();

    // Trigger hero headline typing effect on load
    typeText(heroHeadline, 'Step Into Retro Style');

    // Start the slideshow
    showSlides();

    // Initial check for section visibility
    checkSectionVisibility();
})