(function () {

    const filterSearchBars = document.querySelectorAll('.filter-search') || [];
    const searchTrigger = document.querySelector('.search-trigger');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchBar = document.querySelector('.navbar-search');
    const searchInput = document.querySelector('.navbar-search input');
    const closeSearch = document.querySelector('.close-search');
    const ACTIVE_SEARCH_CSS_CLASS = 'search-active';
    const HIDDEN_CSS_CLASS = 'd-none';

    function toggleSearch() {

        if (document.body.classList.contains(ACTIVE_SEARCH_CSS_CLASS)) {
            document.body.classList.remove(ACTIVE_SEARCH_CSS_CLASS);
            return;
        }

        searchBar.classList.remove(HIDDEN_CSS_CLASS);
        setTimeout(() => {
            document.body.classList.add(ACTIVE_SEARCH_CSS_CLASS);
            if (searchInput) {
                searchInput.focus();
            }
        }, 150);
    }

    if (searchTrigger) {
        searchTrigger.addEventListener('click', function () {
            toggleSearch();
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', function () {
            toggleSearch();
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', function () {
            toggleSearch();
        })
    }

    // handle filter navigation on category page
    const handleCategoryFilterSearch = (event, search) => {
        const filterWidget = event.target.closest('.widget-filter');
        const filterOptions = filterWidget ? filterWidget.querySelectorAll('.filter-options .form-group') : [];
        if (search.value && filterOptions && filterWidget) {
            filterOptions.forEach((option) => {
                if (!option.innerText.trim().toLowerCase().includes(search.value.toLowerCase().trim())) {
                    option.classList.add('d-none');
                } else {
                    option.classList.remove('d-none');
                }
            })
            return;
        }
        filterOptions.forEach((option) => {
            option.classList.remove('d-none');
        })
    }

    if (filterSearchBars.length > 0) {
        filterSearchBars.forEach((search) => {
            search.addEventListener('keyup', (event) => {
                handleCategoryFilterSearch(event, search);
            });
        })
    }

})();