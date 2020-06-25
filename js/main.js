$(function(){
    $('.video__blok-video img.play').hover(function(){
        $(this).attr('src','img/playHover.png');
    }, function(){
        $(this).attr('src','img/play.png');
    }
    
    );
    $('.video__blok-video img.play').click(function(){
        $('.video-popup').fadeIn(800).css('display','flex');
    });
    $('.video-popup span').click(function(){
        $('.video-popup').fadeOut(1000);
    });
    $('.callWindow').click(function(){
        $('.joinIn').fadeIn(800);
    });
    $('.joinIn span').click(function(){
        $('.joinIn').fadeOut(1000);
    });
    $('.mask').mask("+38(999) 999-99-99");

    function valid(form){
        $(form).validate({
            rules: {
                // simple rule, converted to {required:true}
                name: "required",
                phone: "required",
                // compound rule
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: "Пожалуйста, укажите ваше имя",
                phone: "По телефону мы сможем связаться с вами быстрей",
                email: {
                  required: "Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
                  email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
                }
            }        
        });
    }
    valid("#Touch-form");
    valid("#joinIn");

    $(document).scroll(function(){
        if($(document).scrollTop() > 300){
            $('.ScrollTop').addClass('ScrollTop__activ');
        } else {
            $('.ScrollTop').removeClass('ScrollTop__activ');
        }
    });
    $(function(){
        $("a[href^='#']").click(function(){
               var _href = $(this).attr("href");
               $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
               return false;
       });
    });

    $('.header .fa-bars').click(function(){
        $('.header__nav').addClass('header__nav-activ');
    });
    $('.header__nav .fa-times-circle').click(function(){
        $('.header__nav').toggleClass('header__nav-activ');
    });
});