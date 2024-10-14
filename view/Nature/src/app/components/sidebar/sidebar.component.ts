import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
constructor(private productService:ProductsService,private router:Router,private route:ActivatedRoute){}
products:any[]=[];
selectedUrlId:string;
ngOnInit(): void {
  this.productService.getProductData().subscribe(data=>{
    for(let i=0;i<data.length;i++){
    this.products.push({ id: data[i]._id, name: data[i].name });
    }
  })
  this.route.params.subscribe((params)=>{
    this.selectedUrlId=params['id'];
  })
}
selectProduct(id){
  console.log(id);
  this.router.navigate(['/products',id])
}
isProductSelected(id):boolean{
  return id===this.selectedUrlId;
}
}
