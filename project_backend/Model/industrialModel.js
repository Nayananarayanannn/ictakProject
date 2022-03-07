const mongoose = require('mongoose');

const IndustrialSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true,
    },
});
  
const industrialModel = mongoose.model("industrials", IndustrialSchema);
module.exports = industrialModel;