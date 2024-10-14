const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String
    }
})
module.exports=mongoose.model("ContactUs",schema);