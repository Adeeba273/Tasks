// Performance Optimization Script for ModernTech
// This script handles various performance optimizations

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.preloadCriticalResources();
        this.optimizeAnimations();
        this.setupIntersectionObserver();
        this.optimizeScrollEvents();
    }

    // Optimize images with lazy loading and WebP support
    optimizeImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Add loading attribute for native lazy loading
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add error handling
            img.addEventListener('error', () => {
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
            });
        });
    }

    // Preload critical resources
    preloadCriticalResources() {
        const criticalResources = [
            {
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
                as: 'style'
            },
            {
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                as: 'style'
            }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    }

    // Optimize animations for better performance
    optimizeAnimations() {
        // Use requestAnimationFrame for smooth animations
        const animate = (callback) => {
            requestAnimationFrame(callback);
        };

        // Throttle scroll events
        let ticking = false;
        const throttleScroll = (callback) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    callback();
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Apply to scroll-based animations
        window.addEventListener('scroll', () => {
            throttleScroll(() => {
                this.handleScrollAnimations();
            });
        });
    }

    // Setup Intersection Observer for better performance
    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Load images when they come into view
                    if (entry.target.tagName === 'IMG') {
                        this.loadImage(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all images and elements with animation classes
        document.querySelectorAll('img, .animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Load image with error handling
    loadImage(img) {
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    }

    // Handle scroll-based animations
    handleScrollAnimations() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.parallax');
        
        parallax.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Optimize scroll events with passive listeners
    optimizeScrollEvents() {
        // Use passive event listeners for better performance
        const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
        
        passiveEvents.forEach(eventType => {
            document.addEventListener(eventType, () => {}, { passive: true });
        });
    }

    // Debounce function for search and other input events
    debounce(func, wait) {
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

    // Throttle function for resize events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Optimize form submissions
    optimizeForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                // Prevent double submissions
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    setTimeout(() => {
                        submitBtn.disabled = false;
                    }, 2000);
                }
            });
        });
    }

    // Monitor performance metrics
    monitorPerformance() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('LCP:', entry.startTime);
                }
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('FID:', entry.processingStart - entry.startTime);
                }
            }).observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                    }
                }
            }).observe({ entryTypes: ['layout-shift'] });
        }
    }

    // Optimize memory usage
    optimizeMemory() {
        // Clean up event listeners when elements are removed
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.removedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Remove event listeners from removed elements
                        node.replaceWith(node.cloneNode(true));
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    new PerformanceOptimizer();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerformanceOptimizer;
}

