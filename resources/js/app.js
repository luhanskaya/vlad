import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import addPhoto from "./modules/form";
import carousel from "./modules/carousel";

document.addEventListener('DOMContentLoaded', function (){
    addPhoto();
    carousel();
});

// $(document).ready(function(){
//     $('.js-slider').slick({
//     });
// });
