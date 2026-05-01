/******************************************************************
========================== user.model.js ==========================

Purpose:
Create User Schema + Model

Schema decides:
What fields user document should contain
******************************************************************/

const mongoose=require('mongoose');


// Create structure of User collection
const userSchema=new mongoose.Schema({
    userName:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})


// Create User model
// MongoDB collection name => users
const userModel=mongoose.model("User",userSchema);

module.exports=userModel;