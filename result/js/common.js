jQuery(document).ready(function( $ ) {

  $('.header-top__button').click(function () {
    const title = $('.modal-outer .section-title.mb-4');
    const dataTitleText = title.attr('data-title-text');

    title.text(dataTitleText);
    $('.modal-outer').show();
  });

  $('.modal-outer, .modal-close').click(function () {
    $('.modal-outer').hide();
  });

  $('.modal-floatbox').click(function (e) {
    e.stopPropagation();  
  });
  
  $('.burger').click(function () {
    $('.header-menu__mobile').addClass('header-menu__mobile--active');
    $('body').addClass('hidden-scroll');
  });

  $('.header-menu__close').click(function () {
    $('.header-menu__mobile').removeClass('header-menu__mobile--active');
    $('body').removeClass('hidden-scroll');
  });
  

  $('.models .models-item').each(function () {
    const titleText = $(this).find('.models-item__title').text();
    const btn = $(this).find('button');

    btn.click(function () {
      $('.modal-outer .section-title.mb-4').text('Получить персональное предложение на '+titleText);
      $('.modal-outer').show();
    });
  });


  $('.model-technical__panel-info button, .models-item__complectation-actions button').click(function () {
    $('.modal-outer .section-title.mb-4').text('Получить скидку');
    $('.modal-outer').show();
  });

  $('.slider-text__wrapper button').click(function () {
    $('.modal-outer .section-title.mb-4').text('Получить предложение');
    $('.modal-outer').show();
  });

  

  $('.model-technical__tab').click(function () {
    $('.model-technical__tab').removeClass('model-technical__tab--active');
    $(this).addClass('model-technical__tab--active');
  })


  
  $('.mslider').slick({
    infinite: true,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear', 
    fade: true, 
    autoplaySpeed: 0,  
    touchThreshold: 10,
    arrows: true,
    pauseOnHover: true,  
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.model-about__sl').slick({
    infinite: true,    
    speed: 300,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 4,
    cssEase: 'linear',     
    autoplaySpeed: 0,  
    touchThreshold: 10,
    arrows: true,
    dots: true,
    pauseOnHover: true,  
    responsive: [

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          
        }
      },
      
    ]
  });  

  $('.models-item__sl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.models-item__sl-thumbs'
  });


  $('.models-item__sl-thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.models-item__sl',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });




  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.button-top').show(400);
    }
    else {
     $('.button-top').hide();
   }
 });


  $('.button-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
  });


  /*$('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
    return false;
  });*/

}); //ready

