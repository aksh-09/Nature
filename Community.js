const mongoose=require('mongoose');
const schema=mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Community",schema);