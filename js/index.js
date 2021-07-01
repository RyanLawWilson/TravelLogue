// Properly align the search button in the nav bar.
$(() => {
    var $navBarContainer = $(".index-nav");
    var $searchButton = $(".search-box");
    var $navBarCollapse = $(".navbar-collapse");

    window.onscroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $navBarContainer.css("padding-top", 2);
            $navBarContainer.css("padding-bottom", 2);
            $navBarContainer.css("height", 50);
            $searchButton.css("height", 50);
            $searchButton.css("width", 55);
            $navBarCollapse.css("top", 50);
        } else {
            $navBarContainer.css("padding-top", 20);
            $navBarContainer.css("padding-bottom", 20);
            $navBarContainer.css("height", 100);
            $searchButton.css("height", 100);
            $searchButton.css("width", 110);
            $navBarCollapse.css("top", 75);
        }
    }
});

