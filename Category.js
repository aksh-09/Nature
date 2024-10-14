const mongoose=require('mongoose');
const productSchema=require('./Product');
const categorySchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[productSchema.schema]
})
module.exports=mongoose.model('category',categorySchema);