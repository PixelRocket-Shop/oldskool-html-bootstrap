import {
    Navbar
} from '../classes/navbar';

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const dropdownMenus = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropend') || [];
        const navbarTogglers = document.querySelectorAll('.navbar-toggler') || [];
        const NAVBAR_ACTIVE_CLASS = 'navbar-active';
        // if toggle button has this CSS class, we do not add body class to hide overflow.
        const NAVBAR_BTN_DISABLE_ADD_BODY_CLASS = 'btn-collapse-expand';

        // Add css class to body when mobile is active
        // use that css class to hide overflow and add padding
        const handleActiveMobile = () => {
            if (document.body.classList.contains(NAVBAR_ACTIVE_CLASS)) {
                document.body.classList.remove(NAVBAR_ACTIVE_CLASS);
            } else {
                document.body.classList.add(NAVBAR_ACTIVE_CLASS);
            }
        }

        if (dropdownMenus.length > 0) {
            dropdownMenus.forEach((menuToggle) => {
                new Navbar(menuToggle);
            })
        }

        // handle overflow hidden on body for navbar display on smaller devices
        if (navbarTogglers.length > 0) {
            navbarTogglers.forEach((toggler) => {
                toggler.addEventListener('click', (event) => {

                    //if our toggle has a CSS class defined above, return and don't add body class
                    if (event.target && event.target.classList.contains(NAVBAR_BTN_DISABLE_ADD_BODY_CLASS)) {
                        return;
                    }

                    handleActiveMobile();
                });
            })
        }
    });
})();