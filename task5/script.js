// ModernTech E-commerce Application
class ModernTechApp {
    constructor() {
        this.products = [];
        this.cart = [];
        this.filteredProducts = [];
        this.currentCategory = 'all';
        this.currentSort = 'default';
        this.isLoading = false;
        
        this.init();
    }

    init() {
        this.loadProducts();
        this.bindEvents();
        this.updateCartCount();
    }

    // Load products data
    loadProducts() {
        this.products = [
            {
                id: 1,
                name: "iPhone 15 Pro",
                category: "smartphones",
                price: 999,
                image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Latest iPhone with A17 Pro chip and titanium design",
                badge: "New",
                inStock: true
            },
            {
                id: 2,
                name: "MacBook Pro 16\"",
                category: "laptops",
                price: 2499,
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Powerful laptop with M3 Max chip for professionals",
                badge: "Pro",
                inStock: true
            },
            {
                id: 3,
                name: "AirPods Pro 2",
                category: "headphones",
                price: 249,
                image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Active noise cancellation with spatial audio",
                badge: "Best Seller",
                inStock: true
            },
            {
                id: 4,
                name: "Samsung Galaxy S24 Ultra",
                category: "smartphones",
                price: 1199,
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Android flagship with S Pen and 200MP camera",
                badge: "Premium",
                inStock: true
            },
            {
                id: 5,
                name: "Dell XPS 13",
                category: "laptops",
                price: 1299,
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Ultrabook with InfinityEdge display",
                badge: "Editor's Choice",
                inStock: true
            },
            {
                id: 6,
                name: "Sony WH-1000XM5",
                category: "headphones",
                price: 399,
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Industry-leading noise cancellation",
                badge: "Award Winner",
                inStock: true
            },
            {
                id: 7,
                name: "Apple Watch Series 9",
                category: "accessories",
                price: 399,
                image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Advanced health monitoring and fitness tracking",
                badge: "Health Focus",
                inStock: true
            },
            {
                id: 8,
                name: "Magic Keyboard",
                category: "accessories",
                price: 99,
                image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Wireless keyboard with Touch ID",
                badge: "Essential",
                inStock: true
            }
        ];
        
        this.filteredProducts = [...this.products];
        this.renderProducts();
    }

    // Bind event listeners
    bindEvents() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        
        mobileMenuBtn?.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        
        searchInput?.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        searchBtn?.addEventListener('click', () => {
            this.handleSearch(searchInput.value);
        });

        // Filter and sort
        const categoryFilter = document.getElementById('category-filter');
        const sortFilter = document.getElementById('sort-filter');
        
        categoryFilter?.addEventListener('change', (e) => {
            this.currentCategory = e.target.value;
            this.applyFilters();
        });
        
        sortFilter?.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.applyFilters();
        });

        // Cart functionality
        const cartBtn = document.getElementById('cart-btn');
        const cartModal = document.getElementById('cart-modal');
        const closeCart = document.getElementById('close-cart');
        
        cartBtn?.addEventListener('click', () => {
            cartModal.classList.add('active');
            this.renderCart();
        });
        
        closeCart?.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });

        // Close cart when clicking outside
        cartModal?.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });

        // Checkout
        const checkoutBtn = document.getElementById('checkout-btn');
        checkoutBtn?.addEventListener('click', () => {
            this.handleCheckout();
        });

        // Contact form
        const contactForm = document.getElementById('contact-form');
        contactForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactForm(e);
        });

        // Newsletter
        const newsletterBtn = document.getElementById('newsletter-btn');
        newsletterBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleNewsletter();
        });

        // Shop now button
        const shopNowBtn = document.getElementById('shop-now-btn');
        shopNowBtn?.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                // Close mobile menu
                navMenu.classList.remove('active');
            });
        });
    }

    // Handle search functionality
    handleSearch(query) {
        if (!query.trim()) {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.applyFilters();
    }

    // Apply filters and sorting
    applyFilters() {
        let filtered = [...this.filteredProducts];

        // Category filter
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }

        // Sort products
        switch (this.currentSort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Keep original order
                break;
        }

        this.renderProducts(filtered);
    }

    // Render products
    renderProducts(products = this.filteredProducts) {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div class="text-center" style="grid-column: 1 / -1; padding: 2rem;">
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">$${product.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="app.addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Add product to cart
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            });
        }

        this.updateCartCount();
        this.showNotification(`${product.name} added to cart!`);
        
        // Animate cart count
        const cartCount = document.getElementById('cart-count');
        cartCount.classList.add('animate');
        setTimeout(() => cartCount.classList.remove('animate'), 600);
    }

    // Remove product from cart
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartCount();
        this.renderCart();
    }

    // Update quantity
    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;
        
        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.updateCartCount();
            this.renderCart();
        }
    }

    // Update cart count
    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    // Render cart modal
    renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        if (!cartItems || !cartTotal) return;

        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="text-center" style="padding: 2rem;">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                </div>
            `;
            cartTotal.textContent = '0.00';
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="app.removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }

    // Handle checkout
    handleCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'error');
            return;
        }

        // Simulate checkout process
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.showNotification('Order placed successfully! Thank you for your purchase.', 'success');
            this.cart = [];
            this.updateCartCount();
            this.renderCart();
            document.getElementById('cart-modal').classList.remove('active');
        }, 2000);
    }

    // Handle contact form
    handleContactForm(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            e.target.reset();
        }, 1500);
    }

    // Handle newsletter subscription
    handleNewsletter() {
        const email = document.getElementById('newsletter-email').value;
        
        if (!email || !this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return;
        }

        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.showNotification('Successfully subscribed to newsletter!', 'success');
            document.getElementById('newsletter-email').value = '';
        }, 1000);
    }

    // Utility functions
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    showLoading() {
        const loadingSpinner = document.getElementById('loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'flex';
        }
        document.body.classList.add('loading');
    }

    hideLoading() {
        const loadingSpinner = document.getElementById('loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
        document.body.classList.remove('loading');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ModernTechApp();
});

// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalImages = [
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});

// Service Worker for caching (PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModernTechApp;
}

