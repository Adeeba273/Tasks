# ModernTech - Premium Electronics E-commerce Store

A modern, responsive e-commerce web application built with HTML5, CSS3, and JavaScript. Features a clean design, mobile-first approach, and optimized performance.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse through 8+ premium electronics products
- **Shopping Cart**: Add/remove items, update quantities, view total
- **Search & Filter**: Real-time search and category filtering
- **Responsive Design**: Mobile-first approach with cross-browser compatibility
- **PWA Support**: Installable web app with offline capabilities

### Performance Optimizations
- **Lazy Loading**: Images load only when needed
- **Minified Assets**: Compressed CSS and JavaScript files
- **Service Worker**: Caching for offline functionality
- **Preloading**: Critical resources loaded first
- **Optimized Images**: WebP format with fallbacks

### User Experience
- **Smooth Animations**: CSS transitions and hover effects
- **Interactive Elements**: Dynamic cart updates and notifications
- **Form Validation**: Client-side validation for contact forms
- **Accessibility**: ARIA labels and keyboard navigation support

## 📁 Project Structure

```
task5/
├── index.html          # Main HTML file
├── styles.css          # Main CSS file
├── styles.min.css      # Minified CSS for production
├── script.js           # Main JavaScript file
├── script.min.js       # Minified JavaScript for production
├── sw.js              # Service Worker for PWA
├── manifest.json      # PWA manifest file
└── README.md          # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript ES6+**: Classes, modules, and modern syntax
- **PWA**: Service Worker and Web App Manifest
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter font family

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for PWA features)

### Installation

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **For PWA features**, serve through a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Development vs Production

- **Development**: Use `styles.css` and `script.js` for easier debugging
- **Production**: Use `styles.min.css` and `script.min.js` for optimized performance

## 🎨 Customization

### Colors
Update CSS variables in `:root` selector:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    /* ... other variables */
}
```

### Products
Modify the `products` array in `script.js`:
```javascript
this.products = [
    {
        id: 1,
        name: "Product Name",
        category: "category",
        price: 999,
        image: "image-url",
        description: "Product description",
        badge: "Badge",
        inStock: true
    }
    // ... more products
];
```

## 📱 Browser Compatibility

### Supported Browsers
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### Mobile Support
- **iOS Safari**: 12+
- **Chrome Mobile**: 60+
- **Samsung Internet**: 8+

## ⚡ Performance Features

### Loading Optimizations
- **Critical CSS**: Inline critical styles
- **Lazy Loading**: Images load on scroll
- **Preloading**: Critical resources preloaded
- **Minification**: Compressed assets

### Caching Strategy
- **Service Worker**: Caches static assets
- **Browser Cache**: Leverages HTTP caching
- **Offline Support**: Basic functionality without internet

## 🔧 Development

### Code Structure
- **Modular JavaScript**: Class-based architecture
- **CSS Organization**: Logical grouping and comments
- **Semantic HTML**: Proper document structure

### Best Practices
- **Mobile-First**: Responsive design approach
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG 2.1 compliance
- **SEO**: Meta tags and semantic markup

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting option
- **AWS S3**: Scalable cloud hosting

### Server Requirements
- **HTTPS**: Required for PWA features
- **MIME Types**: Proper content-type headers
- **Caching**: Configure cache headers

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimization Techniques
- **Image Optimization**: WebP with fallbacks
- **Code Splitting**: Modular JavaScript
- **Tree Shaking**: Remove unused code
- **Compression**: Gzip/Brotli compression

## 🐛 Troubleshooting

### Common Issues

1. **PWA not installing**
   - Ensure HTTPS connection
   - Check manifest.json validity
   - Verify service worker registration

2. **Images not loading**
   - Check image URLs
   - Verify CORS settings
   - Test lazy loading implementation

3. **Cart not updating**
   - Check JavaScript console for errors
   - Verify event listeners are bound
   - Test in different browsers

### Debug Mode
Enable debug logging by adding to console:
```javascript
localStorage.setItem('debug', 'true');
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- **Email**: info@moderntech.com
- **Issues**: GitHub Issues page
- **Documentation**: This README file

---

**ModernTech** - Your trusted partner in technology 🚀

