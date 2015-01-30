$(function () {
    routeWithHash();
    $(".nav a").on('click', function(e) {
        routeTo($(e.target).attr('href').replace("#", ''));
    });
});

function routeWithHash() {
    routeTo(window.location.hash.replace("#", ''));
}

function routeTo(page) {
    if (page === "" || page === undefined) { // TODO: Check valid pages and have a default
        page = "start"
    }
    window.page = undefined;
    $("#includedContent").load(page + ".html", function() {
        // on completed call init in file
        if (window.page && window.page.init) {
            window.page.init();
        }
    });
}
