import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
constructor(private productService:ProductsService,private router:Router){}
products:any[]=[];
ngOnInit(): void {
  this.productService.getProductData().subscribe(data=>{
    for(let i=0;i<data.length;i++){
      this.products.push({id:data[i]._id,name:data[i].name});
    }
  })
}
selectProduct(id){
  console.log(id);
  this.router.navigate(['/products',id])
}
logout(){
  localStorage.clear();
  alert('')
  this.router.navigate(['/']);
}
}
