/* ============================================
   INSPIRE HEALTHCARE - MAIN JAVASCRIPT
   ============================================ */

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carousel = document.getElementById('testimonials-carousel');

// ============================================
// NAVIGATION MENU TOGGLE
// ============================================

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Update active link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

let currentSlide = 0;
const slides = carousel.querySelectorAll('.testimonial-card');
const slideCount = slides.length;

function showSlide(index) {
  if (index >= slideCount) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slideCount - 1;
  } else {
    currentSlide = index;
  }
  
  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? 'block' : 'none';
  });
}

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Initialize carousel
showSlide(0);

// Auto-advance carousel every 8 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 8000);

// ============================================
// CONTACT FORM SUBMISSION
// ============================================

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const formData = new FormData(contactForm);
  
  // Here you would typically send the data to a server
  // For now, we'll just show a success message
  
  // Get all inputs
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  const data = {
    name: inputs[0].value,
    email: inputs[1].value,
    phone: inputs[2].value,
    department: inputs[3].value,
    message: inputs[4].value
  };
  
  console.log('Form Data:', data);
  
  // Show success message
  showNotification('Thank you! Your message has been sent successfully. We will contact you soon.');
  
  // Reset form
  contactForm.reset();
});

// ============================================
// NOTIFICATION FUNCTION
// ============================================

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #2E7D32;
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 2000;
    max-width: 300px;
    animation: slideInRight 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================
// ADD FADE IN ANIMATION ON SCROLL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all service cards, team cards, and blog cards
const elementsToObserve = document.querySelectorAll(
  '.service-card, .team-card, .blog-card, .info-card'
);

elementsToObserve.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get current year for footer
function updateFooterYear() {
  const yearElement = document.querySelector('.footer-bottom p');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Inspire Healthcare PvT Ltd. All rights reserved.`;
  }
}

updateFooterYear();

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

window.addEventListener('load', () => {
  console.log('Inspire Healthcare Portfolio loaded successfully!');
});

// Log performance info in console
console.log('%cInspire Healthcare Portfolio', 'color: #2E7D32; font-size: 20px; font-weight: bold;');
console.log('%cModern UI Design for Healthcare', 'color: #1976D2; font-size: 14px;');
