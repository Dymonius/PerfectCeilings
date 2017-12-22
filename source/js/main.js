window.onload = function () {

    //Menu

    (function () {
        var hamburger = document.querySelector('.hamburger');
        var menu = document.querySelector('.menu');
        var menuWraper = document.querySelector('.menu-wraper');
        var links = document.querySelectorAll('.menu__link');
        hamburger.addEventListener('click', function () {
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function () {
                    menu.classList.remove('menu--active');
                    menuWraper.classList.remove('menu-wraper--active');
                    hamburger.classList.remove('hamburger--active');
                })
            }
            menu.classList.toggle('menu--active');
            menuWraper.classList.toggle('menu-wraper--active');
            hamburger.classList.toggle('hamburger--active')
        });
        menuWraper.addEventListener('click', function () {
            menu.classList.toggle('menu--active');
            menuWraper.classList.toggle('menu-wraper--active');
            hamburger.classList.toggle('hamburger--active')
        })

    })();

    //Sticky Menu
    (function () {
        var stickElement = document.querySelector(".header-main__top");
        var hamburger = document.querySelector('.hamburger');
        var fixed = false;
        var fixPoint = stickElement.offsetTop + stickElement.offsetHeight; //Получение расстояния по оси Y от верха страницы до элемента

        window.onscroll = function () {
            if (window.innerWidth > 100) {
                var distance = fixPoint - window.pageYOffset;
                var offset = window.pageYOffset; //Получение текущей прокрутки сверху
                if ((distance <= 0) && !fixed) {
                    stickElement.classList.add('header-main__top--active');
                    hamburger.classList.add('hamburger--fixed');

                    fixed = true;
                } else if (fixed && (offset <= fixPoint)) {
                    stickElement.classList.remove('header-main__top--active');
                    hamburger.classList.add('hamburger--fixed');
                    fixed = false;
                }
            }
        };
    })();

    //Image select

    (function () {
        var links = document.querySelectorAll('.ceilings-types__item');
        var images = document.querySelectorAll('.ceilings-types__photo img');

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', handlerLink)
        }

        function handlerLink() {
            for (var i = 0; i < links.length; i++) {
                links[i].classList.remove('ceilings-types__item--active');
            }
            this.classList.toggle('ceilings-types__item--active');
            if (this.innerHTML === 'МАТОВЫЕ') {
                for (var n = 0; n < images.length; n++) {
                    images[n].classList.add('is-hidden--photo')
                }
                for (var n = 0; n < images.length; n++) {
                    if (images[n].getAttribute('alt') === 'МАТОВЫЕ') {
                        images[n].classList.remove('is-hidden--photo')
                    }
                }
            }
            if (this.innerHTML === 'ГЛЯНЦЕВЫЕ') {
                for (var n = 0; n < images.length; n++) {
                    images[n].classList.add('is-hidden--photo')
                }
                for (var n = 0; n < images.length; n++) {
                    if (images[n].getAttribute('alt') === 'ГЛЯНЦЕВЫЕ') {
                        images[n].classList.remove('is-hidden--photo')
                    }
                }
            }
            if (this.innerHTML === 'САТИНОВЫЕ') {
                for (var n = 0; n < images.length; n++) {
                    images[n].classList.add('is-hidden--photo')
                }
                for (var n = 0; n < images.length; n++) {
                    if (images[n].getAttribute('alt') === 'САТИНОВЫЕ') {
                        images[n].classList.remove('is-hidden--photo')
                    }
                }
            }
            if (this.innerHTML === 'МНОГОУРОВНЕВЫЕ') {
                for (var n = 0; n < images.length; n++) {
                    images[n].classList.add('is-hidden--photo')
                }
                for (var n = 0; n < images.length; n++) {
                    if (images[n].getAttribute('alt') === 'МНОГОУРОВНЕВЫЕ') {
                        images[n].classList.remove('is-hidden--photo')
                    }
                }
            }
            if (this.innerHTML === 'ДИЗАЙНЕРСКИЕ') {
                for (var n = 0; n < images.length; n++) {
                    images[n].classList.add('is-hidden--photo')
                }
                for (var n = 0; n < images.length; n++) {
                    if (images[n].getAttribute('alt') === 'ДИЗАЙНЕРСКИЕ') {
                        images[n].classList.remove('is-hidden--photo')
                    }
                }
            }
            if (this.innerHTML === 'ВСЕ') {

                for (var n = 0; n < images.length; n++) {
                    images[n].classList.remove('is-hidden--photo')
                }
            }
        }
    })()
};

//Range slider(calculator)

var $range = $("#example_id");
$range.ionRangeSlider(
    {
        type: "single",
        min: 3,
        max: 100,
        from: 10
    }
);
$range.on("change", function () {
    var $this = $(this),
        value = $this.prop("value");

    var square = document.querySelector('.calculator__square-number');
    square.innerHTML = value + ' м2';

    var price = document.querySelector('.calculator__price-number');
    price.innerHTML = value * 200 + ' грн.'
});


$(document).ready(function () {
    //Comments slider
    $('.comments__slider').slick({});

    //works slider

    $('.works').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        centerMode: true,
        centerPadding: '100px',
        speed: 300,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    centerPadding: '0px'
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 100}, t);
    });
});


