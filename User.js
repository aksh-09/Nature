const mongoose=require('mongoose')
const Product=require('./Product');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
   
})

module.exports=mongoose.model('user',schema)