const Folder = require("../model/folderModel");

const createFolder = async (req, res) => {
  try {
    const folder = await Folder.create({
      name: req.body.name,
      owner: req.user.id,
      parent: req.body.parent || null,
    });
    res.status(201).json(folder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const listFolders = async (req, res) => {
  const folders = await Folder.find({ owner: req.user.id });
  res.json(folders);
};

module.exports = {createFolder, listFolders}