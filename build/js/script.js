// $(window).on('load resize', function() {
//   if ($(window).width() >= 768) {
//     $('.banner__limit:not(.slick-initialized)').slick({
//       infinite: true,
//       speed: 300,
//       centerMode: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             centerMode: false,
//             slidesToScroll: 1,
//           }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ]
//     });
//   } else {
//     $(".banner__limit.slick-initialized").slick("unslick");
//   }
// });

$('.banner__limit').slick({

  speed: 300,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(window).on('load resize', function() {
  if ($(window).width() >= 768) {
    $('.talkshow__slider:not(.slick-initialized)').slick({
      speed: 300,
      slidesToShow: 4,
    });
  } else {
    $(".talkshow__slider.slick-initialized").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() >= 768) {
    $('.programms__lists:not(.slick-initialized)').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  } else {
    $(".programms__lists.slick-initialized").slick("unslick");
  }
});

$('.circle__lists').slick({
  infinite: true,
  centerMode: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.kub__lists').slick({
  centerMode: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider__lists').slick({
  infinite: true,
  centerMode: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.programm__lists').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.cinema__sort').click(function(e){
  e.preventDefault();
  $('.cinema__select').toggleClass('cinema__hide');
})

$(".opinion__lists").on('afterChange', function(event, slick, currentSlide){
   $("#cn").text(currentSlide + 1);
});

$('.opinion__lists').slick();
$('.sport-page__slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
});


$('#bookmark-open').click(function(e){
  e.preventDefault();
    $('#bookmark-open').addClass('lk__icon1r');
    $('#viewed-open').removeClass('lk__icon2r');
    $('#remind-open').removeClass('lk__icon3r');
  if($('.lk__items').hasClass('lk__close'))
    $('#bookmark').removeClass('lk__close');
    $('#remind').addClass('lk__close');
    $('#viewed').addClass('lk__close');
});

$('#viewed-open').click(function(e){
  e.preventDefault();
    $('#viewed-open').addClass('lk__icon2r');
    $('#bookmark-open').removeClass('lk__icon1r');
    $('#remind-open').removeClass('lk__icon3r');
  if($('.lk__items').hasClass('lk__close'))
    $('#bookmark').addClass('lk__close');
    $('#remind').addClass('lk__close');
    $('#viewed').removeClass('lk__close');
});

$('#remind-open').click(function(e){
  e.preventDefault();
    $('#remind-open').addClass('lk__icon3r');
    $('#bookmark-open').removeClass('lk__icon1r');
    $('#viewed-open').removeClass('lk__icon2r');
  if($('.lk__items').hasClass('lk__close'))
    $('#bookmark').addClass('lk__close');
    $('#remind').removeClass('lk__close');
    $('#viewed').addClass('lk__close');
});

$('.nav__lists li').hover(function(){
  $('.nav__hover').attr('style', 'display: flex;');
});

$('.nav__hover').mouseleave(function(){
  $('.nav__hover').attr('style', 'display: none;');
});

$('.lk__mobile').click(function(e){
  e.preventDefault();
  $('.lk__choice').toggleClass('lk__nomobile');
});

$('.menu__range[value ="0"]').onchange(function(){
  $('.menu__range').addClass('menu__range-day');
  $('.menu__range').removeClass('menu__range-night');
});

$('.menu__range[value ="1"]').onchange(function(){
  $('.menu__range').removeClass('menu__range-day');
  $('.menu__range').addClass('menu__range-night');
});

$('.lk__click').click(function(e){
  e.preventDefault();
  $('.lk__buttons').toggleClass('lk__buttons--none');
});

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.button__mobile').click(function(e){
      $('.button__serie').toggleClass('show__serie');
    });
  } else {
    $('.button__serie').removeClass('show__serie');
  }
});
