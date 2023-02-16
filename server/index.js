import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//https://www.mongodb.com
const CONNECTION_URL =
  "mongodb+srv://javascriptmemoryproject:javascriptmemoryproject123@cluster0.qjnmqhw.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server in working on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
