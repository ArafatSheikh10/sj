$(document).ready(function() {
// Aos animation

AOS.init({
  duration: 2000,
});


// mobail-side-bar

$(".nav-area__trigger-btn").click(function(){
    $(".mobail-side-bar").addClass("show-mobail-slide");
    $(".overlay").addClass("show-mobail-slide");
});

$(".mobail-side-bar__close , .overlay").click(function(){
    $(".mobail-side-bar").removeClass("show-mobail-slide");
    $(".overlay").removeClass("show-mobail-slide");
});

// number count

$('.number-count').counterUp({
    delay: 10,
    time: 2000
});

// testemonials_card-wraper

$('.testemonials_card-wraper').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  dots: false,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
})

});


