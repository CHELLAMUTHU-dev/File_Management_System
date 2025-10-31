const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
    name:String,
    owner: {type:mongoose.Schema.Types.ObjectId, ref:"User"},
    parent:{type:mongoose.Schema.Types.ObjectId, ref:"Folder", default:null},
    createdAt:{type:Date, default:Date.now}
});

module.exports =  mongoose.model("Folder",folderSchema);