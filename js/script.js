document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.button');
  const menuBtn = document.querySelector(".menu_btn");
  const menuIcon = menuBtn?.querySelector("i");
  const navbar = document.querySelector("header .navbar");

  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn?.classList.add('show');
    } else {
      btn?.classList.remove('show');
    }

    // Auto-hide navbar and reset icon if scrolling down more than 20px
    if (window.scrollY > 20) {
      navbar?.classList.remove("active");
      if (menuIcon) {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      }
    }
  });

  // Scroll to top on button click
  btn?.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Toggle menu and icon on click
  menuBtn?.addEventListener("click", function () {
    if (menuIcon) {
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-xmark");
    }
    navbar?.classList.toggle("active");
  });
});
