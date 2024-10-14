import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProductData():Observable<any>{
    return this.http.get(`http://localhost:3000/nature/products`)
  }
  getProductDataById(id):Observable<any>{
    return this.http.get(`http://localhost:3000/nature/products/${id}`)
  }
  updateSubProductBtId(id,data):Observable<any>{
    return this.http.put(`http://localhost:3000/nature/subproducts/${id}`,data);
  }
}
