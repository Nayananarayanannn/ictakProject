const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ccourses register schema
var CourseRegister = new Schema({
 name:{
   type:String,
   required:true
 },
 email:{
  type:String,
  required:true
 },
 course:{
  type:String,
   required:true
 }
});

var courseRegister = mongoose.model("courseRegister", CourseRegister);

module.exports = courseRegister;