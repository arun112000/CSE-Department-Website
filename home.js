$(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll < 30){
        $('.navbar-custom').css('background', 'transparent');
        $('.navbar-brand').css('display', '');
        $('.navbar-custom').css('height', '');
        $('#nav_list').removeClass('mx-auto').addClass('ml-auto');
        $('.navbar-custom').css('box-shadow', '0 0 0 0 #e8e8e8');
    }   
  else{
        $('.navbar-custom').css('background', '#ffffff');
        $('.navbar-custom').css('box-shadow', '2px 2px 2px 2px #e8e8e8');
        $('.navbar-brand').css('display', 'none');
        $('.navbar-custom').css('height', '65px');
        $('#nav_list').removeClass('ml-auto').addClass('mx-auto');
    }
});

$('.dropdown-item').hover(
  function(){ $(this).addClass('animated');
  $(this).addClass('fadeInUp');
 },
  function(){ $(this).removeClass('fadeInUp') }
)

    $(document).ready(function(){
        // Activate Carousel
        $("#demo").carousel();
          
        // Enable Carousel Indicators
        $(".item1").click(function(){
          $("#demo").carousel(0);
        });
        $(".item2").click(function(){
          $("#demo").carousel(1);
        });
        $(".item3").click(function(){
          $("#demo").carousel(2);
        });
          
        // Enable Carousel Controls
        $(".carousel-control-prev").click(function(){
          $("#demo").carousel("prev");
        });
        $(".carousel-control-next").click(function(){
          $("#demo").carousel("next");
        });
      
        $("#demo").on('slid.bs.carousel', function(){
            $('.carousel-caption').addClass('animated')
            $('.carousel-caption').addClass('fadeInUp')
            $('.carousel-caption').css('visibility', 'visible');
        });
      });

     /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/

