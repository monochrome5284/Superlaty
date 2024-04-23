/* import * as bootstrap from 'bootstrap';

window.bootstrap = bootstrap; */

var multipleItemCarousel = document.querySelector('#carouselExampleIndicators');

if(window.matchMedia("(min-width:576px)").matches){
    /* var carousel = new bootstrap.Carousel(multipleItemCarousel,
        {
            interval: false
        }); */

    if($('.carousel-inner')[0] && $('.carousel-inner')[0].scrollWidth){
        var carouselWidth = $('.carousel-inner')[0].scrollWidth;
        var cardWidth = $('.carousel-item').width();
        var scrollPosition = 0;

        $('.carousel-control-next').on('click', function(){
            var $carousel = $(this).closest('.carousel');
            carouselWidth = $carousel.find('.carousel-inner')[0].scrollWidth;
            cardWidth = $carousel.find('.carousel-item').width();
            scrollPosition = $carousel.find('.carousel-inner').scrollLeft();
        
            if(scrollPosition < (carouselWidth - (cardWidth * 2))){
                console.log('next');
                scrollPosition = scrollPosition + cardWidth;
                $carousel.find('.carousel-inner').animate({scrollLeft: scrollPosition},600);
            }
        });
        
        $('.carousel-control-prev').on('click', function(){
            var $carousel = $(this).closest('.carousel');
            carouselWidth = $carousel.find('.carousel-inner')[0].scrollWidth;
            cardWidth = $carousel.find('.carousel-item').width();
            scrollPosition = $carousel.find('.carousel-inner').scrollLeft();
        
            if(scrollPosition > 0 && scrollPosition - cardWidth < (carouselWidth - (cardWidth * 2))){
                console.log('prev');
                scrollPosition = scrollPosition - cardWidth;
                $carousel.find('.carousel-inner').animate({scrollLeft: scrollPosition},600);
            }
        });
    }
}else{
    $(multipleItemCarousel).addClass('slide');
}