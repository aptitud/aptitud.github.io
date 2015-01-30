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

function fellow(img, name, desc) {
    return {
        img: img,
        name: name,
        desc: desc
    };
}
var fellows = [
    fellow('profile_pic.png', 'Firstname1 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname2 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname3 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname4 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname5 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname6 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname7 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname8 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.'),
    fellow('profile_pic.png', 'Firstname9 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.')
];

function layoutFellows() {
    var fellowTemplate = Handlebars.compile($("#fellow-template").html());
    var layoutDiv = $("#fellow-list");
    fellows.forEach(function (f) {
        layoutDiv.append(fellowTemplate(f));
    });
}
