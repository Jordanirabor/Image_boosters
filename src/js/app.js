const clients = document.getElementById("clients");
const hamburger = document.getElementsByClassName("hamburger")[0];
const mobile_menu = document.getElementsByClassName("mobile_menu")[0];

clients.addEventListener('click', function(event){

event.target.setAttribute("style","animation-name:remove_greyscale; animation-duration:1s; animation-fill-mode:forwards") ;

})

hamburger.addEventListener('click', function(event){

    if(event.target.classList.contains("fa-bars")){

        event.target.classList.remove("fa-bars") ;
        
        event.target.classList.add("fa-times") ;   

        mobile_menu.setAttribute("style","animation-name:come; animation-duration:0.5s; animation-fill-mode:forwards;");     

    } else {

        event.target.classList.remove("fa-times");

        event.target.classList.add("fa-bars");  

        mobile_menu.setAttribute("style","animation-name:go; animation-duration:0.5s; animation-fill-mode:forwards;");     
        
        

    }
})


