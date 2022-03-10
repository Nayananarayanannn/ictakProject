const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// courses schema
var Testimonials = new Schema({
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  placed:{
    type:String,
    required:true,
  },
  quote:{
    type:String,
    required:true,
  },
  course:{ 
    type:String,
    required:true,
  }
});

var testimonialModel = mongoose.model("testimonials", Testimonials);

module.exports = testimonialModel;
