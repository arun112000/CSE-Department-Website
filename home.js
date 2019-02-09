$(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll < 10){
        $('.navbar-custom').css('background', 'transparent');
        $('.navbar-brand').css('display', '');
        $('#nav_list').removeClass('mx-auto').addClass('ml-auto');
    } else{
        $('.navbar-custom').css('background', '#7f0909');
        $('.navbar-brand').css('display', 'none');
        $('#nav_list').removeClass('ml-auto').addClass('mx-auto');
    }
});

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