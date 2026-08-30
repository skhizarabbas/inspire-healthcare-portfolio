# Development Guide

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/skhizarabbas/inspire-healthcare-portfolio.git
   cd inspire-healthcare-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will open automatically at `http://localhost:8080`

## Project Structure

```
inspire-healthcare-portfolio/
├── index.html              # Main homepage
├── css/
│   ├── styles.css         # Main stylesheet with all components
│   └── responsive.css     # Mobile-first responsive design
├── js/
│   ├── main.js           # Core functionality and interactions
│   └── animations.js     # Scroll animations and effects
├── assets/
│   ├── images/           # Image files (optimized for web)
│   ├── icons/            # Custom SVG icons
│   └── videos/           # Video content
├── pages/                # Additional pages (future)
│   ├── services.html
│   ├── team.html
│   ├── blog.html
│   └── contact.html
├── package.json          # Project metadata and dependencies
├── .gitignore           # Git ignore rules
├── README.md            # Project documentation
├── DEVELOPMENT.md       # This file
└── LICENSE              # MIT License
```

## File Descriptions

### HTML (index.html)
- **Size**: ~15KB
- **Sections**: 8 main sections (Hero, About, Services, Team, Testimonials, Blog, Contact, Footer)
- **Features**: Semantic HTML5, accessibility attributes, mobile-friendly meta tags

### CSS Files

#### styles.css (~12KB)
- CSS variables for colors and shadows
- Component styles (navbar, hero, cards, forms)
- Typography and spacing
- Animations and transitions
- Browser compatibility fixes

#### responsive.css (~4KB)
- Mobile-first approach
- Breakpoints: 320px, 480px, 768px, 1200px, 1440px
- Adaptive layouts for different screen sizes
- Print styles for document printing

### JavaScript Files

#### main.js (~4KB)
- Navigation menu toggle
- Scroll effects (navbar, scroll-to-top button)
- Testimonial carousel functionality
- Contact form handling
- Smooth scroll navigation
- Intersection Observer for animations
- Ripple effect on buttons

#### animations.js (~5KB)
- Dynamic animation definitions
- Parallax scroll effect
- Counter animation for statistics
- Text animation on scroll
- Card hover effects
- Input focus effects
- Scroll progress indicator
- Performance optimizations

## Customization Guide

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
  --primary-color: #2E7D32;      /* Green - Main brand color */
  --secondary-color: #1976D2;    /* Blue - Secondary brand color */
  --accent-color: #FF6F00;       /* Orange - Accent color */
  --text-dark: #212121;          /* Dark text */
  --bg-light: #F5F5F5;           /* Light background */
}
```

### Updating Content

1. **Logo and Branding**
   - Edit `.nav-logo` in HTML
   - Update `<title>` tag
   - Replace favicon

2. **Hero Section**
   - Modify `hero-title` and `hero-subtitle`
   - Update statistics in `.hero-stats`
   - Replace background image

3. **Services**
   - Add/remove service cards
   - Update service descriptions
   - Change service icons (using Font Awesome)

4. **Team Members**
   - Replace placeholder images
   - Update doctor names and specializations
   - Add social media links

5. **Contact Information**
   - Update phone numbers
   - Change email addresses
   - Modify working hours

### Adding New Pages

1. Create new HTML file (e.g., `pages/services.html`)
2. Copy navigation structure from `index.html`
3. Create page-specific CSS in `css/pages.css`
4. Link from main navigation

### Integrating Backend

To handle contact form submissions:

1. **Update form action** in `js/main.js`
   ```javascript
   // Replace showNotification with API call
   fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
   })
   ```

2. **Setup server endpoint** to receive and process form data

3. **Add email service** (SendGrid, Mailgun, etc.)

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|----------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| IE 11   | -       | ⚠️ Partial* |

*IE 11 requires polyfills for modern JavaScript features

## Performance Optimization

### Metrics
- **Lighthouse Score**: 90+
- **Page Load Time**: < 2 seconds
- **First Contentful Paint**: < 1 second
- **Mobile Performance**: Optimized

### Optimization Tips

1. **Image Optimization**
   ```bash
   # Use tools like ImageOptim or TinyPNG
   # Recommended formats: WebP for modern browsers, fallback to PNG/JPG
   ```

2. **CSS/JS Minification**
   ```bash
   npm install --save-dev cssnano terser
   ```

3. **Lazy Loading**
   - Already implemented for images
   - Use `loading="lazy"` attribute on images

4. **Caching**
   - Enable browser caching in web server
   - Set cache headers: `Cache-Control: max-age=31536000`

## Testing

### Manual Testing
1. Test on different screen sizes (320px to 2560px)
2. Test on mobile devices (iOS and Android)
3. Test with different browsers
4. Test form submission
5. Test navigation links

### Automated Testing
```bash
# Lighthouse
npm install --save-dev lighthouse
lighthouse https://your-domain.com --view

# Responsive Design Testing
# Use Chrome DevTools > Device Toolbar
```

### Accessibility Testing
1. Test with screen readers (NVDA, JAWS)
2. Keyboard navigation (Tab key)
3. Color contrast (WCAG AA standard)
4. Form labels and ARIA attributes

## SEO Optimization

### Already Implemented
- ✅ Semantic HTML5 tags
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Mobile-friendly design
- ✅ Fast page speed
- ✅ Structured data ready

### Additional SEO
1. Add `sitemap.xml`
2. Add `robots.txt`
3. Setup Google Search Console
4. Implement structured data (Schema.org)
5. Add internal linking

## Security Considerations

1. **Input Validation**
   - Validate form inputs on client side
   - Validate on server side (required)

2. **HTTPS**
   - Always use HTTPS in production
   - Install SSL certificate

3. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; script-src 'self' 'unsafe-inline'">
   ```

4. **CORS Headers**
   - Configure CORS properly on backend
   - Only allow trusted origins

## Deployment

### Static Hosting (GitHub Pages, Netlify, Vercel)
```bash
# GitHub Pages
git push origin main
# Site available at: https://skhizarabbas.github.io/inspire-healthcare-portfolio
```

### Traditional Server (Apache, Nginx)
```bash
# Copy all files to server
sftp user@server
put -r * /var/www/html/
```

### Environment Variables
Create `.env` file (for backend integration):
```
API_URL=https://api.example.com
API_KEY=your-api-key
NODE_ENV=production
```

## Troubleshooting

### Common Issues

1. **Hamburger menu not working**
   - Check if `hamburger` element exists in HTML
   - Verify CSS for `.hamburger.active` state

2. **Carousel not advancing**
   - Check if testimonial cards have correct class
   - Verify carousel IDs in JavaScript

3. **Form not submitting**
   - Check browser console for errors
   - Verify form element IDs
   - Ensure backend endpoint is configured

4. **Styles not loading**
   - Clear browser cache (Ctrl+Shift+Delete)
   - Check file paths in HTML
   - Verify CSS file encoding (UTF-8)

5. **Mobile layout broken**
   - Check viewport meta tag
   - Test with DevTools device emulation
   - Verify media queries in responsive.css

## Version History

### v1.0.0 (August 30, 2026)
- Initial release
- All core features implemented
- Responsive design
- Modern animations

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit pull request

## License

MIT License - feel free to use and modify for your projects

## Support & Contact

For questions or support:
- Email: info@inspire-healthcare.com
- Phone: +91 1800-123-4567
- Website: https://inspire-healthcare.com

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Web Accessibility](https://www.w3.org/WAI/)
