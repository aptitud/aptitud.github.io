$(function () {
    var page = window.location.hash.replace("#",'');
    if (page === "" || page === undefined) { // TODO: Check valid pages and have a default
        page = "fellow"
    }
    $("#includedContent").load(page + ".html");
});