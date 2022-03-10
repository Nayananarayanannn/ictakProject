const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// admin login schema
var Admin = new Schema({
 username:{
   type:String,
   required:true
 },
 password:{
  type:String,
  required:true
 }
});

var Admin = mongoose.model("adminUsers", Admin);

module.exports = Admin;