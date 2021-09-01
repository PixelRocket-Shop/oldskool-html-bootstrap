export class Navbar {
    constructor(menuToggle) {
        this.menuToggle = menuToggle;
        this.menuParent = this.menuToggle ? this.menuToggle.closest('.dropdown') : false;
        this.dropdownMenu = this.menuParent ? this.menuParent.querySelector('.dropdown-menu') : false;
        this.showEvents = ['mouseenter'];
        this.hideEvents = ['mouseleave', 'click'];
        this.cssVarBreakPoint = getComputedStyle(document.documentElement).getPropertyValue('--theme-breakpoint-lg') || '992px';
        this.breakpointLG = parseInt(this.cssVarBreakPoint, 10);

        this.initMenu();
    }

    initMenu() {
        const _this = this;

        if (this.menuParent) {
            this.showEvents.forEach((event) => {
                this.menuParent.addEventListener(event, function () {
                    _this.showMenu();
                })
            });
            this.hideEvents.forEach((event) => {
                this.menuParent.addEventListener(event, function () {
                    _this.hideMenu();
                })
            });
        }
    }

    showMenu() {

        if (window.innerWidth < this.breakpointLG) {
            return;
        }

        if (this.dropdownMenu) {
            this.dropdownMenu.classList.add('show');
        }
        if (this.menuToggle) {
            this.menuToggle.classList.add('show');
            this.menuToggle.setAttribute('aria-expanded', 'true');
        }
    }

    hideMenu() {

        if (window.innerWidth < this.breakpointLG) {
            return;
        }

        if (this.dropdownMenu) {
            this.dropdownMenu.classList.remove('show');
        }
        if (this.menuToggle) {
            this.menuToggle.classList.remove('show');
            this.menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
}