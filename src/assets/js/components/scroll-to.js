(function () {
    const scrollToElems = document.querySelectorAll('[data-pixr-scrollto]') || [];

    scrollToElems.forEach(item => item.addEventListener('click', function (e) {
        const target = e && e.target && e.target.dataset && e.target.dataset.target ? e.target.dataset.target : false;
        if (target) {
            const destination = document.querySelector(target);
            if (destination) {
                destination.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }));
})();