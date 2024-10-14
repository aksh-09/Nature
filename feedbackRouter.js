const express=require('express');
const router=express.Router();
const feedbackMethods=require('../controller/feedbackapi');
router.post('/feedback',feedbackMethods.postData);
module.exports=router