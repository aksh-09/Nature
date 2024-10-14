import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private productService:ProductsService,private route:ActivatedRoute){}
  products:any;
  ngOnInit(): void {
    this.displayProduct();
  }
  onClickWishList(product){
    product.isWishList = !product.isWishList;
    console.log(product)
    this.productService.updateSubProductBtId(product._id,product).subscribe((data)=>{
     console.log(data); 
     this.displayProduct();
    })
  }
  onClick(product){
    product.addToCart=!product.addToCart;
    product.isWishList=!product.isWishList;
    this.productService.updateSubProductBtId(product._id,product).subscribe((data)=>{
      console.log(data); 
      this.displayProduct();
     })
  }
  displayProduct(){
    this.productService.getProductData().subscribe((data) => {
      const allProducts = data.flatMap(category => category.products);
      const wishListProducts = allProducts.filter(product => product.isWishList);
      this.products=wishListProducts;
      // console.log(wishListProducts);
    });
  
  }
}
