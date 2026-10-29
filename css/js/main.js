/* ===================================================
   SUGAR-DEV — MAIN INTERACTIVE JAVASCRIPT
=================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Automatically update copyright years
  document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // 2. Mobile Menu Drawer Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside or clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Contact Form Submission Alert
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("✅ Murakoze cyane! Ubutumwa bwawe bwakiriwe neza na Christian (SUGAR-DEV). Ndaza kukuvugisha vuba!");
      contactForm.reset();
    });
  }
});