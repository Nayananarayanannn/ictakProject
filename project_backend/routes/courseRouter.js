const router = require('express').Router();
const Courses = require('../Model/coursesModel');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
console.log(__dirname)


// Multer codes for file uploading
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, (path.join(__dirname,'../../ICTAK-PROJECT/public/courseImages')))
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

// filter image files
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

// get courses list
router.route('/').get((req,res)=>{
    Courses.find().then(function(courses){
        res.json(courses);
    })
})


// get single course page
router.route('/:name').get((req,res)=>{
    const courseName = req.params.name;

    Courses.findOne({url:courseName}).then((course)=>{
        res.json(course);
    })
})

module.exports = router;