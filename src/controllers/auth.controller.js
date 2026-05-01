/******************************************************************
========================= auth.controller.js ========================

Purpose:
Handles authentication related logic.
Here we created REGISTER API.

Flow:
1. Get data from request body
2. Check user already exists or not
3. Create new user
4. Generate JWT token
5. Store token in cookie
6. Send response
******************************************************************/

// Import user model (MongoDB collection)
const userModel=require('../models/user.model');

// Import JWT package for token generation
const jwt=require('jsonwebtoken');

// Register controller function
async function register(req,res){

      // Get values from frontend/Postman body
    const{userName, email, password}=req.body;


    /**************************************************************
    Check whether user already exists with same email
    **************************************************************/
    const isUserExist=await userModel.findOne({
        email
    })

     // If already exists send conflict response
    if(isUserExist){
        res.status(409).json({
            message:"User Already Exists"
        })
    }

     /**************************************************************
    Create new user in MongoDB
    **************************************************************/
    const user=await userModel.create({userName, email, password});

     /**************************************************************
    Generate JWT Token

    Payload:
    { id : user._id }

    Secret Key:
    process.env.JWT_SECRET

    Expiry:
    24 hours
    **************************************************************/
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'24h'});



    /**************************************************************
    Store token in browser/Postman cookie
    **************************************************************/
    res.cookie('token',token);  


     /**************************************************************
    Send success response
    **************************************************************/
    res.status(201).json({message:'User registered successfully',
        user,
        token});
   
}
module.exports={register};