// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('active');
  }
});

// Close mobile menu when clicking a nav link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Gallery Toast Notification
const galleryToast = document.getElementById('galleryToast');
const toastClose = document.getElementById('toastClose');

if (galleryToast) {
  // Show toast after a short delay
  setTimeout(() => {
    galleryToast.classList.add('active');
  }, 1000);

  // Close toast when clicking X
  if (toastClose) {
    toastClose.addEventListener('click', () => {
      galleryToast.classList.remove('active');
    });
  }
}

// Tabs Functionality
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

if (tabLinks.length > 0) {
  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tabId = link.getAttribute('data-tab');

      // Remove active class from all tabs and contents
      tabLinks.forEach(l => l.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      link.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}
