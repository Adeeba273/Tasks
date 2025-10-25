// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.5,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        image: "🎧",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        category: "electronics",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        description: "Advanced fitness tracking with heart rate monitor, GPS, and water resistance.",
        image: "⌚",
        badge: "New"
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        category: "clothing",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.2,
        description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
        image: "👕",
        badge: null
    },
    {
        id: 4,
        name: "Denim Jeans",
        category: "clothing",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.3,
        description: "Classic fit denim jeans with stretch for comfort and durability.",
        image: "👖",
        badge: "Sale"
    },
    {
        id: 5,
        name: "Coffee Maker",
        category: "home",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.6,
        description: "Programmable coffee maker with 12-cup capacity and auto-shutoff feature.",
        image: "☕",
        badge: null
    },
    {
        id: 6,
        name: "Garden Tools Set",
        category: "home",
        price: 45.99,
        originalPrice: 65.99,
        rating: 4.4,
        description: "Complete set of gardening tools including trowel, pruners, and gloves.",
        image: "🌱",
        badge: "Popular"
    },
    {
        id: 7,
        name: "Yoga Mat",
        category: "sports",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        description: "Non-slip yoga mat with extra cushioning for comfort during workouts.",
        image: "🧘",
        badge: null
    },
    {
        id: 8,
        name: "Running Shoes",
        category: "sports",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.5,
        description: "Lightweight running shoes with responsive cushioning and breathable mesh.",
        image: "👟",
        badge: "Top Rated"
    },
    {
        id: 9,
        name: "JavaScript Guide",
        category: "books",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.9,
        description: "Comprehensive guide to modern JavaScript development and best practices.",
        image: "📚",
        badge: "Bestseller"
    },
    {
        id: 10,
        name: "Design Patterns Book",
        category: "books",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.6,
        description: "Essential design patterns for software developers with practical examples.",
        image: "📖",
        badge: null
    },
    {
        id: 11,
        name: "Gaming Laptop",
        category: "electronics",
        price: 1299.99,
        originalPrice: 1599.99,
        rating: 4.7,
        description: "High-performance gaming laptop with RTX graphics and 16GB RAM.",
        image: "💻",
        badge: "Premium"
    },
    {
        id: 12,
        name: "Winter Jacket",
        category: "clothing",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.4,
        description: "Warm winter jacket with water-resistant outer shell and fleece lining.",
        image: "🧥",
        badge: "Winter Sale"
    },
    {
        id: 13,
        name: "Air Purifier",
        category: "home",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.5,
        description: "HEPA air purifier with smart features and quiet operation for clean air.",
        image: "🌬️",
        badge: null
    },
    {
        id: 14,
        name: "Tennis Racket",
        category: "sports",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.3,
        description: "Professional tennis racket with carbon fiber construction for power and control.",
        image: "🎾",
        badge: "Pro Choice"
    },
    {
        id: 15,
        name: "Cookbook Collection",
        category: "books",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.8,
        description: "Collection of 50 delicious recipes from around the world with beautiful photos.",
        image: "📖",
        badge: "Chef's Pick"
    },
    {
        id: 16,
        name: "Smartphone",
        category: "electronics",
        price: 699.99,
        originalPrice: 799.99,
        rating: 4.6,
        description: "Latest smartphone with advanced camera system and all-day battery life.",
        image: "📱",
        badge: "Latest"
    },
    {
        id: 17,
        name: "Summer Dress",
        category: "clothing",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.1,
        description: "Lightweight summer dress perfect for warm weather and casual occasions.",
        image: "👗",
        badge: null
    },
    {
        id: 18,
        name: "Vacuum Cleaner",
        category: "home",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.4,
        description: "Cordless vacuum cleaner with powerful suction and long-lasting battery.",
        image: "🧹",
        badge: "Smart Home"
    },
    {
        id: 19,
        name: "Basketball",
        category: "sports",
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.2,
        description: "Official size basketball with premium leather construction for indoor/outdoor use.",
        image: "🏀",
        badge: null
    },
    {
        id: 20,
        name: "Programming Fundamentals",
        category: "books",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        description: "Complete guide to programming fundamentals suitable for beginners and intermediates.",
        image: "💻",
        badge: "Student Favorite"
    },
    {
        id: 21,
        name: "Tablet",
        category: "electronics",
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.3,
        description: "10-inch tablet with high-resolution display and long battery life for work and entertainment.",
        image: "📱",
        badge: "Portable"
    },
    {
        id: 22,
        name: "Hoodie",
        category: "clothing",
        price: 44.99,
        originalPrice: 64.99,
        rating: 4.5,
        description: "Comfortable hoodie with kangaroo pocket and adjustable drawstring hood.",
        image: "👕",
        badge: "Cozy"
    },
    {
        id: 23,
        name: "Dumbbell Set",
        category: "sports",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.6,
        description: "Adjustable dumbbell set with multiple weight options for home workouts.",
        image: "🏋️",
        badge: "Home Gym"
    },
    {
        id: 24,
        name: "Mystery Novel",
        category: "books",
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.4,
        description: "Bestselling mystery novel with intriguing plot twists and compelling characters.",
        image: "📚",
        badge: "Page Turner"
    }
];

// Global variables
let filteredProducts = [...products];
let currentSort = 'name-asc';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderProducts();
    updateResultsCount();
});

// Initialize filter event listeners
function initializeFilters() {
    // Category filters
    const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Price range sliders
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const minPriceDisplay = document.getElementById('minPrice');
    const maxPriceDisplay = document.getElementById('maxPrice');

    priceMin.addEventListener('input', function() {
        if (parseInt(this.value) >= parseInt(priceMax.value)) {
            this.value = priceMax.value;
        }
        minPriceDisplay.textContent = `$${this.value}`;
        applyFilters();
    });

    priceMax.addEventListener('input', function() {
        if (parseInt(this.value) <= parseInt(priceMin.value)) {
            this.value = priceMin.value;
        }
        maxPriceDisplay.textContent = `$${this.value}`;
        applyFilters();
    });
}

// Apply all active filters
function applyFilters() {
    const selectedCategories = getSelectedCategories();
    const selectedRatings = getSelectedRatings();
    const priceRange = getPriceRange();

    filteredProducts = products.filter(product => {
        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false;
        }

        // Rating filter
        if (selectedRatings.length > 0) {
            const productRating = Math.floor(product.rating);
            if (!selectedRatings.includes(productRating)) {
                return false;
            }
        }

        // Price range filter
        if (product.price < priceRange.min || product.price > priceRange.max) {
            return false;
        }

        return true;
    });

    // Apply current sorting
    sortProducts(false);
    renderProducts();
    updateResultsCount();
}

// Get selected categories
function getSelectedCategories() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][value]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Get selected ratings
function getSelectedRatings() {
    const ratingCheckboxes = document.querySelectorAll('.rating-filter input[type="checkbox"]:checked');
    return Array.from(ratingCheckboxes).map(cb => parseInt(cb.value));
}

// Get price range
function getPriceRange() {
    const minPrice = parseInt(document.getElementById('priceMin').value);
    const maxPrice = parseInt(document.getElementById('priceMax').value);
    return { min: minPrice, max: maxPrice };
}

// Sort products
function sortProducts(updateDisplay = true) {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect.value;
    currentSort = sortValue;

    filteredProducts.sort((a, b) => {
        switch (sortValue) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating-desc':
                return b.rating - a.rating;
            case 'rating-asc':
                return a.rating - b.rating;
            default:
                return 0;
        }
    });

    if (updateDisplay) {
        renderProducts();
        updateResultsCount();
    }
}

// Render products to the DOM
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');

    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Create product card HTML
function createProductCard(product) {
    const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const stars = generateStars(product.rating);
    
    return `
        <div class="product-card" data-category="${product.category}" data-rating="${product.rating}" data-price="${product.price}">
            <div class="product-image">
                ${product.image}
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="rating-stars">${stars}</div>
                    <span class="rating-text">${product.rating} (${Math.floor(Math.random() * 100 + 10)} reviews)</span>
                </div>
                <div class="product-price">
                    <div>
                        <span class="price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    ${discountPercentage > 0 ? `<span class="discount">-${discountPercentage}%</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Update results count
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    const count = filteredProducts.length;
    resultsCount.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
}

// Clear all filters
function clearAllFilters() {
    // Reset category checkboxes
    const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });

    // Reset price range
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const minPriceDisplay = document.getElementById('minPrice');
    const maxPriceDisplay = document.getElementById('maxPrice');
    
    priceMin.value = 0;
    priceMax.value = 1000;
    minPriceDisplay.textContent = '$0';
    maxPriceDisplay.textContent = '$1000';

    // Reset sort
    document.getElementById('sortSelect').value = 'name-asc';
    currentSort = 'name-asc';

    // Apply filters
    applyFilters();
}

// Add smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add loading animation
function showLoading() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i>Loading products...</div>';
}

// Add search functionality (bonus feature)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search products...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        padding: 12px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        margin-bottom: 20px;
    `;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        // Apply other filters
        applyFilters();
    });

    const sidebar = document.querySelector('.sidebar');
    sidebar.insertBefore(searchInput, sidebar.firstChild);
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    addSearchFunctionality();
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    }
});

// Add product card click handlers for future enhancement
document.addEventListener('click', function(e) {
    const productCard = e.target.closest('.product-card');
    if (productCard) {
        // Future: Navigate to product detail page
        console.log('Product clicked:', productCard.querySelector('.product-name').textContent);
    }
});

// Performance optimization: Debounce filter application
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced filtering for better performance
const debouncedApplyFilters = debounce(applyFilters, 300);

// Update filter event listeners to use debounced version
document.addEventListener('DOMContentLoaded', function() {
    const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', debouncedApplyFilters);
    });

    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    
    priceMin.addEventListener('input', debouncedApplyFilters);
    priceMax.addEventListener('input', debouncedApplyFilters);
});

