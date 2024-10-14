const express=require('express');
const router=express.Router();
const contactUsMethods=require('../controller/contactUsapi');
router.post('/contactUs',contactUsMethods.postMessage);
module.exports=router;