/******************************************************************
========================= post.route.js ===========================

Purpose:
Protected Route Example

This route can be accessed only if token exists and valid.
******************************************************************/


const jwt = require("jsonwebtoken");


const express=require('express');

// Import user model
const userModel = require("../models/user.model");

// Router object
const router=express.Router();



router.post("/create",async(req,res)=>{

      /**************************************************************
    Read token from cookies
    **************************************************************/
    const token=req.cookies.token;
    

    /**************************************************************
    If token not present => user not logged in
    **************************************************************/
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

     /**********************************************************
        Verify token using secret key

        If valid:
        decoded = { id, iat, exp }
        **********************************************************/
    try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            const user=await userModel.findOne({
                _id:decoded.id
            })
            console.log(user);
            }
      /**********************************************************
        Find full user details using id from token
        **********************************************************/
    catch(err){


        /**********************************************************
        If token invalid / expired / modified
        **********************************************************/

        return res.status(401).json({
            message:"Token is Not valid"
        })
    }

       /**************************************************************
    If token valid then route allowed
    **************************************************************/

    res.send("Post created Successfully")
})


module.exports=router;