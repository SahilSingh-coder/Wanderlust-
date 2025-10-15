const mongoose = require("mongoose");
const { Schema } = mongoose;   // ✅ correctly import Schema

const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Create the Review model
const Review = mongoose.model("Review", reviewSchema);

// Export the model
module.exports = Review;
