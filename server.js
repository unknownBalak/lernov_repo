//importing
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import getRequest from "./get.js";
import postRequest from "./post.js";

//app confit
//aplication instanse
const app = express();
const port = process.env.PORT || 3002;
//middleware
app.use(express.json());
app.use(cors());
//DB config
const url =
  "mongodb+srv://admin:sx6akNIArvB0phrT@cluster0.pm2os.mongodb.net/lernovDB?retryWrites=true&w=majority";
mongoose.connect(
  process.env.MONGODB_URI || url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    err ? JSON.stringify(err) : console.log("MongoDB connection SUccessful");
  }
);
//??

//api routes
app.get("/", getRequest);

app.post("/messages", postRequest);

//production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

//listen
app.listen(port, () => console.log("listening the port 3002....."));
