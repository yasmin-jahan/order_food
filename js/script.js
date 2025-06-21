
    $(document).ready(function () {
let btn = $('.button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
    
  });


  $(".menu_btn").click(function () {
  const icon = $(this).find("i");

  // Toggle icon
  icon.toggleClass("fa-bars fa-xmark");

  // Toggle navbar visibility
  $("header .navbar").toggleClass("active");

  
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 20) {
    $("header .navbar").removeClass("active"); // Hide navbar
    $(".menu_btn i").removeClass("fa-xmark").addClass("fa-bars"); // Reset icon
  }
});


});

