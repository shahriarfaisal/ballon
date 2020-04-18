$(function () {






    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 1500,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
    }
  ]
    });






});
