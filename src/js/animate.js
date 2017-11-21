const icons = document.getElementsByClassName("image")

    setTimeout(function(){
        icons[0].classList.add('wobble');    
    }, 3000)

    setTimeout(function(){
        icons[1].classList.add('swing');    
    }, 4000)

    setTimeout(function(){
        icons[2].classList.add('jello');    
    }, 5000)

    setTimeout(function(){
        icons[3].classList.add('tada');    
    }, 6000)


    
    $(window).scroll(function(){
        var navbar = $('#nav-bar'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1) navbar.addClass('fixed');
        else navbar.removeClass('fixed');
      });