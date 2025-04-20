// Navigation Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    }
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close all other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// Reviews Slider
const reviewSlider = document.querySelector('.reviews-slider');
const reviewCards = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideInterval;

// Initialize the slider
function initSlider() {
  if (window.innerWidth > 768) {
    // Desktop slider behavior
    showSlide(currentSlide);
    startAutoSlide();
  } else {
    // Mobile behavior - stack cards vertically
    reviewSlider.style.transform = 'translateX(0)';
  }
}

// Show the specified slide
function showSlide(index) {
  if (window.innerWidth <= 768) return; // Don't slide on mobile
  
  const slideWidth = reviewCards[0].offsetWidth + 32; // card width + gap
  reviewSlider.style.transform = `translateX(-${index * slideWidth}px)`;
  
  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Start auto-sliding
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % reviewCards.length;
    showSlide(currentSlide);
  }, 5000);
}

// Stop auto-sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Dot click event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    stopAutoSlide();
    startAutoSlide();
  });
});

// Initialize slider on page load and resize
window.addEventListener('load', initSlider);
window.addEventListener('resize', initSlider);

// Checkout Logic
const checkoutButtons = document.querySelectorAll('.checkout-btn');
const checkoutSection = document.getElementById('checkout');
const cartProductName = document.getElementById('cart-product-name');
const cartProductPrice = document.getElementById('cart-product-price');
const quantityInput = document.getElementById('quantity');
const subtotalElement = document.getElementById('subtotal');
const taxElement = document.getElementById('tax');
const totalElement = document.getElementById('total');

// Product details
const products = {
  lite: {
    name: 'TechNest Lite',
    price: 89.99
  },
  pro: {
    name: 'TechNest Pro',
    price: 129.99
  },
  elite: {
    name: 'TechNest Elite',
    price: 179.99
  }
};

// Update cart totals
function updateTotals() {
  const price = parseFloat(cartProductPrice.textContent.replace('$', ''));
  const quantity = parseInt(quantityInput.value);
  
  const subtotal = price * quantity;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + tax;
  
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// Handle checkout button clicks
checkoutButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const productType = button.getAttribute('data-product');
    const product = products[productType];
    
    // Update cart with selected product
    cartProductName.textContent = product.name;
    cartProductPrice.textContent = `$${product.price.toFixed(2)}`;
    quantityInput.value = 1;
    
    // Update totals
    updateTotals();
    
    // Show checkout section
    checkoutSection.classList.remove('hidden');
    
    // Smooth scroll to checkout
    window.scrollTo({
      top: checkoutSection.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// Quantity buttons
const minusButton = document.querySelector('.qty-btn.minus');
const plusButton = document.querySelector('.qty-btn.plus');

minusButton.addEventListener('click', () => {
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
    updateTotals();
  }
});

plusButton.addEventListener('click', () => {
  if (quantityInput.value < 5) {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotals();
  }
});

// Update totals when quantity is changed manually
quantityInput.addEventListener('change', () => {
  if (quantityInput.value < 1) quantityInput.value = 1;
  if (quantityInput.value > 5) quantityInput.value = 5;
  updateTotals();
});

// Form submission
const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simulate form submission
  const submitButton = paymentForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  submitButton.disabled = true;
  submitButton.textContent = 'Processing...';
  
  setTimeout(() => {
    // Show success message
    checkoutSection.innerHTML = `
      <div class="container success-container">
        <div class="success-message">
          <i class="fas fa-check-circle"></i>
          <h2>Thank you for your order!</h2>
          <p>Your order has been received and is being processed. A confirmation email will be sent to your address shortly.</p>
          <a href="#" class="btn-primary">Continue Shopping</a>
        </div>
      </div>
    `;
    
    // Scroll to top of checkout section
    window.scrollTo({
      top: checkoutSection.offsetTop - 100,
      behavior: 'smooth'
    });
  }, 2000);
});

// Animations on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .pricing-card, .review-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // If element is in viewport
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.feature-card, .pricing-card, .review-card');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger initial animation
  animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Sticky header effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 100) {
    navbar.style.boxShadow = 'var(--shadow)';
  } else {
    navbar.style.boxShadow = 'var(--shadow-sm)';
  }
}); 