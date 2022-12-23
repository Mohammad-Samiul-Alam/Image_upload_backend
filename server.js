import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './routes/user.route.js';
import bodyParser from "body-parser";
import cors from 'cors';
// import ImageModel from "./image.model.js";
// import multer from "multer";

dotenv.config();
mongoose.set("strictQuery", false);

const port = process.env.PORT;
const mongo = process.env.DB;
const app = express();


// Body Parser
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use(express.static("uploads"));

// Route 
app.use("/", userRoute);

mongoose.connect(
  mongo,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`MONGO DB Connected!`);
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Storage
// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: Storage,
// }).single("testImage");

// app.post("/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const newImage = new ImageModel({
//         name: req.body.name,
//         image: {
//           data: req.file.filename,
//           contentType: "image/png",
//         },
//       });
//       newImage
//         .save()
//         .then(() => res.send("successfully uploaded"))
//         .catch((err) => console.log(err));
//     }
//   });
// });
