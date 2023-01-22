import $ from 'jquery';
import "jquery-validation";

const addPhoto = () => {
    const add_photo = $('.js-add-photo-form');

    if (add_photo.length) {
        add_photo.validate({
            rules: {
                photo: {
                    required: true,
                },
                photoName: {
                    required: true,
                },
            },
        });
    }
}
export default addPhoto;