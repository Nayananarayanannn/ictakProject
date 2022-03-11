const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// contactus register schema
var Contact = new Schema({
 name:{
   type:String,
   required:true
 },
 email:{
  type:String,
  required:true
 },
 message:{
  type:String,
   required:true
 }
});

var Contact = mongoose.model("contacts", Contact);

module.exports = Contact;