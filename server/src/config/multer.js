
const multer = require('multer')
const path = require("path")


const storage = multer.diskStorage({
    destination:(req,file, cb) => cb(null, "uploads/"),
    filename:(re,file,cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 10e9)
        cb(null, unique+path.extname(file.originalname))
    },
});


const upload = multer({storage})

module.exports = upload