import imagesTemplate from '../templates/images.handlebars';

import propel from '../media/img/Propel.png';
import playerVessel from '../media/img/PlayerVessel.png';
import cloud from '../media/img/cloud.png';

export default {
    appendInitialImages: () => {
        const images = [
            {
                src: propel,
                id: 'propel'
            }, 
            {
                src: playerVessel,
                id: 'playerVessel'
            }, 
            {
                src: cloud,
                id: 'cloud'
            }
        ]
        document.addEventListener('DOMContentLoaded', () => {
            const div = document.createElement('div');
            div.id='images-container';
            div.innerHTML = imagesTemplate({
                images: images
            });
            document.body.appendChild(div);
        });
    }
}