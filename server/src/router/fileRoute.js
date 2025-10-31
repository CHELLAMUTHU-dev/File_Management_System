const express = require("express");
const upload  = require("../config/multer");
const protect = require("../middleware/auth.middleware")
const {deleteFile, listOfFiles, uploadFile} = require("../controller/fileController");

const router = express.Router()


router.post("/upload",protect,upload.single("file"),uploadFile );
router.get("/",protect,listOfFiles);
router.delete("/:id",protect,deleteFile);

module.exports = router;