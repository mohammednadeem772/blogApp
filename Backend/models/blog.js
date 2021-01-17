var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Tilte should not be empty."],
      unique: true,
    },
    content: {
      type: String,
      trim: true,
      required: [true, "Content should not be empty."],
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
