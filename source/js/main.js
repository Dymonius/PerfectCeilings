window.onload = function () {
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
    price.innerHTML = value*200 + ' грн.'
});