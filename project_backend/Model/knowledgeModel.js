const mongoose = require('mongoose');

const KnowledgeSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
});

const knowledgeModel = mongoose.model("knowledges", KnowledgeSchema);
module.exports = knowledgeModel;