const File = require("../model/fileModel");
const fs = require("fs");



//upload a file
const uploadFile = async(req, res) => {
    try {
        const file = await File.create({
            filename:req.file.filename,
            path: req.file.path,
            size:req.file.size,
            mimetype:req.file.mimetype,
            owner: req.user.id,
        })
        res.status(201).json({message:"Upload Successfully", file})
    } catch (error) {
        res.status(501).json({message:error.message})
    }
}

//retrive files using owner id
const listOfFiles = async(req, res) => {
    const files = await File.find({owner:req.user.id});
    res.status(201).json(files)
}


//delete file
const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
      await file.deleteOne();
    

    res.json({ message: "File deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {deleteFile, listOfFiles, uploadFile}