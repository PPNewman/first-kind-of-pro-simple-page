document.addEventListener("DOMContentLoaded", function () {
    // jquery dzięki któremu po tapnięciu na ekran zamyka się menu 
    
     $(document).click(function (event) {
         var clickover = $(event.target);
         var _opened = $(".navbar-collapse").hasClass("show");
         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
             $(".navbar-toggler").click();
         }
        });
    
    // SLICK JS
        $(`.team-carousel`).slick({
          autoplay: true,
          autoplaySpeed: 3500,
          mobileFirst: true,
          slidesToShow: 1,
          sliedesToScroll: 1,
          responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }            
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
          ]
        });
     

 
   
})
// Dzięki temu przeglądarka wczyta najpierw całą stronę a dopiero po tym wczyta skrypty z tego pliku DOMContentLoaded to taki zbiór skryptów.