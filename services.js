// ============================================================
// SERVICES PAGE — page-specific JavaScript
// Note: the mobile menu, button click animation, scroll-reveal
// animations, animated stat counters, back-to-top button and
// footer year are all handled by the shared script.js file,
// since this page reuses those same classes and element IDs.
// ============================================================

// ============================================
// FAQ ACCORDION TOGGLE
// Opens and closes FAQ items with smooth animation
// ============================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq-item');

    // Check if this item is already open
    const isOpen = faqItem.getAttribute('data-open') === 'true';

    // Close all other open items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach((item) => {
      if (item !== faqItem) {
        item.setAttribute('data-open', 'false');
      }
    });

    // Toggle the current item
    if (isOpen) {
      faqItem.setAttribute('data-open', 'false');
    } else {
      faqItem.setAttribute('data-open', 'true');
    }
  });
});

// Close FAQ item when clicking elsewhere (optional, for better UX)
document.addEventListener('click', (e) => {
  // If clicking on an FAQ question or answer, do nothing
  if (e.target.closest('.faq-item')) {
    return;
  }

  // Otherwise, close all FAQ items (optional behavior)
  // Uncomment the next two lines if you want this behavior
  // const allFaqItems = document.querySelectorAll('.faq-item');
  // allFaqItems.forEach((item) => item.setAttribute('data-open', 'false'));
});

// ============================================
// KEYBOARD ACCESSIBILITY FOR FAQ
// Allow keyboard navigation using Enter or Space to toggle FAQ items
// ============================================
faqQuestions.forEach((question) => {
  question.addEventListener('keydown', (e) => {
    // Trigger toggle on Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      question.click();
    }
  });
});

// ============================================
// SERVICE CARD LINK ANIMATION
// Smooth arrow animation on service card link hover
// ============================================
const serviceLinks = document.querySelectorAll('.service-link');

serviceLinks.forEach((link) => {
  let originalText = link.innerHTML;

  link.addEventListener('mouseenter', () => {
    // Arrow will animate via CSS transition (gap property)
  });
});

// ============================================
// SMOOTH SCROLL ANCHOR LINKS
// If using anchor links to sections on this page
// ============================================
const pageLinks = document.querySelectorAll('a[href^="#"]');

pageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // Skip if it's just "#" or navigation links
    if (href === '#' || link.closest('.navbar')) {
      return;
    }

    const target = document.querySelector(href);

    // Only smooth scroll if target exists and is not a modal/menu
    if (target && !link.closest('.nav-links')) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
