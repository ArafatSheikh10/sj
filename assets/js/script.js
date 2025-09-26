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


$('.brand-logo-wraper').owlCarousel({
    loop:true,
    margin:24,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        900:{
            items:4
        },
        1300:{
            items:6
        }
    }
  });


// testimonial-area-wraper

$('.testimonial-area-wraper').owlCarousel({
  loop:true,
  margin:24,
  nav:true,
  navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
  dots: false,
  mergeFit: true,
  rewind: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      900:{
          items:3
      },
      1300:{
          items:4
      }
  }
});


// project-slider

$('.project-slider-wraper-1').owlCarousel({
  rtl: true,
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplaySpeed: 1000,
  smartSpeed: 1000,
  fluidSpeed: 1000,
  slideTransition: 'linear',
  autoplayHoverPause: false,
  responsive:{
    0:{
        items: 2,
        margin: 10,
    },
    480:{
        items: 2,
        margin: 15,
    },
    768:{
        items: 3,
        margin: 20,
    },
    1000:{
        items: 4,
        margin: 24,
    }
  }
});

$('.project-slider-wraper-2').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplaySpeed: 1000,
  smartSpeed: 1000,
  fluidSpeed: 1000,
  slideTransition: 'linear',
  autoplayHoverPause: false,
  responsive:{
      0:{
          items: 2,
          margin: 10,
      },
      480:{
          items: 2,
          margin: 15,
      },
      768:{
          items: 3,
          margin: 20,
      },
      1000:{
          items: 4,
          margin: 24,
      }
  }
});


});