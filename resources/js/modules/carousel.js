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

    let slideIndex = 0;

    $('.js-add-slide').on('click', function () {
        slideIndex++;

        $('.js-slider').slick('slickAdd', `<div><div><div class="item equal equal-100"><img id="${slideIndex}" class="object-fit bg-image js-new-img" src="" alt="Image"></div></div></div>`, 0);

        const new_img = document.getElementById(`${slideIndex}`);
        let photo = document.forms['form-add-photo']['photo'];

        let file = photo.files[0];
        console.log(file);
        let imageType = /image.*/;

        if (file.type.match(imageType)) {
            let reader = new FileReader();

            reader.addEventListener("load", () => {
                // convert image file to base64 string
                console.log(reader.result);
                new_img.src = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    });

}

export default carousel;