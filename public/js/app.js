$(document).on("click", ".save-article", function (event) {
    event.preventDefault();
    var articleId = $(this).data("data-id");
    $.ajax({
      url: "/articles/save/" + articleId,
      type: "GET",
      success: function (response) {
        window.location.href = "/";
      }
    });
  });

  $(document).on("click", "#scrape", function(event) {
      console.log("clicked")
    //   event.preventDefault();
      $.ajax({
          url: "/scrape",
          type: "GET",
          success: function(response) {
              window.location.href = "/";
          }
      });
  });