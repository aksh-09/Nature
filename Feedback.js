const mongoose =require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    feedback:{
       type:String,
       required:true
    }
})
module.exports=mongoose.model("Feedback",schema);