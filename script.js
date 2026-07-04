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
