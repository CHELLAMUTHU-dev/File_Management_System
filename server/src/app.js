const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
dotenv.config();


const connectDB = require('./config/db')
const authRoute = require("./router/authRoute")
const fileRoute = require("./router/fileRoute")
const folderRoute = require("./router/folderRoute")



connectDB()


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads",express.static("uploads"))

app.use("/api/auth", authRoute);
app.use("/api/file", fileRoute);
app.use("/api/folder", folderRoute);


app.get("/", (req,res) => res.send("Api is running for file-management system"))





module.exports = app