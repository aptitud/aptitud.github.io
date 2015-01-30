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

var fellowTemplate = Handlebars.compile($("fellow-template").html());

function layoutFellows() {
    var fellowList = "";
    fellows.forEach(function (f) {
        fellowList += fellowTemplate(f);
    });
    $("#fellow-layout").html(f);
}
