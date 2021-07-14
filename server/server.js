require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Routes
app.use("/user", require("./routes/userRoutes"));
app.use("/api", require("./routes/upload"));

//Connect DB
const URI = process.env.MONGODB_URL;
const PORT = process.env.PORT;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("Ingresa a conectarse: ", URI, "Correcto");
    if (err) throw err;
    console.log("Connected to mongo db");
    app.listen(PORT, () => {
      console.log(" Puerto mongo: ", URI);
      console.log("Servidor corriendo en puerto ", PORT);
    });
  }
);
