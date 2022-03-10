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
    type: String,
  },
  agenda: {
    type: String,
  },
  eligibility: {
    type: String,
  },
  fee: {
    type: Number,
    required: true,
  },
  dates:{ 
    type: String,
  },
  image: {
    type: String,
  },
});

var coursesModel = mongoose.model("courses", Courses);

module.exports = coursesModel;
