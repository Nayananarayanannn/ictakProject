const router = require('express').Router();
const Testimonials = require('../../Model/testimonialModel');

// get testimonials list
router.route("/").get((req, res) => {
    Testimonials.find().then(function (tests) {
      res.json(tests);
    });
  });

  module.exports=router;

// post testimonials
router.route("/add-test").post((req,res)=>{
  console.log(req.body);
  var item={
    name:req.body.name,
    quote:req.body.quote,
    image:req.body.image,
    course:req.body.course,
    placed:req.body.placed
  }
  const testimonial = new Testimonials(item);
  testimonial.save();
  res.send("Added Testimonials")
})

// delete testimonials
router.route("/delete/:name").post((req,res)=>{
  const name = req.params.name;
  Testimonials.findOneAndDelete({ name: name })
  .then(function(){
    console.log("deleted");
    res.send("deleted")
  })
})