const express = require('express');
const Courses = require('./Model/coursesModel');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,OPTIONS,PUT,PATCH,DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-with,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });

  const courseRouter = require('./routes/courseRouter');
  app.use('/api/courses',courseRouter)


app.listen(process.env.PORT||8000,()=>{
    console.log('Server running on port 8000...')
})