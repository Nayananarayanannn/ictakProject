const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique:true,
    // },
    designation: {
      type: String,
      required: true,
    },
    profileimg: {
      type: String,
      required: true,
    },
  });
  
  const teamModel = mongoose.model("teams", TeamSchema);
  module.exports = teamModel;