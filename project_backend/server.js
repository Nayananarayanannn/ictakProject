const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const courseRouter = require("./routes/course/courseRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(cors()); //set cors

// cors headers
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

// mongodb connection
mongoose
  .connect(
    "mongodb+srv://ictpro2022:Ict2022@cluster0.bjv0s.mongodb.net/ICTProject",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("mongoDB connected...");
  })
  .catch((err) => {
    console.log("connection failed!", err.stack);
  });

// routes
app.use("/api/courses", courseRouter);

// listen port
app.listen(process.env.PORT || 8000, () => {
  console.log("Server running on port 8000...");
});
