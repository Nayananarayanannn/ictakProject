const router = require('express').Router();
const PartnershipData = require('../../Model/PartnershipModel');

// post data from form
router.route('/add').post((req,res)=>{
    var item = {
        name:req.body.name,
        address:req.body.email,
        head:req.body.head,
        nature:req.body.nature,
        id:req.body.id,
        gstn:req.body.gstn,
        website:req.body.website,
        contactname:req.body.contactname,
        phone:req.body.phone,
        email:req.body.email,
        employees:req.body.employees
    }
    const data = new PartnershipData(item);
    data.save();
    res.send("Added partnership details");
})

// get data of registered students
router.route('/get').get((req,res)=>{
    PartnershipData.find().then(function(registered){
        res.json(registered);
        console.log(registered);
    })
})

module.exports=router;