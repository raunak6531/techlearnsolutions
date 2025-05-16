// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

// Navbar Color Transition on Scroll
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a, span');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.remove('gradient-navbar');
    navbar.classList.add('scrolled-navbar');
  } else {
    navbar.classList.add('gradient-navbar');
    navbar.classList.remove('scrolled-navbar');
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (window.innerWidth < 768) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        }
      }
    }
  });
});

// Animate Cards/Sections on Scroll
const animatedEls = document.querySelectorAll('.shadow-lg, .shadow-xl, .shadow-2xl');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-8');
    }
  });
}, { threshold: 0.1 });

animatedEls.forEach(el => {
  el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
  observer.observe(el);
});

// Code Preview for DesignLab Section
const codePreview = document.querySelector('.code-preview');
if (codePreview) {
    const sampleCode = `
<!DOCTYPE html>
<html>
<head>
    <title>Sample Code</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is a sample code preview.</p>
</body>
</html>`.trim();

    codePreview.innerHTML = `<pre><code>${sampleCode}</code></pre>`;
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.feature-card, .internship-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer2.observe(card);
});

// Header Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mini Projects Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const exploreBtn = document.getElementById('explore-all-btn');

const exploreBtnTexts = {
  htmlcss: 'Explore All HTML & CSS Projects',
  javascript: 'Explore All JavaScript Projects',
  reactjs: 'Explore All React.js Projects',
  python: 'Explore All Python Projects',
  java: 'Explore All Java Projects'
};

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    tabBtns.forEach(b => b.classList.remove('bg-blue-950', 'text-white', 'shadow'));
    tabBtns.forEach(b => b.classList.add('text-blue-950'));
    // Add active to clicked
    btn.classList.add('bg-blue-950', 'text-white', 'shadow');
    btn.classList.remove('text-blue-950');
    // Show correct panel
    const tab = btn.getAttribute('data-tab');
    tabPanels.forEach(panel => {
      if (panel.getAttribute('data-tab') === tab) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
    // Update Explore All button
    if (exploreBtn && exploreBtnTexts[tab]) {
      exploreBtn.textContent = exploreBtnTexts[tab];
    }
  });
}); 