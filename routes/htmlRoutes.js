db = require("../models")

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Article.find({})
            .then(function(dbArticle) {
                var hbsObject = {
                    article: dbArticle
                }
                console.log(hbsObject)
                res.render("index", hbsObject)
            });
    });
};
