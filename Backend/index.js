require("dotenv").config();
const express = require("express");
const DBconnect = require("./src/config/connect");
const port = process.env.PORT || 5000;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the API" });
});


app.listen(port,async()=>{
    try{
        await DBconnect;
        console.log(`Server running on port ${port}`);
    }
    catch(error){
        console.error("Error connecting to database", error);
        
    }
})