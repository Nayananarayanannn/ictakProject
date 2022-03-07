const Knorouter = require('express').Router();
const knowledgeModel = require('../Model/knowledgeModel');

Knorouter.get("/getKnowdata", async (req, res2) => {
    try {
        const userKdata = await knowledgeModel.find();
        res2.status(201).json(userKdata);
        console.log(userKdata);

    } catch (error) {
        res2.status(422).json(error);
    }
})

module.exports = Knorouter;  