const express=require('express')
const router=express.Router();
const communityMethods=require('../controller/community');
router.post('/community',communityMethods.postEmail);
module.exports=router;