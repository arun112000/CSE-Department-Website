

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

