const router = require('express').Router();
const Admin = require('../../Model/AdminModel');

// jwt and bcrypt for authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.route('/signup').post(async (req,res)=>{
    try{
      
      // encrypt password
      const newPassword = await bcrypt.hash(req.body.password, 10);
  
      // create user document on signup
      const user = await Admin.create({
        username: req.body.username,
        password: newPassword,
      })
      res.json({ status: 'ok' });
      console.log(req.body);
    } catch (err) {
      res.json({ status:'error',error: err });
      console.log(err);
    }
  });

router.route('/login').post( async (req,res)=>{

    // Find the particular user from DB with login username
    const user = await Admin.findOne({ 
      username: req.body.username,
    })
    console.log(user);
    console.log(req.body.username);
  
    // if username not registered, throw error
    if(!user){
      return res.json({ status:'error', error: 'Invalid User'})
    }
  
    const isPasswordvalid = await bcrypt.compare( req.body.password, user.password )
  
    if(user&&isPasswordvalid){
      const token = jwt.sign({
  
        username: req.body.username,
      },
      'secret'
      )
      res.json({ status: 'ok', user: token })
    }
    else{
      res.json({ status: 'error', user: false })
    }
  });

  module.exports=router;