const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  shareId: {
    type: String,
    default:() => uuidv4(),
    unique: true,  
  },
});

module.exports = mongoose.model("File", fileSchema);
