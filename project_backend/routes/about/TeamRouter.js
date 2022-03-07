const router = require('express').Router();
const teamModel = require('../Model/teamModel');


//add team

router.post("/Addteam",async(req,res)=>{
    // console.log(req.body);
    const {name,email,designation,profileimg} = req.body;

    if(!name || !designation||!profileimg){
        res.status(422).json("plz fill the data");
    }

    try {
        const preuser = await teamModel.findOne({email:email});
        console.log(preuser);
        
        if(preuser){
            res.status(422).json("user is already present");
        }else{
            const adduser = new teamModel({
                name,email,designation,profileimg 
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    } catch (error) {
        res.status(422).json(error);
        
    }
})


//get user data

router.get("/getdata",async(req,res)=>{
try {
    const userdata = await teamModel.find();
    res.status(201).json(userdata);
    console.log(userdata);
} catch (error) {
    res.status(422).json(error);
}
})

//get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);

        const {id} =req.params;

        const userindividual = await teamModel.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    } catch (error) {
        res.status(422).json(error);
    }
})

//update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} =req.params;

        const updateduser = await teamModel.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})

//delete user

router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} =req.params;

        const deleteduser = await teamModel.findByIdAndDelete({_id:id});
        console.log(deleteduser);
        res.status(201).json(deleteduser);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})

module.exports = router;