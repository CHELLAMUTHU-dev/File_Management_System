const express = require("express");
const protect = require("../middleware/auth.middleware");
const {createFolder, listFolders} = require("../controller/folderController");


const router = express.Router();


router.post("/",protect,createFolder);
router.get("/",protect,listFolders);


module.exports = router