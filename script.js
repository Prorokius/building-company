$( '.nav a' ).on("click", function(){
    $('div.collapse').removeClass('show');
});

let header_height = $('.header').height();
let numbers_height = $('.numbers').height()-184;


$( '.scroll-project' ).on("click", function(){
    window.scrollTo(0,header_height+numbers_height);
});

$('.slider').slick({
    centerMode: true,
    dots: true,
    arrows: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: true,
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },

    ]
});