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
    $('#main-container').fadeOut(200, function(){
        $('#includedContent').load(page + ".html", function(){
            $('#main-container').fadeIn(200);
        });
    });
}

function setBackgroundColor(color) {
    $("body").css("background-color", color);
}