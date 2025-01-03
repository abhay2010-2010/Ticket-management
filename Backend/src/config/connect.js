require("dotenv").config();
const mongoose=require("mongoose");
const url=process.env.mongo_URL;
const DBconnect=mongoose.connect("url");

module.exports=DBconnect;