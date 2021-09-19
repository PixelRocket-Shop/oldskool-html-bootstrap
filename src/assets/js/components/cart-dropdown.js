import {
    createPopper
} from '@popperjs/core';

(function () {
    const cartWrap = document.querySelector('.dropdown-cart');
    const dropdown = document.querySelector('.cart-dropdown');
    const closeCartBtns = document.querySelectorAll('.btn-close-cart') || [];

    if (cartWrap) {
        
        // Pass the cartWrap, the cart dropdown, and some options, and Popper will do the
        // magic positioning for you:
        const popperInstance = createPopper(cartWrap, dropdown, {
            placement: 'bottom-end',
        });

        /**
         * Show Popper
         */
        function show() {
            dropdown.setAttribute('data-show', '');

            // Enable the event listeners
            popperInstance.setOptions({
                modifiers: [{
                    name: 'eventListeners',
                    enabled: true
                }],
            });

            popperInstance.update();
        }

        /**
         * Hide Popper
         */
        function hide() {
            dropdown.removeAttribute('data-show');

            // Disable the event listeners
            popperInstance.setOptions({
                modifiers: [{
                    name: 'eventListeners',
                    enabled: false
                }],
            });

        }


        /**
         * 
         * Handle click outside our cart dropdown
         * @param {*} event 
         * @returns 
         */
        function closeOnClickOutside(event) {
            let target = event.target;

            do {
                if (target === cartWrap) {
                    return;
                }
                target = target.parentNode;
            } while (target);

            hide();
        }

        // Show cart on hover event
        const showEvents = ['mouseenter', 'focus'];

        // Uncomment if you want to show cart on click/touch events
        // const showEvents = ['click', 'touchstart'];

        // Hide cart events
        const hideEvents = ['mouseleave', 'blur'];


        showEvents.forEach(event => {
            cartWrap.addEventListener(event, show);
        });

        hideEvents.forEach(event => {
            cartWrap.addEventListener(event, hide);
        });

        // doesn't look like Popper offers closeOnClickOutside type of config option
        // so we need to handle it ourselves
        document.addEventListener('click', function (event) {
            closeOnClickOutside(event);
        });

        document.addEventListener('touchstart', function (event) {
            closeOnClickOutside(event);
        });

        // Event listeners for closing cart dropdown via button
        closeCartBtns.forEach(function (btn) {
            btn.addEventListener('click', hide);
            btn.addEventListener('touchstart', hide);
        });

    }
})();