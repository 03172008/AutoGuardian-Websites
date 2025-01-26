/*
  Auto Guardian: Roadside Assistance Website
  Enhanced Readability & Contrast Version
  Description: Smooth scrolling, fade-in animations, and form validation
*/

// SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
  
  // AUTOMATIC COPYRIGHT YEAR
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // CONTACT FORM VALIDATION
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      formSuccess.style.color = 'red';
      formSuccess.textContent = 'Please fill in all fields.';
      return;
    }
  
    formSuccess.style.color = 'green';
    formSuccess.textContent = 'Thank you for contacting us! We will get back to you shortly.';
    contactForm.reset();
  });
  
  // FADE-IN ON SCROLL USING INTERSECTION OBSERVER
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  
  const observerOptions = {
    threshold: 0.1,
  };
  
  function fadeInOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }
  
  const sectionObserver = new IntersectionObserver(fadeInOnScroll, observerOptions);
  
  fadeInSections.forEach((section) => {
    sectionObserver.observe(section);
  });
  