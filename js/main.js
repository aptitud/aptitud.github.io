$(function () {
    routeWithHash();
    $(".nav a").on('click', function (e) {
        var href = $(e.target).attr('href');
        if (href) {
            routeTo(href.replace("#", ''));
        }
    });
});

function routeWithHash() {
    var hash = window.location.hash || "";
    routeTo(hash.replace("#", ''));
}

function routeTo(page) {
    if (page === "" || page === undefined) { // TODO: Check valid pages and have a default
        page = "start"
    }
    window.page = undefined;
    $("#includedContent").load(page + ".html", function () {
        // on completed call init in file
        if (window.page && window.page.init) {
            window.page.init();
        }
    });
}

function setBackgroundColor(color) {
    $("body").css("background-color", color);
}