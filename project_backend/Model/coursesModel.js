const mongoose = require("mongoose");
// mongodb+srv://Nayana:Nayana95@ictaktrial.nyh4v.mongodb.net/my-blog?retryWrites=true&w=majority
const Schema = mongoose.Schema;

// courses schema
var Courses = new Schema({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  objectives: {
    type: Array,
    required: true,
  },
  highlights: {
    type: Array,
    required: true,
  },
  agenda: {
    type: Array,
    required: true,
  },
  eligibility: {
    type: Array,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  dates: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

var coursesModel = mongoose.model("courses", Courses);

module.exports = coursesModel;
