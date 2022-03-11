const router = require('express').Router();
const Contact = require('../../Model/contactUsModel');

// post data from form
router.route('/add').post((req,res)=>{
    var item = {
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }
    const data = new Contact(item);
    data.save();
    res.send("Added contact details");
})

// get data of registered students
router.route('/get').get((req,res)=>{
    Contact.find().then(function(contacted){
        res.json(contacted);
        console.log(contacted);
    })
})

module.exports=router;