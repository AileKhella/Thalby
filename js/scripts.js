$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout: 3000,

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});

$(".button").click(function(){
    $(this).closest("body").toggleClass("active");
});