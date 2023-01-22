import addPhoto from "./modules/form";
import carousel from "./modules/carousel";
import "./modules/modal";

document.addEventListener('DOMContentLoaded', function (){
    addPhoto();
    carousel();
});


// window.onload = function() {

//     var fileInput = document.getElementById('fileInput');
//     var fileDisplayArea = document.getElementById('fileDisplayArea');


//     fileInput.addEventListener('change', function() {
//         var file = fileInput.files[0];

//         // console.log(file);

//         var imageType = /image.*/;

//         if (file.type.match(imageType)) {
//             var reader = new FileReader();

//             reader.onload = function() {
//                 fileDisplayArea.innerHTML = "";

//                 var img = new Image();
//                 img.src = reader.result;

//                 fileDisplayArea.appendChild(img);

//                 console.log(fileDisplayArea);
//             }

//             reader.readAsDataURL(file); 

          
//         } else {
//             fileDisplayArea.innerHTML = "File not supported!"
//         }
//     });

// }

