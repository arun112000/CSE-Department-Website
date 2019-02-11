$(function () {
    var iframe = $('.main-content iframe')[0],
        menu_links = $('.items li a'),
        selected_link,
        href;


    $(window).on('hashchange', function() {

        if(window.location.hash){
            href = window.location.hash.substring(1);
            selected_link = $('a[href$="'+href+'"]');

            // Check if the hash is valid - it should exist as one of the menu items.
            if(selected_link.length){
                iframe.contentWindow.location.replace(href + '.html');

                menu_links.removeClass('active');
                selected_link.addClass('active');
            }
        }
        else{
            iframe.contentWindow.location.replace('Footer-with-logo.html');
            menu_links.removeClass('active');
            $(menu_links[0]).addClass('active');
        }

    });


    if(window.location.hash){
        $(window).trigger('hashchange');
    }


    menu_links.on('click', function (e) {
        e.preventDefault();

        window.location.hash = $(this).attr('href');
    });


    $('#template-select').on('change', function (e) {
        e.preventDefault();

        window.location.hash = $(this).find(':selected').data('href');
    });

});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 30){
         $('.navbar-brand').css('display', '');
         $('#nav_list').removeClass('mx-auto').addClass('ml-auto');
         $('.navbar-custom').css('box-shadow', '0 0 0 0 #e8e8e8');
     }   
   else{
        $('.navbar-custom').css('box-shadow', '2px 2px 2px 2px #e8e8e8');
         $('.navbar-brand').css('display', 'none');
         $('.navbar-custom').css('height', '65px');
         $('#nav_list').removeClass('ml-auto').addClass('mx-auto');
     }
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
  