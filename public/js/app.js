$(document).on("click", ".save-article", function(event) {
    event.preventDefault();
    var articleId = $(this).data("id");
    console.log(articleId)
    $.ajax({
        url: "/articles/save/" + articleId,
        type: "GET",
        //   success: function (response) {

        //   }
    });

});

$(document).on("click", "#scrape", function(event) {
    event.preventDefault();
    console.log("click")
    $.ajax({
        url: "/scrape",
        type: "GET",
        success: function(response) {
        }
    })
    $("#modal1").modal("show");
});

$(document).on("click", ".modal-close", function(event) {
    console.log("clicked")
    location.reload(true);
})
