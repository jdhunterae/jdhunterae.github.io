document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth',
        });
      }
    });
  });

  // Add active class to navigation links based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200; // Offset for better highlighting

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document
          .querySelector(`nav a[href="#${sectionId}"]`)
          ?.classList.add('active');
      } else {
        document
          .querySelector(`nav a[href="#${sectionId}"]`)
          ?.classList.remove('active');
      }
    });
  }

  // Add window listener for scroll
  window.addEventListener('scroll', updateActiveNavLink);

  // update active link on initial load
  updateActiveNavLink();
});
