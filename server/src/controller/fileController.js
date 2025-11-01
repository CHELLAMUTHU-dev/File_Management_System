  const File = require("../model/fileModel");
  const {v4} = require('uuid')
  const fs = require("fs");
  const path = require("path")



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


  const shareFile = async(req,res) => {
    try {
      const file = await File.findById(req.params.id) 
      if (!file) return res.status(404).json({ message: "File not found" });

      file.shareId = v4()
      await file.save()

      const shareableLink = `${req.protocol}://${req.get("host")}/api/file/shared/${file.shareId}`;
      res.json({ link: shareableLink });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  const getSharedFile =async (req,res) => {
      try {
      const file = await File.findOne({ shareId: req.params.shareId });
      if (!file) return res.status(404).json({ message: "Invalid or expired link" });

  const filePath = path.resolve(file.path); // full path
    res.download(filePath, file.filename);
      } catch (err) {
      res.status(500).json({ error: err.message });
    }

  }

  module.exports = {deleteFile, listOfFiles, uploadFile, getSharedFile, shareFile}