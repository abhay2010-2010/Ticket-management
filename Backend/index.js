const express=require("express");
const PORT=process.env.PORT || 5000;
const app=express();

app.get("/api",(req,res)=>{
    res.json({message:"Hello from the API"});
});


app.listen(PORT,async()=>{
    try {
        await 
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
       console.log("Failed to connet connection"); 
    }
});

// Connect to MongoDB
