// ============================================
// 1. MOBILE MENU TOGGLE
// Shows/hides the nav links when the hamburger icon is clicked
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  // Toggle the "open" class which is defined in style.css
  navLinks.classList.toggle('open');

  // Animate the hamburger icon into an "X" shape when open
  menuToggle.classList.toggle('active');
});

// Close the mobile menu automatically when a link is clicked
const allNavLinks = navLinks.querySelectorAll('a');
allNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// 2. BUTTON CLICK ANIMATION
// Adds a quick "press down" effect whenever any button is clicked
// ============================================
const allButtons = document.querySelectorAll('.btn');

allButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');

    // Remove the class shortly after so the animation can replay next time
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 150);
  });
});

// ============================================
// 3. SMOOTH SCROLL FOR "EXPLORE PROJECTS" BUTTON
// If this hero section is placed above a section with id="projects",
// clicking the button will smoothly scroll down to it.
// ============================================
const exploreBtn = document.getElementById('exploreBtn');

exploreBtn.addEventListener('click', (e) => {
  const target = document.querySelector('#projects');

  // Only smooth-scroll if a matching section actually exists on the page
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// ============================================
// 4. SCROLL REVEAL ANIMATIONS
// Fades + slides each ".reveal" element into place the first
// time it enters the viewport, using IntersectionObserver so we
// don't have to listen to the scroll event manually.
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealObserver.observe(el));

// ============================================
// 5. ANIMATED STAT COUNTERS
// Counts each number up from 0 to its target value when the
// Community Statistics section scrolls into view.
// ============================================
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500; // total animation length in milliseconds
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    el.textContent = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target; // land exactly on the target number
    }
  }

  requestAnimationFrame(updateCount);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach((num) => statsObserver.observe(num));

// ============================================
// 6. BACK TO TOP BUTTON
// Shows the button once the user scrolls down the page,
// and smoothly scrolls back to the top when clicked.
// ============================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// 7. FOOTER — CURRENT YEAR
// Keeps the copyright year in the footer always up to date.
// ============================================
const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}
