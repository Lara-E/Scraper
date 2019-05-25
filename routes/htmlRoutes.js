db = require("../models")

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Article.find({ "new": true })
            .then(function(dbArticle) {
                // console.log(dbArticle == 0)
                // var hbsObject;
                // if (dbArticle == 0) {
                //     $("#no-new").show();
                //     $(".save-article").hide();
                //     $(".article-link").hide();
                // } else {
                //     $("#no-new").hide();
                //     $(".save-article").show();
                //     $(".article-link").show();
                //     hbsObject = {
                //         article: dbArticle
                //     }
                // }
                var hbsObject = {
                    article: dbArticle
                }
                res.render("index", hbsObject)
            });
    });

    app.get("/saved", function(req, res) {
        db.Article.find({ "saved": true })
            .then(function(dbArticle) {
                var hbsObject = {
                    article: dbArticle
                }
                console.log(hbsObject)
                res.render("saved", hbsObject)
            });
    });

};
