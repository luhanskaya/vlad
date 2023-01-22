import $ from 'jquery';
import 'slick-slider';

const carousel = () => {
    $('.js-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.js-add-slide').on('click', function () {
        let photo = document.forms['form-add-photo']['photo'];
        const files = photo.files[0];
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
                $('.js-slider').slick('slickAdd', `<div><div><div class="item equal equal-100"><img class="object-fit bg-image" src="${this.result}" alt="Image"></div></div></div>`, 0);
            });
        }
    });

}

export default carousel;