const mongoose = require("mongoose");
// mongodb+srv://Nayana:Nayana95@ictaktrial.nyh4v.mongodb.net/my-blog?retryWrites=true&w=majority
const Schema = mongoose.Schema;

// courses schema
var Courses = new Schema({
  url: {
    type: String,
  },
  name: {
    type: String,
  },
  status: {
    type: String,
  },
  title: {
    type: String,
  },
  quote: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  objectives: {
    type: Array,
  },
  highlights: {
    type: Array,
  },
  agenda: {
    type: Array,
  },
  eligibility: {
    type: Array,
  },
  fee: {
    type: Number,
    required: true,
  },
  dates: {
    type: Array,
  },
  image: {
    type: String,
  },
});

var coursesModel = mongoose.model("courses", Courses);

module.exports = coursesModel;
