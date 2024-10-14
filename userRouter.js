const express=require('express');
const router=express.Router();
const authMethods=require('../controller/userApi');
router.post('/login',authMethods.loginUser);
router.post('/register',authMethods.registerUser);

module.exports=router;