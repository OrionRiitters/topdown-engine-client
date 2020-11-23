import imageService from '../services/imageService';

export default {
    initialize: (data) => {
        imageService.getInitialImages();
        const [canvasEl] = document.getElementsByTagName('canvas');
        canvasEl.style.height = `${data.height}px`;
        canvasEl.style.width = `${data.width}px`;

    }
}