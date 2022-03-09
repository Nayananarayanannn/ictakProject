const router = require("express").Router();
const Courses = require("../../Model/coursesModel");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const nodemailer = require("nodemailer");

// Multer codes for file uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../../project_frontend/public/courseImages"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

// filter image files
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

// get courses list
router.route("/").get((req, res) => {
  Courses.find().then(function (courses) {
    res.json(courses);
  });
});

// get single course page
router.route("/:name").get((req, res) => {

  const courseName = req.params.name;

  Courses.findOne({ url: courseName }).then((course) => {
    res.json(course);
  });
});

// add new course
router.route("/add-course").post(upload.single('image'),(req,res)=>{
  console.log(req.body);
  var item={
    url:req.body.url,
    name:req.body.name,
    status:req.body.status,
    title:req.body.title,
    quote:req.body.quote,
    shortDescription:req.body.shortDescription,
    fee:req.body.fee,
    image:req.file.filename
  };
  const course= new Courses(item);
  course.save();
  res.send("ok");
})

// update courses
router.route(`/edit-course/:name`).post(upload.single('image'),(req,res)=>{
  const id = req.params.name

  const course = Courses.findOne({url:id})
  var image= course.image;

  const url = req.body.url;
  const name = req.body.name;
  const status=req.body.status;
  const title=req.body.title;
  const quote = req.body.quote;
  const shortDescription=req.body.shortDescription;
  const fee = req.body.fee;
  if(req.file){
    image=req.file.filename;
  }
  const filter={url:id};

  const update={$set:{url:url,status:status,quote:quote,shortDescription:shortDescription,fee:fee,title:title,name:name,image:image}};

  Courses.findOneAndUpdate(filter, update, { new: true })
  .then(function(course){
    res.json(course)
  }
  )
})
// delete courses
router.route('/delete-course/:id').post( function (req, res) {
  const url = req.params.id
  console.log(url)
  Courses.findOneAndDelete({ url: url})
      
        .then(function () {
  
            console.log("deleted")
            res.send("deleted")
  
        })  
})

// post route for sending brochure using nodemailer
router.route("/:name/mailer").post((req, res) => {

  const courseName = req.params.name;

  Courses.findOne({ url: courseName }).then((course) => {
    const mail = req.body.mail;
    const name = req.body.name;
    async function main() {

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, 
        auth: {
          user: "ictpro2022@gmail.com",
          pass: "Ict2022@",
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "ictpro2022@gmail.com", // sender address
        to: mail, // list of receivers
        subject: "ICTAK", // Subject line// plain text body
        html: `<h1 style="text-align:center">Exciting opportunities for the youths of Kerala!...</h1>
        <br/>
        <p>Dear ${name},</p>
        <p>Thanks for your interest in ${course.name}</p>
        <p><b>ICT Academy of Kerala</b>, a social enterprise under Govt. of Kerala join hands with NORKA-Roots to cherish the career aspirations of youths by offering futuristic technology courses like Full stack Developer,Data Science and Analytics, Robotic Process Automation to grab jobs within India and abroad with lucrative benefits and faster career job augmentation. It is a magnificent footstep for the young minds to open their employability vistas to the world and this course 
        in association with NORKA-Roots will be an asset for the youths of Kerala which will address the issue of unemployment.</p>
        <p>Thanks and regards</p>
        <p>ICT Accademy of Kerala</p>`, // html body
        attachments:[
          {
            filename:"ABCD_Brochure.pdf",
            path:path.join(__dirname,"../../public/brochures/ABCD-Brochure.pdf")
          },
          {
            filename:"RPA Brochure.pdf",
            path:path.join(__dirname,"../../public/brochures/RPA Brochure.pdf")
          },
          {
            filename:"Certified Specialist in  DS .pdf",
            path:path.join(__dirname,"../../public/brochures/Certified Specialist in  DS .pdf")
          }
        ]
      });
    }
    
    main()
      .then(console.log("mail sent"))
      .then(res.json(mail))
      .catch(console.error);
  });
});

module.exports = router;
