/******************************************************************
============================ db.js ================================

Purpose:
Connect Node.js project with MongoDB database
******************************************************************/



// Import mongoose
const mongoose=require('mongoose');


// Function to connect database
async function connectDB(){
try{

    // Connect using MONGO_URI from .env file
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")
}
catch(error){
    console.error("Error connecting to MongoDB:", error)
}
}
module.exports=connectDB;