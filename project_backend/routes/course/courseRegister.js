const router = require('express').Router();
const RegisterData = require('../../Model/courseRegisterModal');

// post data from form
router.route('/add').post((req,res)=>{
    var item = {
        name:req.body.name,
        email:req.body.email,
        course:req.body.course
    }
    const data = new RegisterData(item);
    data.save();
    res.send("Added registered details");
})

// get data of registered students
router.route('/get').get((req,res)=>{
    RegisterData.find().then(function(registered){
        res.json(registered);
        console.log(registered);
    })
})

module.exports=router;