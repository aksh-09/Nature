const express=require('express');
const router=express.Router();
const categoryController=require('../controller/categoryapi');
router.get('/products',categoryController.getProduct);
router.get('/products/:id',categoryController.getProductById);
router.post('/products',categoryController.postProduct);
router.put('/products/:id',categoryController.postMoreProduct)
router.put('/products/:id',categoryController.updateProduct);
router.put('/subproducts/:id',categoryController.updateSubProductById);
router.delete('/products/:id',categoryController.deleteProduct);
module.exports=router;