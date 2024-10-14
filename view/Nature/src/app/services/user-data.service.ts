import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private tokenKey = 'authToken';
  
  constructor(private http: HttpClient) { }

  postUserData(data): Observable<any> {
    return this.http.post<any>('http://localhost:3000/nature/register', data).pipe(
      tap((response) => {
        if (response && response.user && response.user.id) {
          this.setToken(response.token);
        }
      })
    );
  }

  getUserData(data): Observable<any> {
    return this.http.post(`http://localhost:3000/nature/login`, data).pipe(
      tap((response) => {
        if (response && response.token) {
          console.log(response);
          this.setToken(response.token);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; //if it has value it will convert it into true
  }

  private setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  private getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
  
}
