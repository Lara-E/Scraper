var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
      type: String,
  },
  saved: {
      type: Boolean,
      default: false
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  new: {
    type: Boolean,
    default: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;