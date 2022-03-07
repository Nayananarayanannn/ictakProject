const Indrouter = require('express').Router();
const industrialModel = require('../Model/industrialModel');

Indrouter.get("/getIndudata",async(req,res)=>{
    try {
        const userIdata = await industrialModel.find();
        res.status(201).json(userIdata);
        console.log(userIdata);
       
    } catch (error) {
        res.status(422).json(error);
    }
    })

module.exports = Indrouter;  