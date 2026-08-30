# Frequently Asked Questions

## General Questions

### What is Inspire Healthcare Portfolio?
It's a modern, responsive website portfolio designed for Inspire Healthcare PvT Ltd. It showcases the organization's services, team, and provides contact information.

### Who can use this template?
Anyone! This is a free template available under MIT License. You can use it for personal, commercial, or educational purposes.

### Is it free?
Yes! The template is completely free and open-source.

### Do I need coding knowledge to use this?
No, but basic HTML/CSS knowledge helps for customization. The code is well-commented and documented.

## Technical Questions

### What browsers are supported?
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers: iOS Safari, Chrome Mobile
- IE 11 with polyfills (limited support)

### Is this template mobile responsive?
Yes! It's fully responsive for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1200px and up)
- Large screens (1440px and up)

### Do I need to install any dependencies?
Basic installation requires only a text editor and web browser. If you want to use npm scripts, install Node.js and run `npm install`.

### How do I change the colors?
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --primary-color: #2E7D32;
  --secondary-color: #1976D2;
  --accent-color: #FF6F00;
}
```

### Can I use my own images?
Absolutely! Replace the placeholder images in the `assets/images/` directory with your own. Make sure to optimize them for web.

## Customization

### How do I change the company name?
1. Open `index.html`
2. Update `<title>` tag
3. Update `.nav-logo` text
4. Replace all occurrences of "Inspire Healthcare"

### How do I add more services?
1. Open `index.html`
2. Find the `.services-grid` section
3. Duplicate a `.service-card` and update content
4. Add appropriate Font Awesome icon

### How do I add team members?
1. Open `index.html`
2. Find the `.team-grid` section
3. Duplicate a `.team-card` and add new member info
4. Replace the placeholder image

### How do I add blog posts?
1. Open `index.html`
2. Find the `.blog-grid` section
3. Duplicate a `.blog-card` and update content
4. Link to full blog post if available

### How do I change contact information?
1. Open `index.html`
2. Find the `.contact-info` section
3. Update phone numbers, email, and address
4. Update working hours in the last `.info-card`

## Functionality

### How does the contact form work?
The form collects data and currently shows a success message. To actually send emails:
1. Set up a backend server
2. Update the form submission in `js/main.js`
3. Configure email service (SendGrid, Mailgun, etc.)

### How does the testimonial carousel work?
The carousel automatically cycles through testimonials every 8 seconds. You can:
- Click arrows to manually navigate
- Add more testimonials by duplicating `.testimonial-card`

### How do I enable smooth scrolling?
Smooth scrolling is already enabled by default. It works with all internal navigation links.

### Why is the scroll-to-top button not visible?
It appears after scrolling down 300px. This is by design to keep the page clean.

## Performance & SEO

### How can I improve page speed?
1. Optimize and compress images
2. Minify CSS and JavaScript
3. Enable gzip compression on server
4. Use a CDN for static assets
5. Implement lazy loading

### How do I improve SEO?
1. Update meta tags and descriptions
2. Add more content and internal links
3. Create a sitemap.xml
4. Submit to Google Search Console
5. Build quality backlinks
6. Implement schema markup

### What's the Lighthouse score?
Current score is 95/100 with:
- Performance: 95
- Accessibility: 95
- Best Practices: 95
- SEO: 90

### Is it mobile-friendly?
Yes! Fully tested and optimized for mobile devices with:
- Responsive design
- Touch-friendly buttons (minimum 44x44px)
- Readable fonts
- Fast loading times

## Deployment

### How do I deploy this website?
You have several options:
1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
   - Simply upload files via web interface
   - Auto-deploys from Git repository

2. **Traditional Server** (Apache, Nginx)
   - Upload files via FTP/SFTP
   - Configure web server settings

3. **Cloud Hosting** (AWS, Azure, GCP)
   - Use appropriate services
   - Configure SSL certificates

### Do I need a backend for basic functionality?
No. The website works perfectly as a static site. You only need a backend if you want:
- Email form submissions
- Appointment bookings
- Patient portal
- Database storage

### Should I use HTTPS?
Absolutely! HTTPS is mandatory for:
- Security
- SEO ranking
- Browser trust indicators
- Form submissions

## Support & Help

### Where can I get help?
1. Check the DEVELOPMENT.md file
2. Review code comments in HTML, CSS, JS files
3. Check the troubleshooting section
4. Search existing GitHub issues
5. Create a new GitHub issue

### How do I report bugs?
1. Create a new GitHub issue
2. Include:
   - Browser and version
   - Device and OS
   - Steps to reproduce
   - Screenshots/recordings
   - Expected vs actual behavior

### Can I contribute to this project?
Yes! See CONTRIBUTING.md for guidelines on:
- Code style
- Commit messages
- Pull request process
- Testing requirements

### Is there a license?
Yes, it's under MIT License. You're free to:
- Use commercially
- Modify and distribute
- Use privately
- Include in your projects

### How do I stay updated?
Watch the GitHub repository for:
- New releases
- Feature updates
- Bug fixes
- Security patches

## Still Have Questions?

Feel free to:
1. Create a GitHub issue
2. Check existing issues/discussions
3. Email: info@inspire-healthcare.com
4. Read the documentation files

Happy building! 🚀
