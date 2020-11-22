

export default {
    initialize: (data) => {
        const [canvasEl] = document.getElementsByTagName('canvas');
        canvasEl.style.height = `${data.height}px`;
        canvasEl.style.width = `${data.width}px`;
    }
}