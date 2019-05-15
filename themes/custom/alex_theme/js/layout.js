/* Javascript Alex-schwarz.com */

(function ($) {




/****************** DOCUMENT READY **************************/

  $(document).ready(function() {

    if( $('#scene').length )
        {
         $('#scene').parallax();
    }


    // initialization of text animation (typing)
            $(".u-text-animation.u-text-animation--typing").typed({
              strings: ["Arbeitsmedizin", "Arbeitssicherheit", "Brandschutz", "Datenschutz", "Elektrosicherheit"],
              typeSpeed: 60,
              loop: true,
              backDelay: 1500,
            });



  // SlickNav
  $("#superfish-main").slicknav({
        label: '',
        duration: 100,
        allowParentLinks: true,
        easingOpen: "easeOutBack",
        easingClose: "easeOutBack",
        prependTo:'.mobile-header',
                'init': function(){
           $('.slicknav_btn').click(function(){
              if($('.slicknav_nav').css('display') == 'block'){
                  $('.background-black').css({'display':'none'});
                  $('#header').removeClass('opened');
                  $('body').removeClass('slicknav_opened');
                  $('main').css({'display':'block'});
                  $('.footer').css({'display':'block'});
              }else{
                  $('.background-black').css({'display':'block'});
                  $('#header').addClass('opened');
                  $('body').addClass('slicknav_opened');
                  $('main').css({'display':'none'});
                  $('.footer').css({'display':'none'});
              }
           })
        }// Init function
  });


    //Check to see if the window is top if not then display button
     $(window).scroll(function(){
         if ($(this).scrollTop() > 600) {
             $('.to-the-top').fadeIn();
         } else {
             $('.to-the-top').fadeOut();
         }
     });
   // Element fuers Hochscrollen
   $('.topper').click(function(){
    $('html, body').animate({scrollTop:'0px'}, 1000, "easeOutBack");
    return false;
   });


  // ACCORDEON

 $('.accordeon_header').click(function() {

     $('.accordeon_content').each(function(){ $(this).slideUp("normal"); $(this).parent('.accordeon').removeClass('active'); });

     var $current = $(this).parent('.accordeon').find('.accordeon_content');
     if($current.css('display') == 'none'){
       $(this).parent('.accordeon').addClass('active');
       $current.slideDown("normal"); }else{ $current.slideUp("normal");
    }

 });

/**********************************************/


  /**********************************************/


  });//document.ready


  $(window).resize(function() {

   if( $(window).width() > 1025 ){

   	if( !$('.popup').hasClass('popupopen') ){

         $('.background-black').css({'display':'none'});
         $('#header').removeClass('opened');
         $('body').removeClass('slicknav_opened');
         $('main').css({'display':'block'});
         $('#footer').css({'display':'block'});
		 }
     }



  });//window.resize

  // Filter
  $( document ).ajaxComplete(function() {


    // Post Animation
    $('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: 100
    });




  });// ajaxComplete Ende



  $(window).scroll(function () {


      if($(window).width() > 1025){

   /*     var footer_h = $('footer').offset().top, scroll_box_h = $('.auto-leasing-kasten').height();

        if( $('body').hasClass('page-node-type-modell') ){

        if( $(this).scrollTop() > 300 && $(this).scrollTop() < (footer_h - scroll_box_h ) - 200 ) {
             $('.auto-leasing-kasten').addClass('scrolling').css({'position': 'fixed','left': '50%','top': '25%', 'width': '42%'});
        }else{
             $('.auto-leasing-kasten').removeClass('scrolling').css({'position': 'relative','left': 'auto', 'top': 'auto', 'width': '100%'});

        }
        }  */

      }//Ende Breite

  });// Ende scroll

})(jQuery);
