const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    isWishList:{
        type:Boolean
    },
    price:{
        type:Number
    },
    addToCart:{
        type:Boolean
    }
})
module.exports=mongoose.model('Product',productSchema);