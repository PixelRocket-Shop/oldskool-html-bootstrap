import mediumZoom from 'medium-zoom';

(function () {
    const zoomImgs = document.querySelectorAll('[data-zoomable]') || [];
    const zoomBtns = document.querySelectorAll('[data-zoomable-btn]') || [];

    function handleZoomBtnClick(btn) {
        let img = btn.dataset && btn.dataset.src ? document.querySelector(btn.dataset.src) : false;
        const zoom = new mediumZoom(img, {
            margin: 30
        });
        zoom.open();
    }

    zoomBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            handleZoomBtnClick(btn);
        })
    });

    zoomImgs.forEach((img) => {
        const zoom = new mediumZoom(img, {
            margin: 30
        });
    });
})();