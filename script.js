// ---- MOBILE MENU ----
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ---- FAQ ACCORDION ----
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const span = btn.querySelector('span');
  const isOpen = answer.style.display === 'block';

  // Close all
  document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
  document.querySelectorAll('.faq-question span').forEach(s => s.textContent = '+');

  // Open clicked if it was closed
  if (!isOpen) {
    answer.style.display = 'block';
    span.textContent = '−';
  }
}

// ---- CONTACT FORM ----
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}

// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll(
    '.service-card, .why-card, .qual-card, .service-full-card, .faq-item'
  );
  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// ---- NAVBAR SHADOW ON SCROLL ----
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ---- QUALIFICATIONS TABS ----
function showQualTab(tabName, btn) {
  // Hide all tab contents
  document.querySelectorAll('.qual-tab-content').forEach(el => el.classList.remove('active'));
  // Remove active from all buttons
  document.querySelectorAll('.qual-tab-btn').forEach(el => el.classList.remove('active'));
  // Show selected tab
  document.getElementById('qual-' + tabName).classList.add('active');
  // Mark button active
  btn.classList.add('active');
}
