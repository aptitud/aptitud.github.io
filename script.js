$(function () {
    var page = window.location.hash.replace("#",'');
    if (page === "" || page === undefined) { // TODO: Check valid pages and have a default
        page = "start"
    }
    $("#includedContent").load(page + ".html");
});