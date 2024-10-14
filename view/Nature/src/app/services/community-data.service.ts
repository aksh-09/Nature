import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityDataService {

  constructor(private http:HttpClient) { }
  postEmail(data):Observable<any>{
    return this.http.post(`http://localhost:3000/nature/community`,data);
  }
}
