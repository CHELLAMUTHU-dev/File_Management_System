const express = require("express");
const upload  = require("../config/multer");
const protect = require("../middleware/auth.middleware")
const {deleteFile, listOfFiles, uploadFile,getSharedFile, shareFile} = require("../controller/fileController");

const router = express.Router()


router.post("/upload",protect,upload.single("file"),uploadFile );
router.get("/",protect,listOfFiles);
router.delete("/:id",protect,deleteFile);
router.get("/shared/:shareId", getSharedFile)
router.post("/share/:id", protect, shareFile)

module.exports = router;