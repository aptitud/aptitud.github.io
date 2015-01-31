$(function () {
    routeWithHash();
    $(".nav a").on('click', function (e) {
        var href = $(e.target).attr('href');
        if (href) {
            // hide menu after nav
            /*if($('.navbar-toggle').css('display') !='none'){
             $(".navbar-toggle").trigger( "click" );
             }*/
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
    // do some fade in and fadeout on transition
    $('#main-container').fadeOut(200, function () {
        $('#includedContent').load(page + ".html", function () {
            $('#main-container').fadeIn(200);

            // trigger google analytics
            if (ga) {
                ga('send', 'pageview', '/' + page);
            }
        });
    });
}

function setBackgroundColor(color) {
    $("body").css("background-color", color);
}