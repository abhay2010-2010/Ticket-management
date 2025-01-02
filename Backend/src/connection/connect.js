const mongoose= require('mongoose');
const connect=mongoose.connect("mongodb://");

connect.on('connected',()=>{
    console.log('Connected to MongoDB...');
});