const Indrouter = require('express').Router();
const industrialModel = require('../../Model/industrialModel');

//get industrial data
Indrouter.get("/getIndudata", async (req, res) => {
    try {
        const userIdata = await industrialModel.find();
        res.status(201).json(userIdata);
        console.log(userIdata);

    } catch (error) {
        res.status(422).json(error);
    }
})

//add industrial data

Indrouter.post("/Addindustrial", async (req, res) => {
    // console.log(req.body);
    const { image } = req.body;

    if (!image) {
        res.status(422).json("plz fill the data");
    }

    try {
       
            const adduser = new industrialModel({
                image
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        
    } catch (error) {
        res.status(422).json(error);

    }
})

//delete industrial data

Indrouter.delete("/deletinguser/:id",async(req,res)=>{
    try {
        const {id} =req.params;

        const deleteduser = await industrialModel.findByIdAndDelete({_id:id});
        console.log(deleteduser);
        res.status(201).json(deleteduser);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})

module.exports = Indrouter;  