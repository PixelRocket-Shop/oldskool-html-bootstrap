import SimpleBar from 'simplebar';

(function () {
    const simpleBars = document.querySelectorAll('[data-pixr-simplebar]') || [];

    simpleBars.forEach((simplebar) => {
        new SimpleBar(simplebar, {
            autoHide: false
        })
    });
})();