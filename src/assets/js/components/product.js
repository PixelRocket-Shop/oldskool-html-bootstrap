(function () {
    const productOptions = document.querySelectorAll('.product-option select, .product-option input') || [];
    const PARENT_CSS_CLASS = 'product-option';
    const SELECTED_OPTION_CLASS = 'selected-option';

    const handleOptionChange = ({
        event,
        option
    }) => {
        const optionParent = event.target ? event.target.closest(`.${PARENT_CSS_CLASS}`) : false;
        const selectedOptionLabel = optionParent ? optionParent.querySelector(`.${SELECTED_OPTION_CLASS}`) : false;
        const selectedOption = event.target && event.target.value ? event.target.value : false;

        if (optionParent && selectedOptionLabel && selectedOption) {
            selectedOptionLabel.innerText = selectedOption;
        }
    }

    productOptions.forEach((option) => {
        option.addEventListener('change', (event) => {
            handleOptionChange({
                event,
                option
            });
        });
    });
})();