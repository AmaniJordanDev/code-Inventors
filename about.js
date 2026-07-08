// ============================================================
// ABOUT US PAGE — page-specific JavaScript
// Note: the mobile menu, button click animation, scroll-reveal
// animations, animated stat counters, back-to-top button and
// footer year are all handled by the shared script.js file,
// since this page reuses those same classes and element IDs.
// ============================================================

// ============================================
// TIMELINE SCROLL PROGRESS LINE
// Fills the vertical line in the Community Journey section
// based on how far the user has scrolled through it.
// ============================================
const timelineSection = document.querySelector('.timeline');
const timelineFill = document.getElementById('timelineFill');

if (timelineSection && timelineFill) {

  function updateTimelineProgress() {
    const rect = timelineSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Start filling once the top of the timeline reaches 80% down the
    // viewport, and finish once its bottom passes 40% up the viewport.
    const startPoint = viewportHeight * 0.8;
    const distanceToFill = rect.height + viewportHeight * 0.4;
    const scrolledAmount = startPoint - rect.top;

    let progress = scrolledAmount / distanceToFill;
    progress = Math.max(0, Math.min(1, progress)); // clamp between 0 and 1

    timelineFill.style.height = `${progress * 100}%`;
  }

  // Update on scroll and once on page load
  window.addEventListener('scroll', updateTimelineProgress);
  window.addEventListener('resize', updateTimelineProgress);
  updateTimelineProgress();
}
