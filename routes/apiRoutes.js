db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");


module.exports = function(app) {
    app.get("/scrape", function(req, res) {

        db.Article.update({ "new": true }, { $set: { "new": false } }, { multi: true })
            .then(function(dbArticle) {
                res.json(dbArticle);
            })
            .catch(function(err) {
                res.json(err)
            })

        // First, we grab the body of the html with axios
        axios.get("https://www.espn.com/nfl/").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);

            // Now, we grab every h2 within an article tag, and do the following:
            $("section.contentItem__content").each(function(i, element) {
                // Save an empty result object
                var result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.title = $(this)
                    .find("h1.contentItem__title")
                    .text();
                result.link = $(this)
                    .children("a")
                    .attr("href");
                result.summary = $(this)
                    .find("p.contentItem__subhead")
                    .text();
                // console.log(result)
                if (result.title && result.link) {
                    db.Article.create(result)
                        .then(function(dbArticle) {
                            // View the added result in the console
                            console.log(dbArticle);
                        })
                        .catch(function(err) {
                            // If an error occurred, log it
                            console.log(err);
                        });
                }
            });

            // Send a message to the client
            res.redirect("/");
        });
    });

    app.get("/articles/save/:id", function(req, res) {
        db.Article.updateOne({ _id: req.params.id }, { $set: { "saved": true } })
            .then(function(dbArticle) {
                res.redirect("/")
            })
            .catch(function(err) {
                res.json(err)
            })
    });

    app.post("/articles/:id", function(req, res) {
        db.Note.create(req.body)
            .then(function(dbNote) {
                return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
            })
            .then(function(dbArticle) {
                res.json(dbArticle)
            })
            .catch(function(err) {
                res.json(err)
            })
    });

    app.get("/articles/:id", function(req, res) {
        db.Article.findOne({ _id: req.params.id })
            .populate("note")
            .then(function(dbArticle) {
                res.json(dbArticle)
            })
            .catch(function(err) {
                res.json(err)
            })
    });

    app.get("/articles/delete/:id", function(req, res) {
        db.Article.updateOne({ _id: req.params.id }, { $set: { "saved": false } })
            .then(function(dbArticle) {
                res.redirect("/saved")
            })
            .catch(function(err) {
                res.json(err)
            })
    });


    app.delete("/notes/:id", function(req, res) {
        var id = req.params.id;
        db.Article.findById(id)
            .then(function(dbArticle) {
                var noteId = dbArticle.note;
                return db.Note.findByIdAndRemove(noteId);
            }).then(function() {
                res.json({ "message": "success" })
            })
            .catch(function(err) {
                res.json(err);
            })
    })
}
