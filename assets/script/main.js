$(document).ready(function () {
    $('.nav-holder__btn').click(() => {
        $('.overlay').addClass('active');
        $('.modal').addClass('active');
        $('body').css('overflow', 'hidden')
    })
    $('.overlay').click(() => {
        $('.modal').removeClass('active');
        $('body').css('overflow', 'unset')
        $('.overlay').removeClass('active');
    })
    $('.modal-input').click(() => {
        $('.modal-label').toggleClass('active')
    });
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.mobile-menu').toggle(500);
        $('body').toggleClass('active')
    });
    $('.locations').click(() => {
        $('.items').toggleClass('active');
        $('.down-arrow').toggleClass('scale')
    })

})



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 55,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    nextArrow: $('.btn-next'),
    prevArrow: $('.btn-prev'),
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
})


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 32,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// Author ᵗʰᵉᵃᵏᵇᵃʳᵒᵛ // https://t.me/asror_akbarov 🤑✊🏽/