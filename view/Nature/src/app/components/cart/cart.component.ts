import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductsService) {
  }
  products: any;
  totalProducts: any;
  totalPrice: any;
  ngOnInit(): void {
    this.calculateTotals();
    this.displayProductToBuy();
  }
  onClick(product) {
    product.addToCart = !product.addToCart;

    if (window.confirm("Your Item Has been Removed From Cart. Do you want to add it to your wishlist?")) {
      product.isWishList = true;
    }

    console.log(product)
    this.productService.updateSubProductBtId(product._id, product).subscribe((data) => {
      console.log(data);
      this.calculateTotals();
      this.displayProductToBuy();
    })
  }
  displayProductToBuy() {
    this.productService.getProductData().subscribe((data) => {
      const allProducts = data.flatMap(category => category.products);
      const wishListProducts = allProducts.filter(product => product.addToCart);
      this.products = wishListProducts;
      this.calculateTotals();
      console.log(allProducts);
    });
  }
  calculateTotals() {
    if (this.products && this.products.length > 0) {
      this.totalProducts = this.products.length;
      this.totalPrice = this.products.reduce((total, product) => total + product.price, 0);
    } else {
      this.totalProducts = 0;
      this.totalPrice = 0;
    }
  }
}
