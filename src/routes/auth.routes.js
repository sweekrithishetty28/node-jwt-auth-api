/******************************************************************
========================= auth.routes.js ==========================

Purpose:
All authentication routes kept separately

/api/auth/register
******************************************************************/

const express=require('express');

// Import controller
const authController=require('../controllers/auth.controller');


// Create router object
const router=express.Router();


// Register route
router.post('/register', authController.register);

module.exports=router;