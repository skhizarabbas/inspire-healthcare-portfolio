/* ============================================
   INSPIRE HEALTHCARE - ANIMATIONS SCRIPT
   ============================================ */

// ============================================
// FADE OUT ANIMATION
// ============================================

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(46, 125, 50, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(46, 125, 50, 0.8);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

document.head.appendChild(styleSheet);

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================

const parallaxElements = document.querySelectorAll('.hero-image, .about-image');

if (parallaxElements.length > 0) {
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const scrollPosition = window.pageYOffset;
      const elementPosition = element.getBoundingClientRect().top + scrollPosition;
      const distance = scrollPosition - elementPosition;
      
      element.style.transform = `translateY(${distance * 0.5}px)`;
    });
  });
}

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

const stats = document.querySelectorAll('.stat h3');
let hasAnimated = false;

const animateCounters = () => {
  stats.forEach(stat => {
    const text = stat.textContent.trim();
    const isPercentage = text.includes('%');
    const number = parseInt(text);
    
    if (isNaN(number)) return;
    
    let current = 0;
    const increment = number / 50;
    
    const updateCounter = () => {
      if (current < number) {
        current += increment;
        stat.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = text;
      }
    };
    
    updateCounter();
  });
};

// Trigger counter animation when stats section comes into view
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsSection);
}

// ============================================
// TEXT ANIMATION ON SCROLL
// ============================================

const animateTextOnScroll = () => {
  const textElements = document.querySelectorAll('h2, h3, .hero-title, .hero-subtitle');
  
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideUp 0.6s ease forwards';
        textObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  textElements.forEach(element => {
    element.style.opacity = '0';
    textObserver.observe(element);
  });
};

window.addEventListener('load', animateTextOnScroll);

// ============================================
// HOVER EFFECTS FOR CARDS
// ============================================

const cards = document.querySelectorAll('.service-card, .team-card, .blog-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = 'var(--shadow-lg)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'var(--shadow-md)';
  });
});

// ============================================
// LINK HOVER EFFECTS
// ============================================

const links = document.querySelectorAll('a:not([href^="mailto"]):not([href^="tel"])');

links.forEach(link => {
  link.addEventListener('mouseenter', function() {
    if (this.classList.contains('service-link') || this.classList.contains('read-more')) {
      this.style.transform = 'translateX(5px)';
    }
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0)';
  });
});

// ============================================
// INPUT FOCUS EFFECTS
// ============================================

const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.borderColor = 'var(--primary-color)';
    this.style.boxShadow = '0 0 0 3px rgba(46, 125, 50, 0.1)';
  });
  
  input.addEventListener('blur', function() {
    this.style.borderColor = 'var(--border-color)';
    this.style.boxShadow = 'none';
  });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

const createScrollProgress = () => {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #2E7D32, #1976D2);
    z-index: 2000;
    width: 0%;
    transition: width 0.1s ease;
  `;
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = scrollProgress + '%';
  });
};

createScrollProgress();

// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

const updateDynamicContent = () => {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector('.footer-bottom p');
  if (footerYear) {
    footerYear.textContent = `© ${year} Inspire Healthcare PvT Ltd. All rights reserved.`;
  }
};

window.addEventListener('load', updateDynamicContent);

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add focus outlines
const focusElements = document.querySelectorAll('button, a, input, select, textarea');
focusElements.forEach(element => {
  element.addEventListener('focus', function() {
    this.style.outline = `2px solid var(--primary-color)`;
    this.style.outlineOffset = '2px';
  });
  
  element.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

console.log('%cAnimations initialized', 'color: #FF6F00; font-weight: bold;');
