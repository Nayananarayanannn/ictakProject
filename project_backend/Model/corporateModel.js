const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// partnership register schema
var Corporate = new Schema({
 name:{
   type:String,
   required:true
 },
 address:{
  type:String,
  required:true
 },
 head:{
  type:String,
   required:true
 },
 nature:{
     type:String,
     required:true
 },
 id:{
     type:String,
     required:true
 },
 gstn:{
     type:String,
     required:true
 },
 website:{
     type:String,
     required:true
 },
 contactname:{
     type:String,
     required:true
 },
 phone:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true
 },
 employees:{
    type:Number,
    required:true
 }
});

var Corporate = mongoose.model("corporates", Corporate);

module.exports = Corporate;