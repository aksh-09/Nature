import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, mapToCanActivate } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
constructor(private productService:ProductsService,private route:ActivatedRoute,private userDataService:UserDataService){}
products:any;
flag:boolean=true;
ngOnInit(): void {
  this.route.params.subscribe((params)=>{
    const productId=params['id'];
    this.productService.getProductDataById(productId).subscribe((data)=>{
      this.products=data.products;
    })
  })
}
onClick(product){
 if(this.userDataService.isAuthenticated()){
  product.isWishList=!product.isWishList;
  console.log(product)
  this.productService.updateSubProductBtId(product._id,product).subscribe((data)=>{
   console.log(data); 
  })
 }else{
  alert('you need to login first to add to wishlist');
 }
}
addToCart(product){
if(this.userDataService.isAuthenticated()){
  product.addToCart=!product.addToCart;
 
  if(product.addToCart){
    alert("Your Item Has been Added!");
    if(product.isWishList)
    product.isWishList=false;
  }else{
    if (window.confirm("Your Item Has been Removed From Cart. Do you want to add it to your wishlist?")) {
      // User clicked "OK"
      product.isWishList = true;
    } 
  }
  this.productService.updateSubProductBtId(product._id,product).subscribe((data)=>{
    console.log(data);
 })
}else{
  alert('you need to login first to add to cart');
}

}

}
