$(document).on("click", ".save-article", function (event) {
    event.preventDefault();
    console.log("clicked")
    var articleId = $(this).data("id");
    console.log(articleId)
    $.ajax({
      url: "/articles/save/" + articleId,
      type: "GET",
      success: function (response) {
        window.location.href = "/";
      }
    });
  });

  $(document).on("click", "#scrape", function(event) {
    //   event.preventDefault();
      $.ajax({
          url: "/scrape",
          type: "GET",
          success: function(response) {
              window.location.href = "/";
          }
      });
  });