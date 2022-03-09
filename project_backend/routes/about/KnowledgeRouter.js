const Knorouter = require('express').Router();
const knowledgeModel = require('../../Model/knowledgeModel');

//get knowledge data
Knorouter.get("/getKnowdata", async (req, res2) => {
    try {
        const userKdata = await knowledgeModel.find();
        res2.status(201).json(userKdata);
        console.log(userKdata);

    } catch (error) {
        res2.status(422).json(error);
    }
})

//add knowledge data

Knorouter.post("/Addknowledge", async (req, res) => {
    // console.log(req.body);
    const { image } = req.body;

    if (!image) {
        res.status(422).json("plz fill the data");
    }

    try {
       
            const adduser = new knowledgeModel({
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

Knorouter.delete("/deletingpartner/:id",async(req,res)=>{
    try {
        const {id} =req.params;

        const deleteduser = await knowledgeModel.findByIdAndDelete({_id:id});
        console.log(deleteduser);
        res.status(201).json(deleteduser);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})

module.exports = Knorouter;  