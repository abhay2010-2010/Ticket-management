const mongoose= require('mongoose');
const connect=mongoose.connect("mongodb://");

connect.on('connected',()=>{
    console.log('Connected to MongoDB...');
});

connect.on('error',(err)=>{
    console.log('Error connecting to MongoDB...',err);
});

const xx=2;
