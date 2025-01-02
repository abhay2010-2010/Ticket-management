const express=require("express");
const PORT=process.env.PORT || 5000;
const app=express();

app.get("/api",(req,res)=>{
    res.json({message:"Hello from the API"});
});


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

// Connect to MongoDB
