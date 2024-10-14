import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDataService {

  constructor(private http:HttpClient) { }
  postFeedbackData(data):Observable<any>{
    return this.http.post(`http://localhost:3000/nature/feedback`,data);
  }
}
