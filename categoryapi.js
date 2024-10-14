const express=require('express');
const Category=require('../model/Category');
async function getProduct(req,res){
    try{
        const category=await Category.find();
        res.send(category);
    }catch(error){
        res.status(400).send('users not found');
    }
}
async function getProductById(req,res){
    try{
      const category=await Category.findOne({_id:req.params.id});
      res.send(category);
    }catch(error){
      res.status(400).send(`user not found ${error}`);
    }
}
async function postProduct(req,res){
    try{
        const {name,products}=req.body;
        const category= new Category({
           name,
           products
        })
        await category.save();
        res.send(category);
    }catch(error){
        res.status(400).send(`user not found ${error}`);
    }
}
async function postMoreProduct(req,res){
    try {
        const { products } = req.body;
    
        const updatedCategory = await Category.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { products: { $each: products } } }, // Add new products to the array
            { new: true } // Return the updated document
        );
    
        if (!updatedCategory) {
            return res.status(404).send('Category not found');
        }
    
        res.send(updatedCategory);
    } catch (error) {
        res.status(400).send(`Error updating products: ${error}`);
    }
    
}
async function updateProduct(req,res){
    try{
        const { name, products } = req.body;
       const category=await Category.findByIdAndUpdate(req.params.id,{
        name,
        products
       },{new:true});
       await category.save();
       res.send(category);
    }catch(error){
        res.status(400).send(`user not found ${error}`);
    }
}
async function updateSubProductById(req,res){
    try {
        const { name, img, isWishList,price,addToCart } = req.body;

        // Check if the category exists
        const category = await Category.findOne({ 'products._id': req.params.id });

        if (!category) {
            return res.status(404).send('Category not found');
        }

        // Find the product within the category by its ID
        const product = category.products.id(req.params.id);

        if (!product) {
            return res.status(404).send('Product not found in the category');
        }

        // Update the product properties
        product.name = name ;
        product.img = img;
        product.isWishList = isWishList ;
        product.price=price;
        product.addToCart=addToCart;
        // Save the updated category
        await category.save();

        res.send(category);
    } catch (error) {
        res.status(400).send(`Error updating product: ${error}`);
    }
}
async function deleteProduct(req,res){
    try{
        const category=await Category.deleteOne({_id:req.params.id});
        res.status(200).send('deleted successfully');
    }catch(error){
        res.status(400).send(`user not found ${error}`);
    }
}
module.exports={
    getProduct,getProductById,postProduct,updateProduct,deleteProduct,postMoreProduct,updateSubProductById
}