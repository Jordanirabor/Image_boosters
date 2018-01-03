
      $(window).scroll(function(){
        const icons = document.getElementsByClassName("image"),
            scroll = $(window).scrollTop();
      
    if (scroll >= 100) {

    setTimeout(function(){
        icons[0].classList.add('bounce');    
    }, 1000)

    setTimeout(function(){
        icons[1].classList.add('bounce');    
    }, 2500)

    setTimeout(function(){
        icons[2].classList.add('bounce');    
    }, 3500)

    setTimeout(function(){
        icons[3].classList.add('bounce');    
    }, 4500) } 

     });



    $(window).scroll(function(){
        var navbar = $('#nav-bar'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1) navbar.addClass('fixed');
        else navbar.removeClass('fixed');
      });




   $(window).scroll(function(){
        var theLogos = $('.theLogos'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1300) 
        theLogos.addClass('zoomIn');
      });

      $(window).scroll(function(){
        var bar = $('#bar')
        var contacts = $('#contacts'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 5) {
            bar.addClass('car'),
            contacts.addClass('contacts')
            $('#main_logo').css('display', 'none');
            $('#main_logos').css('display', 'block');
            $('.header > #bar > nav > ul > li > a').css('color', 'black');
            contacts.css('color', 'white')
            contacts.css('font-weight', 'bold')
        }

        else   {  

        bar.removeClass('car') 
        contacts.removeClass('contacts') 
        bar.addClass('bar')
        $('#main_logos').css('display', 'none');
        $('#main_logo').css('display', 'block');
        $('.header > #bar > nav > ul > li > a').css('color', 'white'); 
        contacts.css('font-weight', 'normal')       

        }

      });
