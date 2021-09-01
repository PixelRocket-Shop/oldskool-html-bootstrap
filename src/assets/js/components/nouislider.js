import noUiSlider from 'nouislider';

(function () {
    var priceSliders = document.querySelectorAll('.filter-price') || [];

    const createPriceSlider = (priceSlider) => {
        const parentElem = priceSlider.closest('.widget-filter-price');

        noUiSlider.create(priceSlider, {
            start: [60, 900],
            connect: true,
            tooltips: [true, true],
            range: {
                'min': 0,
                'max': 1000
            },
            pips: {
                mode: 'values',
                values: [0, 250, 500, 750, 1000],
                density: 100
            }
        });

        var filterMinInput = parentElem ? parentElem.querySelector('.filter-min') : false;
        var filterMaxInput = parentElem ? parentElem.querySelector('.filter-max') : false;
        const inputs = [filterMinInput, filterMaxInput]

        priceSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        filterMinInput.addEventListener('change', function () {
            priceSlider.noUiSlider.set([this.value, null]);
        });

        filterMaxInput.addEventListener('change', function () {
            priceSlider.noUiSlider.set([null, this.value]);
        });
    }

    priceSliders.forEach((priceSlider) => {
        createPriceSlider(priceSlider);
    });
})();