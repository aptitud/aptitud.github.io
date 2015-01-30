$(function () {
    var page = window.location.hash.replace("#",'');
    if (page === "" || page === undefined) { // TODO: Check valid pages and have a default
        page = "start"
    }
    $("#includedContent").load(page + ".html");
});

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
    fellow('profile_pic.png', 'Firstname3 Lastname', 'Bacon ipsum dolor amet brisket boudin fatback, tri-tip corned beef turducken sausage balltip andouille. Turducken tri-tip swine filet mignon.')
];

function layoutFellows() {
    var fellowTemplate = Handlebars.compile($("fellow-template").html());
    var fellowList = "";
    fellows.forEach(function (f) {
        fellowList += fellowTemplate(f);
    });
    $("#fellow-layout").html(f);
}
