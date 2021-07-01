// Properly align the search button in the nav bar.
$(() => {
    var $navBarContainer = $(".index-nav");
    var $searchButton = $(".search-box");

    var navBarHeight = $navBarContainer.css("height");
    $searchButton.css("height", navBarHeight);
    $searchButton.css("width", navBarHeight);
});