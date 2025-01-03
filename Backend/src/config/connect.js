//require("dotenv").config();
const mongoose=require("mongoose");
//const url=process.env.mongo_URL;
const DBconnect=mongoose.connect("mongodb+srv://aabhhayy2010:rWQnKyU4UHpfM5Y4@cluster0.pxke5af.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

module.exports=DBconnect;